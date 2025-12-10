// Importamos la función y el arreglo de jugadores de ejemplo desde el módulo.
import { jugadores, estadisticas } from './modules/Deportes.js';

// NOTA: Para que 'prompt' funcione, debes ejecutar este código en un navegador 
// o usar una librería de Node.js que lo simule.

console.log("--- Ejecución Exitosa: Informe Deportivo ---");
    
// Llamada exitosa
const informeExitoso = estadisticas(jugadores);
    
console.log("Primer jugador:", jugadores[0].nombre);
console.log("Total de jugadores:", jugadores.length);
console.log("\nInforme Estadístico (Resultado Esperado):");
console.log(informeExitoso);
    
console.log("\n--- Prueba de Manejo de Errores ---");
    
// 1. Prueba de Error: Estructura no válida (usando prompt para simular entrada de string)
const entradaError = prompt("Prueba de Error: Ingrese cualquier valor (ej: 'no array') para forzar un error de tipo:");
    
console.log(`\nParámetros de prueba de error: Entrada='${entradaError}' (String, no Array)`);
    
const resultadoErrorEstructura = estadisticas(entradaError); 
console.log("Resultado del Error (Estructura Inválida):", resultadoErrorEstructura);
    
// 2. Prueba de Error: Array Vacío
console.log(`\nParámetros de prueba de error: Array Vacío`);
const resultadoErrorVacio = estadisticas([]); 
console.log("Resultado del Error (Array Vacío):", resultadoErrorVacio);