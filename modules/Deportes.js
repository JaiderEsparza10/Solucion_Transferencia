// --- Estructura de Datos de Ejemplo ---
export const jugadores = [
    { nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
    { nombre: "Luis", stats: { puntos: 15, asistencias: 7 } },
    { nombre: "Marta", stats: { puntos: 10, asistencias: 3 } } // Añadido un jugador extra para mejor prueba de suma
];

export function estadisticas(listaJugadores) {
    try {
        // 1. Verifique mediante try…catch que la estructura de datos sea válida.
        if (!Array.isArray(listaJugadores) || listaJugadores.length === 0) {
            throw new Error("La estructura debe ser un arreglo no vacío de jugadores.");
        }
        
        // Verificación básica de estructura profunda
        if (listaJugadores.some(j => !j.nombre || !j.stats || typeof j.stats.puntos !== 'number')) {
            throw new Error("Cada jugador debe tener un 'nombre' y 'stats.puntos' numérico.");
        }

        // 2. Emplee destructuración profunda para obtener los puntos del primer jugador.
        // Se obtiene el primer elemento del array y luego se extrae { puntos } de su propiedad stats.
        const [{ stats: { puntos: puntosPrimerJugador } }] = listaJugadores;

        // 3. Calcule la suma total de puntos del equipo utilizando técnicas inmutables.
        // Se usa reduce para sumar los puntos, sin mutar el arreglo original.
        const puntosTotales = listaJugadores.reduce((acc, jugador) => {
            return acc + jugador.stats.puntos;
        }, 0);

        // 4. Devuelva un objeto con el informe (inmutable).
        const informe = {
            puntosDelPrimerJugador: puntosPrimerJugador,
            puntosTotalesDelEquipo: puntosTotales,
            // Lista inmutable de jugadores procesados (copia superficial del array, pero el array es inmutable)
            listaInmutableJugadores: Object.freeze([...listaJugadores]) 
        };
        
        return Object.freeze(informe);

    } catch (error) {
        // Manejo de errores
        console.error("Error al generar las estadísticas:", error.message);
        return Object.freeze({ error: error.message });
    }
}