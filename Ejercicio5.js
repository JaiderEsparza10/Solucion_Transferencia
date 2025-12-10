// Importamos la función y los objetos de configuración de ejemplo desde el módulo.
import { baseConfig, extraConfig, userConfig, configFinal } from './modules/Configuracion.js';

// correción del modulo prompt-sync
import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("--- Ejecución Exitosa: Fusión de Configuraciones ---");
    
// Llamada exitosa: El 'nivel' 3 (userConfig) sobrescribe el 'nivel' 2 (extraConfig) y 1 (baseConfig).
const configExitosa = configFinal(baseConfig, extraConfig, userConfig);
    
console.log("Configuraciones Originales:");
console.log("Base:", baseConfig);
console.log("Extra:", extraConfig);
console.log("Usuario:", userConfig);
console.log("\nConfiguración Final (Resultado Esperado):");
console.log(configExitosa);
    
console.log("\n--- Prueba de Manejo de Errores ---");
    
// 1. Prueba de Error: Elemento no objeto (usando prompt para simular entrada de string)
const entradaError = prompt("Prueba de Error: Ingrese cualquier valor (ej: 'no object') para forzar un error de tipo:");
    
console.log(`\nParámetros de prueba de error: {baseConfig}, {extraConfig}, '${entradaError}'`);
    
// La llamada falla porque 'entradaError' es un string
const resultadoErrorEstructura = configFinal(baseConfig, extraConfig, entradaError); 
console.log("Resultado del Error (Elemento Inválido):");
console.log(resultadoErrorEstructura);