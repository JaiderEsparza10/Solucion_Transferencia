// Importamos la función y los catálogos del módulo.
import { catalogoA, catalogoB, fusionarCatalogos } from './modules/Catalogos.js';

const prompt = require('prompt-sync')();

console.log("--- Ejecución Exitosa: Fusión y Ordenamiento ---");
    
// Llamada exitosa con los catálogos definidos
const nuevoCatalogo = fusionarCatalogos(catalogoA, catalogoB);
    
console.log("Catálogo A Original:", catalogoA);
console.log("Catálogo B Original:", catalogoB);
console.log("Catálogo Fusionado y Ordenado:");
console.log(nuevoCatalogo);
    
console.log("\n--- Prueba de Manejo de Errores ---");
    
// Simulación de error (forzando un parámetro no-arreglo usando prompt)
// Si se cancela o se ingresa texto, se generará el error esperado.
const entradaNoArray = prompt("Ingrese cualquier valor aquí (ej: 'hola') para forzar un error de tipo:");
    
console.log(`\nParámetros de prueba de error: A='${entradaNoArray}' (String), B=catalogoB (Array)`);
    
// Llamada que fallará la validación porque entradaNoArray es un string (no un Array)
const resultadoError = fusionarCatalogos(entradaNoArray, catalogoB); 
    
console.log("Resultado del Error (Objeto inmutable de error):");
console.log(resultadoError);