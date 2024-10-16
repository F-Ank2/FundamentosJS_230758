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
// En Java existe una operación simplificada que valdia si una condición se cumple o no, y que hacer en cada caso

const edadPersona= 18;
const mayoriaEdadMX=18;
const mayoriaEdadUS=21;

let evaluarMayoriaEdad = (edad) =>
    edad>=19?"Eres mayor de edad.":"No eres mayor de edad."

console.log("Evaluando la mayoria de edad de una persona")
console.log(evaluarMayoriaEdad(edadPersona));

// Sin embargo tenemos que considerar que la mayoría de edad varia en cada país por cuestiones legales, por lo que debemos considerar un segundo parámetro en la evaluación

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

console.log("%c5.- Control de Ciclos (BREAK / CONTINUE)",style_console)

// En alguna ocasiones será importante detener un ciclo de manera abrupta para controlar casos especiales en un ciclo...

console.log("Vamos a contar del 1 al 10...")
for (let num=1;num<=10;num++)
    console.log(num)

console.log("Ahora necesitamso que si llegas al 7 pares de contar... suponiendo que solo por hoy es de mala suerte...")
for (let num=1;num<=10;num++){
    if (num==7)
        break;
    console.log(num)
}

console.log("Ahora necesitamos que si llegas al 7 te saltes ese número y continues")
for (let num=1;num<=10;num++){
    if (num==7)
        continue
    console.log(num)
}

console.log("%c6.-Ciclo iterativo - (FOR)",style_console);
//Recorre de manera iterativa (i), de incremental o decremental

console.log("Los días de la semana en orden ascendente son:")

let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"];

for (let i=0;i<dias.length;i++){
    console.log(dias[i]);    
}

console.log("Ahora vamos a imprimir los meses en orden descendente...")
let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
for (let i=meses.length-1;i>=0;i--)
    console.log(meses[i]);

console.log("%c7.- Ciclo Condicionales - (WHILE) ",style_console)
//Estos ciclos (BUCLE) dependen de una condición para continuar ejecuntandose
let finDeSemana = false;
let mensaje = "";
let j = 0;

while (j<dias.length){
    switch (j) { // Usamos 'j' para que coincida con el índice
        case 0:
            finDeSemana=true;
            mensaje="Mormingooooo... ZzzzzZZZZzz 🎶";
            break;
        case 1:
            finDeSemana=false;
            mensaje="San Lunes a chambiar 👍";
            break;
        case 2:
            finDeSemana=false;
            mensaje="Segundo día de chamba, a darle...  👌";
            break;
        case 3:
            finDeSemana=false;
            mensaje="Tercer día de la chamba, a la mitad de la semana 😁";
            break;
        case 4:
            finDeSemana=false;
            mensaje="Cuarto día de la chambra, casi viernes 😊";
            break;
        case 5:
            finDeSemana=false;
            mensaje="Es viernes 🙌";
            break;
        case 6:
            finDeSemana=true;
            mensaje="Sabadoo0o0o0o0o0o0o 😎";
            break;
    }
    console.log("Día: "+dias[j]);
    console.log("Mensaje del día: "+mensaje);
    j++;
}

console.log("%c8.- Ciclo Condicionales, que se ejecuta al menos una vez- (DO WHILE)",style_console);

// Simulamos una lista de episodios de una temporada
let episodios = [
    "Episodio 1: The Signal",
    "Episodio 2: The Storm",
    "Episodio 3: The Wall",
    "Episodio 4: The Dream",
    "Episodio 5: The Demeter"
];

let indice = 0;
let continuarViendo = true; // Esta variable simula la decisión del usuario de continuar viendo

do {
    console.log(`Reproduciendo ${episodios[indice]}`);

    // Simulamos la reproducción del episodio
    indice ++;

    // Simulamos una pregunta al usuario si desea seguir viendo
    if(indice < episodios.length) {
        continuarViendo = confirm("¿Deseas continuar con el siguiente episodio?");
    } else {
        continuarViendo = false; // Cuando se acaba la lista de episodios
    }
} while (continuarViendo && indice<episodios.length);

console.log("Fin de la reproducción.");

// Ciclo para recorrer objetos iterables como mapas, arreglos, cadenas y conjuntos de datos
console.log("%c9.- Ciclos para recorrer elementos finitos- (FOR...OF) ", style_console);

let seriesTrending = [
    {nombre: "Bojack Horseman", temporadas: 6, totalViewers: "87.3M", totalReprods:"79.4M"},
    {nombre: "The Boys", temporadas: 6, totalViewers: "120M", totalReprods:"59.2M"},
    {nombre: "Barry", temporadas: 6, totalViewers: "15.3M", totalReprods:"2M"},
    {nombre: "Teletubbies", temporadas: 6, totalViewers: "420.5M", totalReprods:"399.4M"},
    {nombre: "La rosa de Guadalupe", temporadas: 1, totalViewers: "5B", totalReprods:"3.5B"},
]

// Usando for...of para recorrer al lista
for (let serie of seriesTrending){
    console.log(`Serie: ${serie.nombre}, Temporadas: ${serie.temporadas}, Total de Viewers: ${serie.totalViewers}, Total de Reproducciones: ${serie.totalReprods}`)
}

try {
    console.log(`La última serie leida fué: ${serie.nombre}`); // No va a funcionar por la variable serie ya no existe ya que sualcance solo estuvo dentro del ciclo
} catch (error)
{
    console.log("Mensaje de error: "+error.message)
}


// Mostrar los resultados
console.log("%c10.- Ciclos para recorrer las propiedades de elementos finitos - (FOR... IN) ",style_console);


// Usando for... in para recorrer cada serie
for (let i in seriesTrending) {
    console.log(`Serie ${parseInt(i)+1};`);
    for (let propiedad in seriesTrending[i]){
        console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`);
    }
    console.log('-------------');
}
console.log("%c11.- Ciclos ininterrumpidos para cada uno de los elementos del arreglo (FOR EACH)",style_console)

// Lista de series de TV trending con temporadas, viewers y reproducciones
let seriesTrending2 = [
    {nombre: "Bojack Horseman", temporadas: 6, viewers: 9000000, reproducciones:120000000},
    {nombre: "The Boys", temporadas: 4, viewers: 40000, reproducciones: 5000000},
    {nombre: "Barry", temporadas: 3, viewers: 90000, reproducciones:2000000},
    {nombre: "Teletubbies", temporadas: 6, viewers: 2000000, reproducciones:40000000},
    {nombre: "La rosa de Guadalupe", temporadas: 8, viewers: 5000000, reproducciones:10000000},
    {nombre: "The Walking Dead", temporadas: 16, viewers: 100000000, reproducciones: 1000000000}
]

// Usando forEach para recorrer cada serie y calcular la calificación
seriesTrending2.forEach((serie,index) =>{
    let calificacion = (serie.reproducciones / serie.viewers).toFixed(2); // Calcula la calificación y la redondea a 2 decimales
    console.log(`Serie: ${index + 1}`);
    console.log(`Nombre: ${serie.nombre}`);
    console.log(`Temporadas: ${serie.temporadas}`);
    console.log(`Viewers: ${serie.viewers}`);
    console.log(`Reproducciones: ${serie.reproducciones}`);
    console.log(`Calificación: ${calificacion}`); // Muestra la calificación
    console.log('--------------------')

}) 

console.log("%c12.- Filtrado y Mapeo para transformar información o obtener (respectivamente)", style_console)

// Usando Filter para filtrar, y map para transformar la información.
// Lista de series que queremos verificar
let seriesDeseadas = ["Bojack Horseman", "The Walking Dead", "Barry"];

// Usando map e includes para filtrar y obtener los nombres de series con 3 temporadas
let seriesConTresTemporadas = seriesTrending2
    .filter(serie => serie.temporadas ===3) // Filtramos las series que tienen 3 temporadas
    .map(serie => serie.nombre) // Obtenemos solo los nombres de esas series
    .filter(nombre => seriesDeseadas.includes(nombre)); // Filtramos las que están en la lista de series deseadas

// Mostrar los resultados
console.log("Series con 3 temporadas que están en la lista deseada:");
console.log(seriesConTresTemporadas);   