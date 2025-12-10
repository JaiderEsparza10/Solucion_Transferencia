export function crearEstudiante(nombre, ...notas) {
    try {
        // 1. Validar que todas las notas sean números
        if (notas.some(nota => typeof nota !== 'number' || isNaN(nota))) {
            throw new Error("Todas las notas deben ser valores numéricos válidos.");
        }

        // Si no hay notas, manejamos un caso especial para evitar errores de destructuración.
        if (notas.length === 0) {
            return {
                nombre: nombre,
                primeraNota: undefined,
                promedioResto: 0,
                totalNotas: 0
            };
        }

        // 2. Usar destructuración para separar la primera nota del resto.
        const [primeraNota, ...restoNotas] = notas;

        // Calcular el promedio del resto de notas
        let promedioResto = 0;
        if (restoNotas.length > 0) {
            const sumaResto = restoNotas.reduce((acumulador, nota) => acumulador + nota, 0);
            promedioResto = sumaResto / restoNotas.length;
        }

        // 3. Retornar un objeto inmutable
        // Usamos Object.freeze para asegurar que el objeto sea inmutable.
        return Object.freeze({
            nombre: nombre,
            primeraNota: primeraNota,
            promedioResto: promedioResto,
            totalNotas: notas.length // El total de notas registradas
        });

    } catch (error) {
        // Manejo de errores (try...catch)
        console.error("Error en el registro del estudiante:", error.message);
        // Retornar null o un objeto de error para indicar el fallo
        return Object.freeze({ error: error.message });
    }
}