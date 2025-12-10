import { crearEstudiante } from './modules/Sistema_Registro.js';
// correción del modulo prompt-sync
import promptSync from 'prompt-sync';
const prompt = promptSync();

const nombreEstudiante = prompt("Ingrese el nombre del estudiante:");
    if (!nombreEstudiante) {
        console.log("Registro cancelado. El nombre es obligatorio.");
    }

    // Pedir las notas (se asume que se ingresan separadas por coma, por ejemplo: 4.5, 3.8, 5.0)
    const notasInput = prompt("Ingrese las notas separadas por comas (ej: 4.5, 3.8, 5.0):");
    if (!notasInput) {
        console.log("No se ingresaron notas. Creando registro con 0 notas.");
        // Llamar con el nombre y sin notas
        const resultadoSinNotas = crearEstudiante(nombreEstudiante);
        console.log("Resultado (Sin Notas):", resultadoSinNotas);
    }

    // Convertir el string de notas a un array de números.
    const notasArray = notasInput
        .split(',')
        .map(str => {
            // Convertir a número (con parseFloat para manejar decimales)
            const num = parseFloat(str.trim());
            // Si la conversión falla, retorna el valor original (NaN o string si no era un número)
            // para que la validación en crearEstudiante lo detecte.
            return isNaN(num) ? str.trim() : num;
        });

    // Llamar a la función usando el spread operator para pasar las notas como argumentos rest
    const estudianteRegistrado = crearEstudiante(nombreEstudiante, ...notasArray);

    // Mostrar el resultado esperado
    console.log("\n--- Resultado del Registro ---");
    console.log("Nombre:", estudianteRegistrado.nombre || "N/A");
    console.log("Primera Nota:", estudianteRegistrado.primeraNota);
    console.log("Promedio Resto de Notas:", estudianteRegistrado.promedioResto);
    console.log("Total de Notas Registradas:", estudianteRegistrado.totalNotas);
    
    // Mostrar el objeto completo (resultado esperado)
    console.log("\nObjeto Final (Resultado Esperado):", estudianteRegistrado);
