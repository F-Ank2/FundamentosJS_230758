// Tipos de Datos en JS

// 1. Undefined
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente = "Juan Romero"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente = 19227
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

// Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas

// 2. Boolean
console.warn("--- Tipo de Dato: BOOLEAN (Boleano - True/False)")
let esPremium = "No lo sé";
console.log(`¿Es el cliente premium? : ${esPremium} `);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log(`Asignando el valor "true" a la variable`);
esPremium = "true";
console.log(`¿Es el cliente premium? : ${esPremium} `);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log("Asignando el valor true a la variable");
esPremium = true;
console.log(`¿Es el cliente premium? : ${esPremium} `);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log("Asignando el valor false a la variable");
esPremium = false;
console.log(`¿Es el cliente premium? : ${esPremium} `);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
if (esPremium) {
    console.log("El cliente pago por usar el servicio");
} else {
    console.log("El cliente recibe los servicios gratuitos")
}

// 3. Number

var cantidad;
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_transaccion;

console.warn("--- Tipo de Dato - NUMBER (Números, positivos, negativos, decimales, flotantes)");
console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta}, (Tipo de Dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}, (Tipo de Dato = ${typeof(costo_producto)})`);
cantidad=8;
console.log(`Has elegido comprar: ${cantidad} de productos`);
console.log(`El importe total de la compra es: ${cantidad*costo_producto}`);
saldo_cuenta=saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`)
// El cliente realiza un abono de 1500 
monto_transaccion = 1500;
console.log(`Tu abono de: ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${saldo_cuenta+monto_transaccion}`);

// 4. Strings o Cadenas de Texto
const alumno = "Jesús Domínguez Ramírez";
let producto;

console.warn("--- Tipo de Dato - STRING (Cadena de Caractéres");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`);
producto = "MONITOR 20\"";
console.log(`El nombre del producto es: ${producto}, que es un tipo de dato ${typeof(producto)}`);

// Manipulando los STRINGS
console.log(`Más adelante podremos transformar el contenido de los STRINGS usando funciones específicas como convertir a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);
console.log(`O en su defecto a minúsculas: ${producto} => ${producto.toLowerCase()}`);

let numero = "30";
let numero2 = 30;

console.log(typeof numero);
console.log(typeof numero2);

// 5. BigInt (Enteros de Dimensiones Amplias) - Generalmente utilizado en sistemas matemáticos, físicos o espaciales donde se requiere de una excelente precisión numérica.
console.warn("--- Tipo de Dato - BIGINT (Número Amplio)")
const numeroGrande = 1234567890
const numeroGrande2 = 12345678901234567890;
let numeroGrande3 = 12345678901234567890123456789;
let numeroGrande4 = 1234567890123456789012345678901234567890;
console.log(`El primero experimento de un número grande es: ${numeroGrande}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande)}`);
console.log(`El primero experimento de un número grande es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`);
console.log(`El primero experimento de un número grande es: ${numeroGrande3}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande3)}`);
console.log(`El primero experimento de un número grande es: ${numeroGrande4}, que ya no es soportado por NUMBER perdiendo precisión, y su tipo de dato es: ${typeof(numeroGrande4)}`);

//Para definir el tipo de dato BigInt debemos invocar la función BigInt o usar la letra "n" al final del número en la asignación de valor
console.log("Declaramos los valores númericos gran tamaño...")
numeroGrande3 = BigInt(12345678901234567890123456789);
numeroGrande4 = 123456789012345678901234567891234567890n;

console.log(`El segundo experimento de un numero grande es: ${numeroGrande3}, y su tipo de dato es: ${typeof(numeroGrande3)}`)  
console.log(`El segundo experimento de un numero grande es: ${numeroGrande4}, y su tipo de dato es: ${typeof(numeroGrande4)}`)
// Hay que considerar que los tipos de datos declarados como BigInt no son operables con los de tipo number


let numero1 = 238;
console.log(typeof numeroGrande);

// Si intentamos  realizar una operación matemática entre estos dos tipos de datos, obtenderemos un error crítico de operación

console.log(`El resultado de la operación de: numeroGrande4/numero1 es = a: ${numeroGrande4/BigInt(numero1)}`);

// const numero3 = 10;
// const numero4 = 20;

// console.log(numero3+Number(numeroGrande));

// const numero5 = "30";
// const numero6= 30
// console.log(typeof String(numero2));
// console.log(typeof Numbernumero);

// 6. Symbol
console.warn("--- Tipo de Dato - SYMBOL (Simbolo o Forzar la Unicidad)")
// VID APUNTES
// const primerSymbol = Symbol(30);
// const segundoSymbol= Symbol(30);

// console.log(primerSymbol===segundoSymbol);
// console.log(primerSymbol.valueOf());
// console.log(segundoSymbol.valueOf());
// 7. Null
console.warn("--- Tipo de Dato Nulo - NULL (Nulo o Vacío)")
// El tipo de dato nulo se asigna cuando el sistema o el usuario saben de la variable pero prefieren dejarlo vacío, bajo su consentimiento, a diferencia de UNDEFINED que es un valor desconocido asignado por DEFAULT por JS.

let perfilUsuario = null;
let passUsuario = null;
let generoUsuario = null;
let estatusRelacionSentimental = null;
let fecha_ultimoPost = undefined;

// Supongamos que estamos programando una Red Social, tipo Facebook, en la que parte de la información se publicará en el perfil del usuario.

// Si el usuario no ha iniciado sesión en el dispositivo móvil o en la aplicación web, puede explorar contenido de acceso público y no existira información par amostrar.

// En la HU (Historia de Usuario), que el usuario desea logearse debera ingresar su numero telefónico o correo electrónico y una contraseña que deberemos guardar en las variables previamente declaradas.

// Supongamos que el usuario: Marco R. con correo electrónico marco.ram@gmail.com desea ingresar con su contraseña: pas1234

nombreUsuario = "marco.ram@gmail.com";
passUsuario = "pass123";

// En este momento de ejecución del sistema no sabemos su género, ni su estatus de relación sentimental.

console.log(`El usuario: ${nombreUsuario} esta intentando logear con una contraseña de: ${passUsuario}`)

// Lo que prosigue es que el sistema contejara los datos ingresados con la base de datos y en caso de que los datos sean correctos comenzará la sesión en la plataforma actualizando estos valores.

// Dado que Marco es del genero Másculino, y denota que su estatus de relación no ha sido capturado o lo mantiene privado esto generar la actualización de los valores de las variables
generoUsuario = "M";
estatusRelacionSentimental = null

console.log(`El usuario: ${nombreUsuario}, se ha logeado exitosamente, al tener accesoa  su información de perfil podemos deducir que es del género ${generoUsuario} y que su estatus de relación es ${estatusRelacionSentimental} y su última publicación la realizó el: ${fecha_ultimoPost}`)

// Comparando NULL vs UNDEFINED
// Si bien UNDEFINED y NULL tienen el mismo valor, no tienen el mismo tipo de dato
// identidad mismo tipo de valor y valor
// equidad mismo valor

console.log("Comparación de la equidad entre Undefined y Null:")
console.log(
    (fecha_ultimoPost==estatusRelacionSentimental)?
    "Ambas variables tienen el mismo valor":
    "Las variables no tienen el mismo valor"
);

console.log("Comparación de la identidad entre Undefined y Null:")
console.log(
    (fecha_ultimoPost===estatusRelacionSentimental)?
    "Ambas variables tienen el mismo valor":
    "Las variables no tienen el mismo valor"
);

// console.log("Comparación de la equidad ente Undefined y Null")
// (fecha_ultimoPost==estatusRelacionSentimental)?
//     console.log("Ambas variables tienen el mismo valor"):
//     console.log("Las variables no tienen el mismo valor");

//     console.log("Comparación de la identidad entre Undefined y Null")
// (fecha_ultimoPost===estatusRelacionSentimental)?
//     console.log("Ambas variables tienen el mismo valor y  tipo de dato"):
//     console.log("Las variables no tienen el mismo tipo de dato");

// 8. Function (Funciones)
console.warn("---Tipo de Dato:FUNCTION (Función)")

// Declaramos una función que nos permita recibir un parámetro en este caso el nombre de la persona a saludar, y le enviamos un saludo, esta función la asignamos a una constante.

const saludar = function(nombre){return `Hola, ${nombre}!`}

// Invocamos a la función declarada
console.log(saludar('Marco'));

// Y que tipo de dato tiene esta constante
console.log(`El tipo de dato de la constante saludar es: ${typeof(saludar)}`);

// Declaramos diferentes variables con valores similares o iguales?
const numero3 = 2;
const numero4 = 2.0;
const numero5 = "2";
const numero6 = "2.0";
const numero7 = Symbol(2);
const numero8 = Symbol(2.0);
const numero9 = Symbol("2");
const numero10 = Symbol(2);
// Prueba de comparación 1: ¿Es 2 = 2.0?
console.log("Prueba de comparación 1:");
if(numero3 == numero4){
    console.log(`Se han comparado los valores de numero3 y numero4, confirmando que tienen el mismo valor.`)
} else {
    console.log(`Se han comparado los valores de numero3 y numero4, detectando que NO tienen el mismo valor.`)
}

// Prueba de comparación 2: ¿Es 2 = "2"?
console.log("Prueba de comparación 2:");
if(numero3 == numero5)
    console.log(`Se han comparado los valores de numero3 y numero5, confirmando que tienen el mismo valor.`)
 else 
    console.log(`Se han comparado los valores de numero3 y numero5, detectando que NO tienen el mismo valor.`)

// Prueba de comparación 3: ¿Es 2 estrictamente = "2"?
/* 
= Es asignación 
== Igualdad de valor
=== Igualdad estricta (compara valor y tipo de dato)
*/
console.log("Prueba de comparación 3:");
if(numero3 === numero5)
    console.log(`Se han comparado los valores de numero3 y numero5, confirmando que tienen el mismo valor.`)
 else 
    console.log(`Se han comparado los valores de numero3 y numero5, detectando que NO tienen el mismo valor.`)

// Prueba de comparación 4: ¿Es 2 = "2.0"?
console.log("Prueba de comparación 4:");
if(numero3 == numero6)
    console.log(`Se han comparado los valores de numero3 y numero6, confirmando que tienen el mismo valor.`)
else 
    console.log(`Se han comparado los valores d enumero1 y numero4, detectando que NO tienen el mimso valor.`)

    
// Prueba de comparación 5: ¿Es 2 estrictamente = "2.0"?
console.log("Prueba de comparación 5:");
if(numero3 === numero6)
    console.log(`Se han comparado los valores de numero3 y numero6, confirmando que tienen el mismo valor.`)
else 
    console.log(`Se han comparado los valores de numero1 y numero6, detectando que NO tienen el mimso valor.`)

// Prueba de comparación 6: ¿Es 2 = Symbol(2)? 
console.log("Prueba de comparación 6")
if (numero1 == numero7)
    console.log(`Se han comparado los valores de numero1 y numero7, confirmado que tienen el mismo valor.`)
else 
    console.log(`Se han comparado los valores de numero1 y numero7, detectando que NO tienen el mismo valor.`)

// Prueba de comparación 7: ¿Es 2 estrictamente = Symbol(2)? 
console.log("Prueba de comparación 7")
if (numero1 === numero7)
    console.log(`Se han comparado los valores de numero1 y numero7, confirmado que tienen el mismo valor.`)
else 
    console.log(`Se han comparado los valores de numero1 y numero7, detectando que NO tienen el mismo valor.`)

// Prueba de comparación 8: ¿Es Symbol(2) = Symbol(2)? 
console.log("Prueba de comparación 8: ¿Es Symbol(2) = Symbol(2)?")
if (numero1 == numero10)
    console.log(`Se han comparado los valores de numero1 y numero10, confirmado que tienen el mismo valor.`)
else 
    console.log(`Se han comparado los valores de numero1 y numero10, detectando que NO tienen el mismo valor.`)

// Prueba de comparación 9: ¿Es Symbol(2) = Symbol(2)? 
console.log("Prueba de comparación 8: ¿Es Symbol(2) estrictamente = Symbol(2)?")
if (numero1 === numero10)
    console.log(`Se han comparado los valores de numero1 y numero10, confirmado que tienen el mismo valor.`)
else 
    console.log(`Se han comparado los valores de numero1 y numero10, detectando que NO tienen el mismo valor.`)

