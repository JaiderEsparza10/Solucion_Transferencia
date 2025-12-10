export function fusionarCatalogos(a, b) {
    // Catálogos iniciales
    const catalogoA = [
        { id: 1, nombre: "Curso JavaScript", precio: 40 },
        { id: 2, nombre: "Curso HTML", precio: 35 }
    ];
    const catalogoB = [
        { id: 3, nombre: "Curso CSS", precio: 30 },
        { id: 4, nombre: "Curso Node.js", precio: 45 }
    ];
    try {
        // 1. Usar try…catch para validar que ambos parámetros sean arreglos.
        if (!Array.isArray(a) || !Array.isArray(b)) {
            throw new Error("Ambos parámetros ('a' y 'b') deben ser arreglos válidos para fusionar los catálogos.");
        }

        // 2. Utilizar spread para fusionarlos sin modificar los originales.
        // El operador spread (...) crea una nueva copia superficial de los elementos.
        const catalogoCombinado = [...a, ...b];

        // 3. Retornar un nuevo catálogo ordenado por precio ascendente.
        // Usamos .slice() o el spread nuevamente si quieres asegurarte de que el arreglo
        // en sí mismo (no solo los contenidos) no sea el original antes de ordenarlo,
        // aunque el spread ya lo garantizó en el paso anterior.
        // Usamos .sort() sobre el catalogoCombinado.
        const catalogoOrdenado = catalogoCombinado.sort((curso1, curso2) => {
            // Criterio de ordenación: precio ascendente
            return curso1.precio - curso2.precio;
        });
        
        // Retornar la nueva colección combinada, ordenada e INMUTABLE.
        // Usamos Object.freeze para hacer inmutable el arreglo *externo*.
        return Object.freeze(catalogoOrdenado);

    } catch (error) {
        // Manejo de errores
        console.error("Error al fusionar catálogos:", error.message);
        // Retornar un objeto de error inmutable
        return Object.freeze({ error: error.message });
    }
}