//Ejercicio 1

var name = "Francisco";
var lastname;
var age = 20;

//El objeto de console nos permite enviar datos a la terminal y poder visualizar
// el valor de la variable o el resultado de la funcion o metodo

console.warn("---Declaracion de variables del tipo constante usando: VAR");
console.log("Intentando leer las variables",name, lastname);

lastname = "Garcia";
console.log("Una vez inicializadas las vuelvo a llamar",name, lastname);

//Una variable puede cambiar en el proceso de ejecucion del programa

// b) Constante

console.warn("---Declaracion de variables del tipo constante usando: CONST");
const Uni = "UT Xicotepec";
const matricula = 230758
console.log("Hola ", name, " ", lastname, " ,Actualmente estudias en la ", Uni, " con la matricula ", matricula);

//Para saber si el tipo de dato que tiene es una variable o una constante usando typeof()
console.log("Analizando los datos podemos decir que: ");
console.log("name es de tipo: ", typeof(name));
console.log("lastname es de tipo: ", typeof(lastname));
console.log("Uni es de tipo: ", typeof(Uni));
console.log("age es de tipo: ", typeof(age));
console.log("matricula es de tipo: ", typeof(matricula));

let birthdate = "2004/01/25";
let favouritecolor;

console.warn("---Declaracion de variables usando: LET");
console.log("Genial, te voy conociendo mejor, ahora se que tu naciste el:", birthdate, " y tu color favorito es: ", favouritecolor);
favouritecolor = "Gray";
console.log(`Creo que es ${favouritecolor}, le atine`);

console.log("Analizando los datos puedo deducir que: ");
console.log("birthdate es de tipo: ", typeof(birthdate));
console.log("favouritecolor es de tipo: ", typeof(favouritecolor));