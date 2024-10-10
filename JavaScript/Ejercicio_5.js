// Ejercicio 5
const bg ="linear-gradient(11deg, rgba(3,0,6,5) 0%, rgba(7,7,131,1) 23%, rgba(0,912,155,3) 86%)";

const style_console=`background:${bg}; color: white;border-radius: 6px; padding: 4px: font-size: 1.0rem; font-weight: bold`

console.warn ("--- Practica 07 Arreglos de JS ");

console.log("%c1.- Condicionales -Si/Entonces (IF)", style_console);

/* let fechaActual = new Date("2025/06/05");*/
let fechaActual = new Date();
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);

// y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleString('es-MS',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
});

console.log(`en formato local (México): ${fechaLocalMX}`);

// Si es antes de las doce saluda con un buenos días

if(fechaActual.getHours()<12){
    console.log(`Buenos días, hoy es: ${fechaLocalMX}`)
}

// Existe un extensor de la sentencia if(Sí) que es else (en caso contrario)
if(fechaActual.getMonth()<=6){
    console.log(`Estas en la primera mitad del año.`)
} else {
    console.log(`Estas en la segunda mitad del año.`)
}

// Que pasa si la validación tiene varias operaciones

const anio = fechaActual.getFullYear();

let inicioPrimavera = new Date(anio, 2,21);
let inicioVerano = new Date (anio, 5,21);
let inicioOtonio = new Date(anio, 8,23);
let inicioInvierno = new Date(anio, 11,21);
let estacion;
let horarioVerano = false;

if (fechaActual>= inicioPrimavera && fechaActual<inicioVerano)
{
    console.log("Estamos en PRIMAVERA")
    console.log("Inicia la floración de muchas plantas...")
    console.log("Los días son más largos y las noches más cortas")
    console.log("Muchos animales despiertan de la hibernación...")
    estacion="Primavera";
    horarioVerano=true;
}
else if(fechaActual>=inicioVerano && fechaActual<inicioOtonio)
{
    console.log("Estamos en VERANO...")
    console.log("En esta temporada los abundan los días Soleados y Calurososos...")
    console.log("En esta temporada el indicé de turismo vacacional sube...")
    console.log("Mucha gente busca realiar actividades al aire...")
    estacion="Verano";
    horarioVerano=true;
}
else if (fechaActual>=inicioOtonio && fechaActual<inicioInvierno)
{
    console.log("Estamos en OTOÑO...")
    console.log("Los árboles suelen cambiar de follaje")
    console.log("Se registrarán temperaturas más templadas")
    console.log("Los animales comienza con la recolección de alimento y prepraran sus espacios para la hibernación, incluso algunas aves migran.")
    estacion="Verano"
    horarioVerano=true;
}
else 
{
    console.log("Estamos en INVERINO...")
    console.log("En esta temporada los días  son más cortos y las noches más largas...")
    console.log("En algunas regiones suele nevar...")
    console.log("Dado las bajas temperaturas, se recomienda abrigarse")
    estacion="Invierno"
    horarioVerano=false;
}

console.log("%c2.- Operador Ternario (validacion=cumple:no_cumple)",style_console);
// En Java Script exista una operación simplificada que valdia si una condición se cumple o no, y que hacer en cada caso

const edadPersona= 18;
const mayoriaEdadMX=18;
const mayoriaEdadUS=21;

let evaluarMayoriaEdad = (edad) =>
    edad>=19?"Eres mayor de edad.":"No eres mayor de edad."

console.log("Evaluando la mayoria de edad de una persona")
console.log(evaluarMayoriaEdad(edadPersona));

// Sin embargo tenemos que considerar que la mayoría de edad varia en cada áis por cuestiones legales, por lo que debemos considerar un segundo parámetro en la evaluación

evaluarMayoriaEdad = (edad,pais) =>
    (edad>=18 && pais==="MX")?`En ${pais} eres mayor de edad `:`En ${pais} No eres mayor de edad `;

console.log("Evaluando la mayoría de edad de una persona en México...")
console.log(evaluarMayoriaEdad(edadPersona,"MX"));

console.log("Evaluando la mayoría de edad de una persona en Estados Unidos...")
console.log(evaluarMayoriaEdad(edadPersona,"US"));

console.log("%c3.- Switch - CASE (Elección por valor definido)",style_console)

let asignaGeneracion = (anioNacimiento)=>{
    switch(true)
    {
        case(anioNacimiento<1968):
            return "Baby Boomers";
        case (anioNacimiento<1968 && anioNacimiento<=1980):
            return "Generación X";
        case (anioNacimiento>1980 && anioNacimiento<=1994):
            return "Milenials";
        case (anioNacimiento>1994 && anioNacimiento<=2010):
            return "Centenials";
        case (anioNacimiento>2010):
            return "Krystal";
    }
}

console.log(`Dado que naci en el año 2005 soy de la generación: ${asignaGeneracion(2005)}`)


console.log("%c4.- Manejo de Excepciones (TRY / CATCH)",style_console);

// En algunas ocasiones existiran errores que no son culpa del programa, si no del usuario, la red, el so o incluso de un middleware., pero que si duda debemos controlar para evitar las fallas de ejecución

console.log("Intentamos dividir:0/10, el resultado es: ")

try{ //intenta
    let result=0/10;
} catch(error){
    console.log("Ocurrio un error: "+error.message);
}

console.log("Intentamos dividir: 10/0, el resultado es: ")

try {
    let result = 10/0;
    console.log(result);
} catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("Intentamos dividir: a/10, el resultado es: ")

try {
    let result= "a"/10;
    console.log(result)
} catch (error)
{
    console.log("Ocurrio un error: "+error.message);
}


console.log("Intentamos dividir: la variable a/10, el resultado es:")

try{ //intenta
    let result = a/10; //dividir una variable no definida entre 0
    console.log(result);
} catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}
console.log("Intentamos dividir: el valor de la variable x / entre el valor de la variable y el resultado es: ")

try {
    let x=8, y=2, result = x/y;
    console.log(result)
} catch (error)
{   console.log("Ocurrio un error: "+error.message);

}