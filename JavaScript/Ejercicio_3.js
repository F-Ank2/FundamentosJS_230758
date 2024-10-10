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