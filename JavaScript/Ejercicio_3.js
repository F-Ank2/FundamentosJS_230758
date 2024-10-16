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
    Nombre: "Francisco",
    Apellidos: "Garcia Garcia",
    Tipo: "Frecuente",
    Correo: "230758@utxicotepec.edu.mx",
    PaisOrigen: "México",
    SaldoActual: 320000.00
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

// Operaciones sobre Objetos
// Unión de Objetos
console.log("%c9.- Métodos para contorlar la mutabilidad de los Objetos, Sellado (SEAL)", style_console);

// Destructuración de 2 o más objetos
console.log("%c10.- Desestructuración de 2 o más Objetos", style_console);
let {Precio: productoPrecio, SKU: productoSKU, Marca: productoMarca} = Producto
let {Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo} = Comprador

// Transformar valores cuantitativos en cualitativos
if(productoPrecio>2000)
    productoPrecio = "Caro"
else
    productoPrecio = "Barato"

if (clienteSaldo>0)
    clienteSaldo="A favor"
else if (clienteSaldo<0)
    clienteSaldo="En contra"
else
    clienteSaldo="Sin deuda"

// Transformar valores cualitativos a cuantitativos

let clienteNivel

if(clienteTipo=="Premium")
    clienteNivel = 1
if (clienteTipo=="Free")
    clienteNivel = 2
if (clienteTipo=="No identificado")
    clienteNivel = 3


// Clasificamos al cliente por su País de Origen
if(clientePais=="México")
    clientePais= "Nacional"
else
    clientePais = "Extranjero"

// OLE - Object Literal Enhancement

let datosClientesPromociones = {clienteCorreo, clientePais, clienteNivel, clienteSaldo, productoMarca, productoPrecio}

// El nuevo objeto que creamos sería un ejemplo de la información que enviariamos al area de Marketing  para la difusión de promociones
console.log("Los datos del cliente y sus hábitos de compra son: ")
console.table(datosClientesPromociones);

//Operaciones sobre Objetos
// Unión de Objetos
console.log("%c11.- Unión de Objetos usando el método de asignación (ASSING)", style_console);

console.log("Imprimos la estructura y valores del Objeto PRODUCTO")
console.table(Producto);

console.log("Imprimimos la estructura y valores del Objeto PEDIDO")
console.table(Pedido)

// Suponiendo que el usuario ya realizó el pago el pedido se convertira en una VENTA que requiere información de ambos objetos
let Producto3 = {...Producto} 
const Venta = Object.assign(Producto3, Pedido);
 console.log("Consultamos este nuevo objeto VENTA")
 console.table(Venta);
// IMPORTANTE: ASSIGN, no solo permite la fusión de 2 o más objetos, también muta los objetos originales, perdiendo el valor original del ID en este

// Unión de Objetos usando SPREAD OPERATOR para evitar la perdida de información con objetos que comaprten el mismo nombre en sus propiedades
console.log("%c12.- Unión de Objetos usando el SPREAD OPERATOR (...)", style_console);

let Venta2 =
{
    producto: {...Producto},
    comprador:{...Comprador},
    pedido:{...Pedido}
}
console.log("Fusionamos los 3 objetos en uno nuevo, sin perdida de información")
console.log(Venta2)
console.table(Venta2)

// Vamos a verificar el estatus de mutabilidad de los objetos
console.log("Vamos a  verificar el estatus de mutabilidad del objeto Pedido")
console.log(`Esta el objeto de Pedido Congelado ? : ${Object.isFrozen(Pedido)}`);
console.log(`Esta el objeto de Pedido Sellado ? : ${Object.isSealed(Pedido)}`);

console.log("Vamos a  verificar el estatus de mutabilidad del objeto Comprador")
console.log(`Esta el objeto de Comprador Congelado ? : ${Object.isFrozen(Comprador)}`);
console.log(`Esta el objeto de Comprador Sellado ? : ${Object.isSealed(Comprador)}`);

console.log("Vamos a  verificar el estatus de mutabilidad del objeto Producto")
console.log(`Esta el objeto de Producto Congelado ? : ${Object.isFrozen(Producto)}`);
console.log(`Esta el objeto de Producto Sellado ? : ${Object.isSealed(Producto)}`);

// Modificamos la estructurado de producto, agregando una nueva propiedad
Producto['isLegacy']=true; //Legacy means is not being produced anymore but still exists
console.table(Producto)
console.log(Venta2);