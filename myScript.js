/* let nombre = "Santi";
let apellido = "Rojo";
let age;
let phoneNumber = "+54 9 (0351) 152262561";

const catName = "Miguel";


let yearOfBirth = 1995;
let actualYear = 2022;

age = actualYear - yearOfBirth;

console.log(age);

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

console.log("El usuario ingresado es " + nombreCompleto + " y su edad es de " + age + " años.");
 
if(age >= 18){
    console.log("El usuario es mayor de edad.");
}else{
    console.log("El usuario es menor de edad.");
}; 

for(let i = 0; i <= 20; i++){
    console.log(i);
}; */

/* let num = parseInt(prompt("Ingrese el número del que quiere saber la tabla del 1 al 10"))

for(let i = 1; i <= 10; i++){
    let resultado = num * i;

    alert(num + " x " + i + " = " + resultado);
} */

/* for(let i = 1; i <= 5; i++){
    let nombre = prompt("Ingrese su nombre");

    if(nombre=="Zeus"){
        break;
    }else if (nombre=="Miguel"){
        continue;
    }

    alert("Turno Nro "+i+"\n Paciente: "+nombre);
} */

/* let color = prompt("ingrese un color");

while(color != "ESC"){
    alert("El color ingresado es el " + color);

    color = prompt("Ingrese un color");
}

let edad = 0; */

/* do{
    edad = parseInt(prompt("Ingrese su edad"))

    switch(edad){
        case 2:
            alert("Es bebé");
            break;
        case 5:
            alert("Es niñx");
            break;
        case 13:
            alert("Es adolescente");
            break;
        case 18:
            alert("Es adulto");
            break;
        default:
            alert("El dato ingresádo no es válido");
            break;
    }
    
}while(edad < 18); */

// Función convencional

/* function saludar(){
    alert("Hola Santi!");
}

saludar(); */

// Función anónima

/* const sumar = function (a,b){return a + b};

let resultadoSuma = sumar(3,4);

alert(resultadoSuma); */

// Función flecha

/* const restar = (a,b)=>{return a - b}

let resultadoResta = restar(2022,1995);

alert(resultadoResta); */

// Función para calcular precio final con dto

/* const suma = (a,b) => a +b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;
const descuento = x => x * 0.15; 
let precioProducto = 500;


let nuevoPrecio = resta(suma(precioProducto,iva(precioProducto)),descuento(precioProducto));

alert("El nuevo precio es $"+nuevoPrecio); */

// OBJETOS

//Ejemplo agenda:

/* let nombre = "Santi";
let edad = 27;
let calle = "Jerónimo Luis de Cabrera 964" */

/* const persona1 = {
    nombre: "Santi",
    edad: 27,
    calle: "Jerónimo Luis de Cabrera 964"
}

console.log(persona1); */

//Métodos de acceso a las propiedads de un objeto

//Con punto (.)
/* console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.calle); */

//Con corchetes []

/* console.log(persona1["nombre"]);
console.log(persona1["edad"]);
console.log(persona1["calle"]); */

// Asignando valores

// Con punto
/* persona1.edad = 26; */

//Con corchetes

/* persona1["calle"] = "Rafael de Igarzabal 760";

console.log(persona1) */

// Constructores

/* function Persona(nombre, edad, calle){
    this.name = nombre;
    this.age = edad;
    this.address = calle;
} */

// Instancia

/* const persona1 = new Persona("Santi",27,"Jerónimo Luis de Cabrera 964");

const persona2 = new Persona("Fer",55,"Rafael de Igarzabal 760");

console.log(persona1);
console.log(persona2); */

// Definición de métodos personalizados

/* function Persona(nombre, edad, calle){
    this.name = nombre;
    this.age = edad;
    this.address = calle;
    this.saludar = function(){console.log("Hola, soy "+this.name)}
}

const persona1 = new Persona("Santi",27,"Jerónimo Luis de Cabrera 964");

const persona2 = new Persona("Fer",55,"Rafael de Igarzabal 760");

persona1.saludar();
persona2.saludar(); */

// Clases

/* class Persona {
    constructor(nombre,edad,calle){
        this.name = nombre,
        this.age = edad,
        this.address = calle;
    };

    saludar(){
        alert("Hola! Soy "+this.name);
    };

    decirEdad(){
        alert("Tengo "+this.age+" años.");
    };
};

const persona1 = new Persona("Santi",27,"Jerónimo Luis de Cabrera 964");
const persona2 = new Persona("Fer",54,"Rafael de Igarzabal 760");

persona1.saludar();
persona1.decirEdad();

persona2.saludar();
persona2.decirEdad(); */

// ARRAYS

//Declaración de array vacío
const arrayA = [];

//Declaración de array con números
const arrayB = [15,10,1995];

//Declaración de array con strings
const arrayC = ["Santiago", "Fermín", "Rojo"];

//Declaración de array con booleanos
const arrayD = [true,false,false,true];

//Declaración de array mixto
const arrayE = [15,"Rojo",true];

//Ejemplo de operaciones con arrays homogéneos

const numeros = [1,2,3,4,5,6,7,8,9,10];

let resultado1 = numeros[3] + numeros[7];
let resultado2 = numeros[5] - numeros[2];
let resultado3 = numeros[9] / numeros[1];

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

//Recorriendo el array con ciclo For

for (let i = 0; i < 10; i++){
    alert(numeros[i]);
}

//Recorriendo el array con ciclo For sin saber la longitud del array

for(let i = 0; i < numeros.length;i++){
    console.log(numeros[i]);
}