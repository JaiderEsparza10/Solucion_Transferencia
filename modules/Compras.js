// --- Estructuras de Datos de Ejemplo ---
export const clienteEjemplo = { 
    nombre: "Ana Martínez", 
    correo: "ana.m@ejemplo.com" 
};

export const productosEjemplo = [
    { nombre: "Teclado Mecánico", precio: 80.50 },
    { nombre: "Mouse Inalámbrico", precio: 35.00 },
    { nombre: "Monitor Curvo 27\"", precio: 320.99 }
];
export function procesarCompra(cliente, productos) {
    try {
        // Validar con try…catch que el cliente tenga los dos datos y que los productos sean válidos.
        
        // Validación del Cliente
        if (!cliente || typeof cliente.nombre !== 'string' || !cliente.nombre || typeof cliente.correo !== 'string' || !cliente.correo) {
            throw new Error("El objeto cliente debe contener un 'nombre' y 'correo' válidos.");
        }
        
        // Validación de Productos
        if (!Array.isArray(productos) || productos.length === 0 || products.some(p => typeof p.nombre !== 'string' || typeof p.precio !== 'number' || p.precio <= 0)) {
            throw new Error("La lista de productos debe ser un arreglo no vacío con elementos que contengan 'nombre' (string) y 'precio' (número positivo).");
        }

        // Utilizar spread para crear un nuevo objeto con toda la información del cliente.
        // Esto no es estrictamente necesario para el informe, pero asegura la inmutabilidad 
        // y la creación de una copia si se necesitara modificar el objeto cliente dentro.
        const clienteCopia = { ...cliente };
        
        // Cálculo del Precio Total
        const precioTotal = productos.reduce((acc, producto) => acc + producto.precio, 0);

        // 3. Usar destructuración para separar el primer producto comprado del resto.
        const [primerProducto, ...restoProductos] = productos;

        // 4. Retornar un informe con los datos solicitados (inmutable).
        const informe = {
            totalProductos: productos.length,
            precioTotal: parseFloat(precioTotal),
            primerProductoAdquirido: primerProducto,
            // (Opcional) Incluimos la copia del cliente para inmutabilidad completa
            clienteInfo: Object.freeze(clienteCopia)
        };
        
        return Object.freeze(informe);

    } catch (error) {
        // Manejo de errores
        console.error("Error al procesar la compra:", error.message);
        return Object.freeze({ error: error.message });
    }
}