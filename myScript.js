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
    console.log(numeros[i]);
}

//Recorriendo el array con ciclo For sin saber la longitud del array

for(let i = 0; i < numeros.length;i++){
    console.log(numeros[i]);
}

// Métodos más comunes

// .toString() [Devuelve un string con los elementos del array]
const miArray = ["marca",3,"palabra"];

console.log(miArray.toString())

// .push() [Añade elementos al final del array]
console.log(miArray);

miArray.push(numeros[2])

console.log(miArray);

miArray.push("Santi");

console.log(miArray);

// .unshift() [Añade elementos al inicio de un array]
miArray.unshift(2);

console.log(miArray);

// .pop() [Elimina el último elemento de un array]
miArray.pop();

console.log(miArray);

// .shift() [Elimina el primer elemento de un array]
miArray.shift();

console.log(miArray);

// .join() [Junta los elementos de un array en un string, separados por el separados que asignemos]

let miArrayAString = miArray.join("-");

console.log(miArrayAString);

// .concat() [Crea un nuevo array compuesto por la unión de otros 2 arrays, siempre respetando el orden de los arrays que le pasemos]

const arrayF = arrayC.concat(arrayB);

console.log(arrayF); 

// .slice() [Devuelve un nuevo array con un "recorte" de los elementos del array al cual aplicamos el método. Lleva dos parámetros: 1- la posición desde la que recorta y 2- la posición hasta la que recorta. Esta última es excluyente.]

let recorte = numeros.slice(2,5);

console.log(recorte); // [3, 4, 5]

// .splice() [Permite eliminar 1 o más elementos de un array, siempre que conozcamos su índice. Recibe dos parámetros: 1- posición desde la que se elimina y 2- cantidad de elementos a eliminar]

numeros.splice(3,4); //Eliminando del 4 al 7

console.log(numeros) // [1, 2, 3, 8, 9, 10]

// .indexOf() [Devuelve el índice de un elemento del array. Recibe por parámetro el elemento a buscar y devuelve su posición, si el elemento a buscar no existe en el array, devuelve -1.]

const mascotas = ["Pilar", "Miguel", "Zeus"]

console.log(mascotas.indexOf("Zeus")); // 2

console.log(mascotas.indexOf("Oli")) // -1

const eliminar = (nombre) => {
    let index = mascotas.indexOf(nombre);
    if(index != -1){
        mascotas.splice(index, 1);
    }else{
        console.log("El elemento que intentas eliminar no existe en el array");
    };
};

eliminar("Oli");

console.log(mascotas);

eliminar("Pilar");

console.log(mascotas);

// .includes() [Permite saber si el elemento que pasamos por parámetro existe o no dentro del array, devolviendo un valor booleano]

console.log(mascotas.includes("Pilar"));

console.log(mascotas.includes("Zeus"));

// .reverse() [Invierte el orden de los elementos del array. ⚠️ Es un métdodo DESTRUCTIVO, es decir MODIFICA EL ARRAY ORIGINAL.]

console.log(numeros);

numeros.reverse();

console.log(numeros);

// Ejemplo de utilización de los métodos de array

/* const listaNombres = [];
let cantidad = 5;

do{
    let entrada = prompt("Ingresar nombre");
    listaNombres.push(entrada.toUpperCase());
    console.log(listaNombres.length);
}while(listaNombres.length != cantidad)

const nuevaLista = listaNombres.concat(["ANA","EMA"]);

alert(nuevaLista.join("\n"));  */

// RECORRIENDO ARRAYS

// For...of [Permite recorrer un array ejecutando un bloque de códigop por cada elemento del objeto]

// Ejemplo recorriendo un array de objetos

/* const productos = [{id: 1, producto: "Arroz"},
                   {id: 2, producto: "Fideos"},
                   {id: 3, producto: "Pan"}];

for (const producto of productos){
    console.log("Id: " + producto.id + "\t" + producto["producto"]);
} */

// Ejemplo aplicando llamadas a métodos de objetos

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumarIva(){
        this.precio = this.precio * 1.21;
    }
}

const productos = [];

productos.push(new Producto("Arroz", "125"));
productos.push(new Producto("Fideos", "70"));
productos.push(new Producto("Pan", "50"));

for(const producto of productos){
    console.log(producto.precio);
    producto.sumarIva();
    console.log(producto.precio);
}


