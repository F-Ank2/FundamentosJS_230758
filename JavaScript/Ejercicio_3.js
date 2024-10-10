// Objetos

const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`


// VARIABLES INDEPENDIENTES
console.log("%c1.- Variables Independientes", style_console);
// Declaramos valores independientes relacionados a un PRODUCTO
let Producto_Nombre = "Guantes de Tela";
let Producto_Marca = "WinterClothes";
let Producto_Modelo = "G24";
let Producto_Precio = "45.50";
let Producto_Disponibilidad = "false";
let Producto_SKU = Symbol("LQP102BZ-PW610Z");
let Producto_Stock = 8;
let Producto_Imagen = null;
let Producto_Barcode;
let Producto_Categorias = ["Ropa","Accesorios","Moda","Promociones Buen Fin","Mejor Valorados"]

// Accedemos a los valores de las características del producto de manera independiente
console.log(`Los datos del PRODUCTO son: \n
Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>
Marca: ${Producto_Marca}, Tipo de Dato <${typeof(Producto_Marca)}>
Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof(Producto_Modelo)}>
Precio: ${Producto_Precio}, Tipo de Dato <${typeof(Producto_Precio)}>
Disponibilidad: ${Producto_Disponibilidad}, Tipo de Dato <${typeof(Producto_Disponibilidad)}>
Stock: ${Producto_Stock}, Tipo de Dato <${typeof(Producto_Stock)}>
Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof(Producto_Barcode)}>
Categorias: ${Producto_Categorias}, Tipo de Dato <${typeof(Producto_Categorias)}>
`)
// SKU: ${toString(Producto_SKU)}, Tipo de Dato <${typeof(Producto_SKU)}>
console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresión anterior");
console.log(Producto_SKU);
console.log(typeof(Producto_SKU));

// Ahora lo declaramos como un OBJETO
console.log("%c2.- Objeto", style_console);
let Producto =
{
    ID: 3216,
    Nombre: "Reloj BM21",
    Marca: "Bromancer",
    Modelo: "Bromancer-21",
    Precio: 2543.00,
    Disponibilidad: true,
    Stock: 3,
    SKU: "PW2712-941",
    Imagen: "../assets/products/watch-bromancer/bromancer21.png",
    Barcode: null,
    Categorias: ["Accesorios","Moda"]
}

// Ahora leemos el objeto completo
console.table(Producto);

console.log("Accediendo a propiedades específicas del PRODUCTO");
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if (Producto.Disponibilidad==0)
console.log(`Estatus: Agotado`)
else
console.log(`Estatus: ${Producto_Stock} unidades disponibles`);

// Destructuración de Objetos.

console.log("%c3.- Destructuración de Objetos", style_console);

let Producto2 =
{
    Clave:372,
    Nombre: "Gorro de Invierno",
    Marca: "CBatt",
    Modelo: "WPP-Winter",
    Precio: 530.00,
    Disponibilidad: true,
    Stock: 6,
    SKU: "OO9481D-0356",
    Imagen: "../assets/products/accesories/gorro_invierno.png",
    Barcode: 888392491626,
    Categorias: ["Invierno","Ropa","Moda","Accesorios"]
}

let Comprador = 
{
    ID: 2532,
    Nombre: "Jesús",
    Apellidos: "Domínguez Ramírez",
    Tipo: "Frecuente",
    Correo: "230028@utxicotepec.edu.mx",
    PaisOrigen: "México",
    SaldoActual: 3200.00
}

let Pedido = 
{
    ID:5816,
    Producto_Clave: 411,
    Comprador_Clave: 2322,
    Cantidad: 1,
    Estatus: "Carrito de Compra",
    TipoPago: "Tarjeta de Crédito"
}

// En base a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con sus saldo a favor

let {Precio: Producto_Precio2} = Producto2;
let {Cantidad:Pedido_Cantidad} = Pedido;
let {SaldoActual: Cliente_SaldoActual} = Comprador;
let Costo_Compra = Producto_Precio2 * Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de : $${Costo_Compra}`)
if (Costo_Compra<Cliente_SaldoActual)
console.log("El cliente tiene saldo suficiente.")

// Actualizar el valor de los Objetos

console.log("%c4.- Actualización de los valores de las propiedades de un Objeto", style_console)

console.log(`El objeto actualmente tiene los siguientes valores`)
console.log(JSON.stringify(Producto2, null, 2));
// null es separador y el 2 es un repetidor.

// Convierte el objeto a una cadena para evitar problemas con la referencia

console.log(`Por cuestiones de inflación el costo del producto ha cambiado y deber ser actualizado... de $530.00 a $631.50`)

// Para codificar el valor de un objeto basta con igualar el nuevo valor de la propiedad deseada

Producto2.Precio = 631.50;
console.log(`Los nuevos valores del Producto son: `)
console.log(Producto2);

// ¿Puedo cambiar no solo el valor, si no el tipo de dato de un Objeto en JavaScript
console.log(`------------------------------`)
console.log(`El objeto actualmente tiene los siguientes valores`)
let tipoDisponibilidad = typeof(Producto2.Disponibilidad)
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
console.log(JSON.stringify(Producto2, null, 2))
Producto2.Disponibilidad="Sí"
let nuevoTipoDisponibilidad = typeof(Producto2.Disponibilidad)
console.log(Producto2);
console.log(`El nuevo tipo de dato de la disponibilidad es: ${nuevoTipoDisponibilidad}`)

//Convierte el Objeto a una cadena para evitar problemas con la referencia
console.log('Por cuestiones de inflación el costo del producto ha cambiado y debe ser actualizado')
Producto.Precio=19000.00
console.log(`Los nuevos valores del producto son:`)
console.log(Producto2);

// Agregar nuevas propiedades a un objeto existente
console.log("%c5.- Agregación de Propiedades de un Objeto (MUTACIÓN)",style_console);
console.log("Objeto antes de ser modificado:")
console.table(Comprador)

// Agregando propiedades
Comprador['Direccion'] = "Av. 05 de Mayo #25, Interior 4A, Xicotepec de Juárez, Puebla, México"
Comprador['Tipo'] = "Premium";
Comprador['Estatus'] = "Inactivo"
Comprador['TotalCompras'] = 50000.00
console.log("Objetos despues de ser modificado")
console.table(Comprador)

//Eliminar propiedades de un objeto existente
console.log("%c6.- Eliminación de propiedades de un objeto (MUTACION)", style_console)
console.log("Objeto antes de ser modificado")

console.table(Pedido)
//Eliminamos la propiedad de Tipo de pedido
delete Pedido.TipoPago;
console.log("Objeto despues de ser modificado")
console.table(Pedido)

console.log("%c7.- Métodos para controlar la mutabilidad de los objetos, congelación (FREEZE)", style_console);

//Si deseamos permitir que los objetos 
console.log('La estructura actual del objeto comprador es: ');
console.table(Comprador)
Object.freeze(Comprador)

//Intentemos agregar, eliminar o modificar los valores de sus propiedades
Comprador.FechaUltimaCompra= "05/09/2024 10:15:25"
delete Comprador.Tipo
Comprador.Direccion = "Calle 16 de septiembre #102, col. Manantiales, Huauchinango, Puebla, México";
console.log('Verificamos sis e realizaron los cambios en el objeto Comprador: ')
console.table(Comprador)


console.log("%c8.- Métodos para controlar la mutabilidad de los Objetos, Sellado (SEAL)", style_console);
// Sin embargo, en el caso que desemos poder modificar los valores de las propiedades del Objeto, pero no su estructura, usaremos SEAL
console.log("Objeto antes de ser modificado: ")
console.table(Pedido)
//Sellamos el objeto
Object.seal(Pedido)
// Intentamos modificar su estructura
Pedido['FechaPedido'] = "25/09/2024 11:05:03"
delete Pedido['Cantidad']
console.log('Verificamos si se realizaron los cambios en el Objeto PEDIDO:')
console.table(Pedido)
//Ahora intentamos modificar el valor de las propiedades
Pedido.Cantidad = 5
console.log('Verificamos si se realizaron los cambios en el Objeto PEDIDO:')
console.table(Pedido);
