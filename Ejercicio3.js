// Importamos la función y los datos de ejemplo desde el módulo.
import { clienteEjemplo, productosEjemplo, procesarCompra } from './modules/Compras.js';

// NOTA: Para que 'prompt' funcione, debes ejecutar este código en un navegador 
// o usar una librería de Node.js que lo simule.

console.log("--- 🛒 Ejecución Exitosa: Informe de Compra ---");
    
// Llamada exitosa con los datos de ejemplo importados
const informeExitoso = procesarCompra(clienteEjemplo, productosEjemplo);
    
console.log("Cliente:", clienteEjemplo.nombre);
console.log("Productos:", productosEjemplo.length);
console.log("\nInforme de Compra (Resultado Esperado):");
console.log(informeExitoso);
    
console.log("\n--- 🛑 Prueba de Manejo de Errores ---");
    
// 1. Prueba de Error: Cliente Inválido (usando prompt para simular datos nulos)
const nombreError = prompt("Prueba de Error: Ingrese un nombre de cliente (deje vacío para forzar error):");
const clienteInvalido = { nombre: nombreError, correo: "test@error.com" };
    
console.log(`\nParámetros de prueba de error (Cliente): Cliente={nombre: '${clienteInvalido.nombre}'}, Productos=${productosEjemplo.length}`);
    
const resultadoErrorCliente = procesarCompra(clienteInvalido, productosEjemplo); 
console.log("Resultado del Error (Cliente Inválido):", resultadoErrorCliente);
    
// 2. Prueba de Error: Productos Vacíos
console.log(`\nParámetros de prueba de error (Productos Vacíos)`);
const resultadoErrorProductos = procesarCompra(clienteEjemplo, []); 
console.log("Resultado del Error (Productos Vacíos):", resultadoErrorProductos);