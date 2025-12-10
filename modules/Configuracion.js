// --- Configuraciones Iniciales de Ejemplo ---
export const baseConfig = { 
    modo: "producción", 
    lenguaje: "es", 
    nivel: 1 
};

export const extraConfig = { 
    nivel: 2, 
    tema: "oscuro",
    cache: true
};

export const userConfig = {
    nivel: 3,
    debug: false 
};

export function configFinal(...configs) {
    let objetoFinal = {};
    
    try {
        // 3. Valide con try…catch que cada elemento recibido sea un objeto.
        for (const config of configs) {
            // Verificamos que sea un objeto y que no sea null (typeof null es 'object') y no sea un array
            if (typeof config !== 'object' || config === null || Array.isArray(config)) {
                throw new Error("Cada argumento pasado debe ser un objeto válido de configuración.");
            }
        }
        
        // 2. Use spread para mezclarlas todas en un solo objeto final sin mutar ninguna.
        // El operador spread dentro de un nuevo objeto ({...}) asegura la inmutabilidad 
        // de las configuraciones originales y fusiona las propiedades.
        // NOTA: Las propiedades posteriores (derecha) sobrescriben las anteriores (izquierda).
        objetoFinal = {
            ...objetoFinal, // Inicialmente vacío
            ...baseConfig, // Se utiliza solo si se necesita incluir la base por defecto
            ...configs.reduce((acc, currentConfig) => ({ ...acc, ...currentConfig }), {}) 
            // Alternativa simple sin reduce, que funciona gracias a rest:
            // ...configs 
        };
        
        // Retornar el objeto final con validacion: true
        return Object.freeze({ 
            ...objetoFinal,
            validacion: true 
        });

    } catch (error) {
        // Manejo de errores
        console.error("Error en la configuración:", error.message);
        
        // Retornar objeto final con validacion: false
        // Se asegura que el objeto retornado en caso de error también sea inmutable.
        return Object.freeze({ 
            validacion: false,
            error: error.message
        });
    }
}