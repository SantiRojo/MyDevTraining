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
/* const arrayA = []; */

//Declaración de array con números
/* const arrayB = [15,10,1995]; */

//Declaración de array con strings
/* const arrayC = ["Santiago", "Fermín", "Rojo"]; */

//Declaración de array con booleanos
/* const arrayD = [true,false,false,true]; */

//Declaración de array mixto
/* const arrayE = [15,"Rojo",true]; */

//Ejemplo de operaciones con arrays homogéneos

/* const numeros = [1,2,3,4,5,6,7,8,9,10];

let resultado1 = numeros[3] + numeros[7];
let resultado2 = numeros[5] - numeros[2];
let resultado3 = numeros[9] / numeros[1];

console.log(resultado1);
console.log(resultado2);
console.log(resultado3); */

//Recorriendo el array con ciclo For

/* for (let i = 0; i < 10; i++){
    console.log(numeros[i]);
} */

//Recorriendo el array con ciclo For sin saber la longitud del array

/* for(let i = 0; i < numeros.length;i++){
    console.log(numeros[i]);
} */

// Métodos más comunes

// .toString() [Devuelve un string con los elementos del array]
/* const miArray = ["marca",3,"palabra"];

console.log(miArray.toString()); */

// .push() [Añade elementos al final del array]
/* console.log(miArray);

miArray.push(numeros[2])

console.log(miArray);

miArray.push("Santi");

console.log(miArray); */

// .unshift() [Añade elementos al inicio de un array]
/* miArray.unshift(2);

console.log(miArray); */

// .pop() [Elimina el último elemento de un array]
/* miArray.pop();

console.log(miArray); */

// .shift() [Elimina el primer elemento de un array]
/* miArray.shift();

console.log(miArray); */

// .join() [Junta los elementos de un array en un string, separados por el separados que asignemos]

/* let miArrayAString = miArray.join("-");

console.log(miArrayAString); */

// .concat() [Crea un nuevo array compuesto por la unión de otros 2 arrays, siempre respetando el orden de los arrays que le pasemos]

/* const arrayF = arrayC.concat(arrayB);

console.log(arrayF);  */

// .slice() [Devuelve un nuevo array con un "recorte" de los elementos del array al cual aplicamos el método. Lleva dos parámetros: 1- la posición desde la que recorta y 2- la posición hasta la que recorta. Esta última es excluyente.]

/* let recorte = numeros.slice(2,5);

console.log(recorte); // [3, 4, 5] */

// .splice() [Permite eliminar 1 o más elementos de un array, siempre que conozcamos su índice. Recibe dos parámetros: 1- posición desde la que se elimina y 2- cantidad de elementos a eliminar]

/* numeros.splice(3,4); //Eliminando del 4 al 7

console.log(numeros) // [1, 2, 3, 8, 9, 10] */

// .indexOf() [Devuelve el índice de un elemento del array. Recibe por parámetro el elemento a buscar y devuelve su posición, si el elemento a buscar no existe en el array, devuelve -1.]

/* const mascotas = ["Pilar", "Miguel", "Zeus"]

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

console.log(mascotas); */

// .includes() [Permite saber si el elemento que pasamos por parámetro existe o no dentro del array, devolviendo un valor booleano]

/* console.log(mascotas.includes("Pilar"));

console.log(mascotas.includes("Zeus")); */

// .reverse() [Invierte el orden de los elementos del array. ⚠️ Es un métdodo DESTRUCTIVO, es decir MODIFICA EL ARRAY ORIGINAL.]

/* console.log(numeros);

numeros.reverse();

console.log(numeros); */

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

/* class Producto {
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
 */

// HIGH ORDER FUNCTIONS

// Retornar funciones [Crear nuevas funciones a raíz de una "función madre", o mejor dicho una función de orden superior]

// Ej:

/* function mayorQue(n){
    return (m) => m > n;
}

let mayorQueDiez = mayorQue(10); // Sería: let mayorQueDiez = (m) => m > 10

console.log(mayorQueDiez(12)); // true
console.log(mayorQueDiez(8)); // false */

// Otro ej: 

/* function asignarOperacion(op){
    if (op == "sumar"){
        return (a, b) => a + b;
    }else if (op == "restar"){
        return (a, b) => a - b;
    }
}

let suma = asignarOperacion("sumar");
let resta = asignarOperacion("restar");

console.log(suma(4,6)); // 10
console.log(resta(5,3)); // 2 */

// Recibir funciones por parámetro [Crear nuevas funciones que reciban una función por parámetro]

/* function porCadaUno(arr, fn){
    for (const el of arr){
        fn(el);
    };
}; */

// [Esta función recibe un array como primer parámetro y una función por el segundo y se encarga de recorrer el array y por cada elemento del mismo hacer un llamado a la función mencionada enviando dicho elemento por parámetro]

/* const numbers = [1, 2, 3, 4];

porCadaUno(numbers, console.log); // 1 2 3 4

let total = 0;

function acumular(num){
    total += num;
};

porCadaUno(numbers, acumular);

console.log(total); // 10 */

// [Algo usual es definir la función directamente sobre el parámetro como una función anónima aprovechando la sintaxis de arrow function para evitar estar creando funciones todo el tiempo]

/* const duplicado = [];

porCadaUno(numbers, (el) => {
    duplicado.push(el * 2)
});

console.log(duplicado); // [2, 4, 6, 8] */


// MÉTODOS DE BÚSQUEDA Y TRANSFORMACIÓN

// For Each [Itera sobre el array de referencia y por cada elemento ejecuta la función que enviemos por parámetro, la cual recibe a la vez el elemento del array que se esta recorriendo]

/* const numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach((num) => {
    console.log(num);
}) */

// Find [Recibe una FUNCIÓN DE COMPARACIÓN como parámetro que retorna true o false según la comparación que ejecuta. El método retorna EL PRIMER ELEMENTO que cumpla con esa condición]

/* const cursos = [
    {nombre: "Javascript", precio: 15000},
    {nombre: "ReactJS", precio: 22000}
];

const resultado1 = cursos.find((el) => el.nombre === "ReactJS");
const resultado2 = cursos.find((el) => el.nombre === "DW");

console.log(resultado1); // {nombre: "ReactJS", precio: 22000}
console.log(resultado2); // undefined */

// Filter [Recibe una función comparadora por parámetro y retorna un nuevo array con todos los elementos que cumplan con esa condición, en caso de no haber coincidencias retorna un array vacío]

/* const cursos = [
    {nombre: "Javascript", precio: 15000},
    {nombre: "ReactJS", precio: 22000},
    {nombre: "AngularJS", precio: 22000},
    {nombre: "Desarrollo Web", precio: 16000}
];

const resultado1 = cursos.filter((el) => el.nombre.includes("JS"));
const resultado2 = cursos.filter((el) => el.precio < 14000)

console.log(resultado1); */ /* [
                                {nombre: 'ReactJS', precio: 22000},
                                {nombre: 'AngularJS', precio: 22000}
                            ] */


/* console.log(resultado2); // [] */

// Some [Recibe una función de comparación y retorna true o false según el resultado de la comparación en la iteración]

/* console.log(cursos.some((el) => el.nombre == "Desarrollo Web")) // true

console.log(cursos.some((el) => el.nombre == "VueJS")); // false */

// Map [Crea un nuevo array con todos los elementos del array original, transformandos según las operaciones de la función enviada por parámetro. El nuevo array obtenido tiene la misma cantidad de elementos que el array original, pero los elementos que se almacenan son el return de la función enviada por parámetro]

// Ej:

/* const nombreCursos = cursos.map((el) => el.nombre);

console.log(nombreCursos); // [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]

const cursosActualizados = cursos.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.25
    };
});

console.log(cursosActualizados); */ /* [
                                        { nombre: 'Javascript', precio: 18750 },
                                        { nombre: 'ReactJS', precio: 27500 },
                                        { nombre: 'AngularJS', precio: 27500 },
                                        { nombre: 'Desarrollo Web', precio: 20000 }
                                    ] */


// Reduce [Nos permite obtener un único valor tras iterar sobre el array. Recibe 2 parámetros: 1- recibe una función acumuladora y 2- el valor inicial del acumulador]

/* // Ej:

const numeros = [1, 2, 3, 4, 5, 6];

const total = numeros.reduce((acc, el) => acc + el, 0);

console.log(total); //21

// Otro ej:

const miCompra = [
    {nombre: "Desarrollo Web", precio: 20000},
    {nombre: "Javascript", precio: 18750},
    {nombre: "ReactJS", precio: 27500}
];

const totalCompra = miCompra.reduce((acc, el)=> acc + el.precio, 0);

console.log(totalCompra); // 66250 */

// Sort [Permite reordenar un array según un criterio que definamos. Es un método DESTRUCTIVO. Recibe una función de comparación por parámetro que recibe dos elementos del array a la vez y debe retornar un valor numérico (1, -1, 0) que indica qué elemento se posiciona antes o después]

/* const arrayDeNumbers = [54, 187, 3, 15, 95];

const arrayDeStrings = ["Arbol", "Hoja", "Salto", "Luz"];

arrayDeNumbers.sort((a,b) => a - b); // Ordena los números de menor a mayor

console.log(arrayDeNumbers); // [3, 15, 54, 95, 187]

arrayDeNumbers.sort((a, b) => b - a); // Ordena los números de mayor a menor

console.log(arrayDeNumbers); // [187, 95, 54, 15, 3]


arrayDeStrings.sort((a, b)=>{
    if(a > b){
        return 1;
    }else if(a < b){
        return -1;
    }else{
        return 0;
    };
}) // Ordena alfabéticamente de manera ascendente

console.log(arrayDeStrings); // ['Arbol', 'Hoja', 'Luz', 'Salto']

arrayDeStrings.sort((a, b)=>{
    if(a > b){
        return -1;
    }else if(a < b){
        return 1;
    }else{
        return 0;
    };
}) // Ordena alfabéticamente de manera descendente

console.log(arrayDeStrings); // ['Salto', 'Luz', 'Hoja', 'Arbol'] */

// Ejemplo aplicado:
/* 
const productos = [{id: 1, producto: "Arroz", precio: 125},
                  {id: 2, producto: "Fideos", precio: 70},
                  {id: 3, producto: "Pan", precio: 50},
                  {id: 4, producto: "Flan", precio: 100}];

const buscado = productos.find(producto => producto.id === 3)
console.log(buscado); // {id: 3, producto: "Pan", precio: 50}

const existe = productos.some(producto => producto.nombre === "Harina");
console.log(existe); // false

const baratos = productos.filter(producto => producto.precio < 100);
console.log(baratos) // [{id: 2, producto: "Fideos", precio: 70}, {id: 3, producto: "Pan", precio: 50}]

const listaNombres = productos.map(producto => producto.producto);
console.log(listaNombres); // ['Arroz', 'Fideos', 'Pan', 'Flan']
 */
// OBJETO MATH

// Se puede aceder a algunas constantes matemáticas a través del objeto Math, como el número PI o la constante de Euler
/* 
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045 */

// Min y Max [Reciben una serie de argumentos numéricos y devuelven aquel que tenga el valor máximo o mínimo, según corresponda]
/* 
console.log(Math.max(55, 13, 0, -25, 93, 4)); // 93
console.log(Math.min(55, 13, 0, -25, 93, 4)); // -25
 */
// Ceil, Floor y Round [Sirven para redondear algún valor numérico a un número entero cercano]
/* 
const pi = Math.PI; //3.141592653589793

// CEIL: devuelve el entero mayor o igual más próximo
console.log(Math.ceil(pi)); // 4

// FLOOR: devuelve el entero más cercano redondeando hacia abajo
console.log(Math.floor(pi)); // 3

// ROUND: devuelve el valor de un número redondeado al entero más cercano
console.log(Math.round(pi)); // 3
 */

// Square Root [Retorna la raíz cuadrada de un número. Si se le envía un número negativo, el método retorna NaN]
/* 
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(2)); // 1.4142135623730951
console.log(Math.sqrt(1)); // 1
console.log(Math.sqrt(-1)); // NaN */


// Random [Arroja un número pseudo-aleatorio entre 0 y 1, siendo 0 el límite inclusivo y 1 el exclusivo]

/* console.log(Math.random()); 
console.log(Math.random());
console.log(Math.random()); */

// [Para generar números aleatorios dentro de un rango deseado, distinto de 0-1, podemos multiplicar su resultado por el rango esperado. Además podemos sumar el límite inferior si lo necesitamos]
/* 
// Números entre 0 y 20
console.log(Math.random() * 20);

// Números entre 0 y 70
console.log(Math.random() * 70);

// Números entre 45 y 100
console.log(Math.random() * 100 + 45);

// Ejemplo generador de números enteros aleatorios

const generadorNumero = () => {
    return Math.round(Math.random() * 100); // Retorna un número aleatorio entre 0 y 100
}

console.log(generadorNumero());

 */
// CLASE DATE [Clase que posee Javascript para representar fechas]
/* 
console.log(new Date()); // Genera fecha y tiempo actual
 */
//--------------------------------------------------------------------

// Constructor [Nos permite crear objetos date con fechas diferentes. Recibe por parámetro año, mes, día, hora, minutos, segundos y milisegundos (todos datos de tipo number)]
/* 
console.log(new Date(2022, 0, 1));

const miCumple = new Date(2022, 9, 15);

console.log(miCumple);
 */
//--------------------------------------------------------------------
/* 
// Obtener un valor singular de la fecha

// .getFullYear() => retorna el number que representa el año creado
console.log(miCumple.getFullYear()); // 2022

// .getMonth() => retorna el number que representa el mes (entre 0 y 11)
console.log(miCumple.getMonth()); // 9 (Octubre)

// .getDay() => retorna el number que representa el día de la semana creado (1 = lunes, 7 = domingo)
console.log(miCumple.getDay()); // 6 (Sábado)

// .getDate() => retorna el number que representa el día creado
console.log(miCumple.getDate()); // 15
 */
//--------------------------------------------------------------------

// Presentación [La clase también tiene distintos métodos que presentan la fecha con distintos formatos posibles de tipo String] (Cambia el formato de acuerdo al idioma que tengamos configurado en el navegador)
/* 
// .toDateString => Día de la semana, Mes, Fecha y Año
console.log(miCumple.toDateString()); // Sat Oct 15 2022

// .toLocalString() => dd/mm/aaaa hh:mm:ss (Esp) / mm/dd/yyyy hh:mm:ss (Eng) 
console.log(miCumple.toLocaleString()); // 15/10/2022, 12:00:00 AM (Esp) / 10/15/2022, 12:00:00 AM (Eng)

// .toLocaleDateString() =>  dd/mm/aaaa (Esp) / mm/dd/yyyy (Eng)
console.log(miCumple.toLocaleDateString()); // 15/10/2022 (Esp) / 10/15/2022 (Eng)

// .toTimeString() => hh:mm:ss [zona horaria] (Hora standard del país)
console.log(miCumple.toTimeString()); // 00:00:00 GMT-0300 (Argentina Standard Time) 
 */
//--------------------------------------------------------------------

// Diferencias [Es posible calcular la diferencia entre fechas pero entendiendo que los resultados se generan en milisegundos. Si quisiera calcular la diferencia entre dos fechas habría que generar cálculos adicionales sobre esta diferencia en milisegundos, lo cual no resulta muy agradable. Existen librerías que solucionan estos problemas de forma eficiente y rápida]

// Ejemplos

/* const navidad = new Date("December 25, 2022");
const hoy = new Date("October 5, 2022");

console.log(navidad - hoy);

const milisegundosPorDia = 86400000;

console.log((navidad - hoy) / milisegundosPorDia); */

//-----------------

/* const inicio = new Date();

for(let i = 0; i < 1000; i++){
    console.log("Procesando...");
};

const final = new Date();

console.log("El proceso tardó: " + (final - inicio) + " milisegundos"); */

//--------------------------------------------------------------------

// DOM

// Accediendo al detalle por consola de las propiedades y métodos de los objetos
/* console.dir(document);
console.dir(document.head);
console.dir(document.body) */

// Accediendo a los elementod del DOM

// Por id:
/* let parrafo = document.getElementById("parrafo");

console.log(parrafo.innerHTML);
console.log(parrafo.innerText); */

// Por clases
/* let paises = document.getElementsByClassName("paises");

console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML); */

// Por etiqueta
/* let contenedores = document.getElementsByTagName("div");

console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML); */

//--------------------------------------------------------------------

// Los elementos obtenidos mediante .getElementsByClassName() y .getElementsByTagName() se encuentran contenidos en un array especial identificado como HTMLCollection, que podemos iterar con for...of con la intención de acceder a todos los elementos obtenidos con un recorrido:

let paises = document.getElementsByClassName("paises");
let contenedores = document.getElementsByTagName("div");

for(const pais of paises){
    console.log(pais.innerHTML);
}

for(const div of contenedores){
    console.log(div.innerHTML);
}

//--------------------------------------------------------------------

// Modificar nodos

// innerText [Esta propiedad nos permite acceder y/o modificar el nodo de texto del algún elemento del DOM]

let titulo = document.getElementById("titulo");

console.log(titulo.innerText);

titulo.innerText = "Aprendiendo Javascript";

console.log(titulo.innerText);

titulo.innerText += " en Mercedes";

console.log(titulo.innerText);


// innerHTML [Esta propiedad permitre definir el código HTML interno del elemento seleccionado. La diferencia con innerText es que el navegador lo interpreta como codigo html y no como contenido de texto, por lo que puedo asignar como string a la propiedad innerHTML de un elemento un bloque de código html que se reflejará en la forma de una nueva estructura de etiquetas y contenido interno]

let container = document.getElementById("contenedor");

container.innerHTML = "<h2>Hola mundo!</h2><p>Lorem ipsum</p>"

// Al pasar un string con formato de etiquetas html y contenido a través de la propiedad innerHTML, el navegador lo interpreta como código html y genera nuevos nodos con su contenido dentro del elemento seleccionado


// ClassName [A través de la propiedad ClassName de algún nodo seleccionado podemos acceder al atributo class del mismo y definir cuáles van a ser sus clases. Esto es de utilidad cuando queremos generar cambios dinámicos en el estilado de elementos, combinando la asignación de clases desde JS con los estilos y clases prearmadas en CSS]

container.className= "container row";

//--------------------------------------------------------------------

// Crear y eliminar nodos [Si bien en la sección anterior reconocimos distintas formas de acceso para obtener elementos del DOM desde Javascript, quedan por definir mecanismos para cambiar ek contenido de una estructura HTML]

// Crear un nodo nuevo con el método createElement: nos permite crear un nuevo nodo, especificando por parámetro el nombre de la etiqueta deseada.
let parrafo = document.createElement("p");
// Definir la estructura del nodo creado: ahora que tenemos un nuevo nodo, es necesario determinar cómo estará compuesto el interior del elemento. Esto podemos hacerlo empleando la propiedad innerHTML del nuevo elemento.
parrafo.innerHTML = "<h2>¡Hola Santi!</h2>";
// Añadir el nodo al DOM: para agregar el elemento creado, es necesario introducirlo como hijo de un elemento existente en el DOM. En este ejemplo, el nodo "parrafo" se introduce como hijo del nodo body, usando el método append, que inserta el nuevo elemento sobre el final del contenido del nodo padre seleccionado; si queremos insertarlo sobre el comiendo podemos utilizar el método prepend de forma similar.

// Con el método append:
document.body.append(parrafo);


// Con el método prepend:

let parrafo2 = document.createElement("p");

parrafo2.innerText = "Esto es un párrafo inicial";

document.body.prepend(parrafo2);

// Eliminar un nodo del DOM: se selecciona de forma precisa a través de alguno de los métodos vistos y se aplica el método remove() sobre éste:
parrafo2.remove();

// Ejemplo aplicado:

let listaPersonas = document.getElementById("listaPersonas");

let personas = ["Doris", "Marcelo", "Fernando", "Santiago","Martín"];

for(const persona of personas){
    let li = document.createElement("li");
    li.innerHTML = persona;
    listaPersonas.append(li);
}

//--------------------------------------------------------------------

// Plantillas de texto [También llamadas plantillas literales, son elementos que nos permiten simplificar la concatenación de strings y variables. Sirven para agrupar los valores de variables, así como las propiedades de objetos con strings de referencia, con la intención de generar salidas más legibles.]

let producto = {id: 1, nombre: "Arroz", precio: 125};
let concatenado = "ID: " + producto.id + " - Producto: " + producto.nombre + " $" + producto.precio;
let plantilla = `ID: ${producto.id} - Producto: ${producto.nombre} $ ${producto.precio}`;

console.log(concatenado);
console.log(plantilla);

let contenedorProducto = document.createElement("div");

contenedorProducto.innerHTML = `<h3> ID: ${producto.id}</h3>
                                <p>     Producto: ${producto.nombre}</p>
                                <b> $ ${producto.precio}</b>`;

document.body.append(contenedorProducto);

// .querySelector() [Nos permite seleccionar nodos con la misma sintaxis que utilizamos en los selectores de CSS]

let parraf = document.querySelector("#container p"); // Por sintaxis de css para selectores
let contenedor = document.querySelector("#container"); // Por selector de id con #
parrafo = document.querySelector(".texto"); // Por selector de clases con .

// [Lo interesante del querySelector es que también aplica a pseudo-clases de CSS, brindando un nivel más avanzado de presición]
let radioChecked = document.querySelector(".radio:checked");

// [querySelector retorna el primer elemento que coincida con el parámetro de búsqueda, o sea un solo elemento. Si quiero obtener una colección de elementos, es necesario utilizar el método querySelectorAll() siguiendo el mismo comportamiento.]
parrafo = document.querySelectorAll("p");

//--------------------------------------------------------------------

// EVENTOS

// Definiendo eventos [Para determinar qué eventos vamos a controlar en la página web es necesario emplear alguna de las siguientes notaciones:]

// .addEventListener() => Permite definir qué evento escuchar sobre cualquier elemento del DOM. Estructura => elemento.addEventListener("evento", nombre del event handler)

let contador = 0;

const disminuir = () => {
    contador--;
    displayContador.innerHTML = contador;
    console.log(contador);
};

const aumentar = () => {
    contador++;
    displayContador.innerHTML = contador;
    console.log(contador);
};

let displayContador = document.getElementById("contador");

displayContador.innerHTML = contador;

let botonAumentar = document.getElementById("btnAumentar");

botonAumentar.addEventListener("click", aumentar);

let botonDisminuir = document.getElementById("btnDisminuir");

botonDisminuir.addEventListener("click", disminuir);


// on-event => Permite emplear la propiedad on-event para asignar el event handler, se escribe el prefijo on seguido de el nombre del evento. Estructura => elemento.on-event = () => {event handler}

let botonReiniciar = document.getElementById("btnReiniciar");

botonReiniciar.onclick = () => {
    contador = 0;
    displayContador.innerHTML = contador;
    console.log(event.target);
};


// Atributo HTML => Se determina el evento a escuchar especificando el manejador del evento en el atributo de una etiqueta HTML. La denominación del atributo es idéntica al de la propiedad on-event:

// <input type="button" value="CLICK2" onclick="alert("respuesta 3");"/>



// Objeto Event

let miFormulario = document.getElementById("formulario");

miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){

//Cancelamos el comportamiento del evento
e.preventDefault();

//Obtenemos el elemento desde el cual se disparó el evento
let formulario = e.target

//Obtengo el valor del primero hijo <input type="text">
console.log(formulario.children[0].value); 

//Obtengo el valor del segundo hijo <input type="number"> 
console.log(formulario.children[1].value);  

console.log(formulario);

};

//--------------------------------------------------------------------

// STORAGE [Es un medio de almacenamiento en el cliente, podemos utilizarlo para guardar información de la aplicación en el navegador del usuario.]

// La información almacenada en el storage tiene la estructura clave-valor.



//LocalStorage => almacena datos en el navegador de forma indefinida o hasta que se borren los datos de navegación, la información persiste aunque reiniciemos el navegador e incluso el sistema operativo. Además, los datos se comparten entre pestañas, permitiendo que los valores almacenados puedan ser utilizados y actualizados en distintas pestañas del navegador.


////// localStorage.setItem() => Este método se utiliza para almacenar datos en localStorage.

// Métdo => localStorage.setItem(clave, valor)
// clave = nombre para identificar el elemento
// valor = valor/contenido del elemento

localStorage.setItem('nombre','Santi');
localStorage.setItem('apellido', 'Rojo');
localStorage.setItem('edad', '27');


// localStorae.getItem() => Este métdodo se utiliza para recuperar la información almacenada en localStorage. Es necesario emplear el nombre de clave como parámetro del método getItem() que retorna el valor asociado. Tener en cuenta que siempre lo hace como string, por ende, si necesitamos otro tipo de valor deberemos realizar su conversión, por ejemplo con el método parseInt().

let nombre = localStorage.getItem('nombre');
let apellido = localStorage.getItem('apellido');
let edad = parseInt(localStorage.getItem('edad'));

console.log(nombre);
console.log(apellido);
console.log(edad);



// SessionStorage => almacena datos en el navegador hasta que el usuario cierra la ventana. Los datos solo existen dentro de la sesion actual, por ende no se comparte entre pestañas.

// sessionStorage.setItem() y sessionStorage.getItem() funcionan igual que con locarStorage

sessionStorage.setItem('equipo', 'Boca Jrs');
sessionStorage.setItem('banda', 'Babasónicos');

let equipo = sessionStorage.getItem('equipo');
let banda = sessionStorage.getItem('banda');

console.log(equipo);
console.log(banda);


//--------------------------------------------------------------------

// Acceso de tipo objeto y recorrido

// Con ciclo For...

for(let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    console.log("Clave: " + clave);
    console.log("Valor: " + localStorage.getItem(clave));
}

// Eliminar datos del storage => tenemos dos opciones:

// 1) Por palabra clave: se elimina un único valor en el storage detallando la clave como parámetro del método removeItem()

localStorage.setItem('bienvenida', '¡Hola Santi!');
sessionStorage.setItem('esValido', true);

localStorage.removeItem('bienvenida');
sessionStorage.removeItem('esValido');

// 2) Vaciado: eliminamos toda la información almacenada en el storage con el método clear()

localStorage.clear();
sessionStorage.clear();

//--------------------------------------------------------------------

// JSON (JavaScript Object Notation) => es un formato de texto plano que sirve para poder almacenar objetos en el storage, entre otros.

const producto1 = { id: 2, producto: "Arroz"};

localStorage.setItem('producto1', producto1); // Se guarda [object Object]

// Convertir objetos a JSON => con el método JSON.stringify() podemos transformar un objeto Javascript a un string en formato JSON.

const enJSON = JSON.stringify(producto1);

console.log(enJSON);
console.log(typeof producto1);
concatenado.lastIndexOf(typeof enJSON);

localStorage.setItem('producto1', enJSON);


// Convertir JSON a objetos => con el método JSON.parse() podemos transformar un string en formato JSON a un objeto Javascript.

const producto2 = JSON.parse(localStorage.getItem('producto1'))

console.log(producto2.id);

//--------------------------------------------------------------------


// Operadores avanzados => a medida que el lenguaje va evolucionando con el tiempo, aparecen nuevos operadores que nos permiten resolver tareas de forma simplificada.

// Sugar Syntax => es el nombre que se le da a estos operadores que funcionan como simplificaciones de tareas más complejas.



// AUMENTAR EL VALOR EN 1

let num = 10;

num = num + 1; // Forma tradicional

num += 1; // 1ra forma simplificada, se puede usar también para aumentar cualquier cantidad de numeros

num++; // 2da forma simplificada


// OPERADOR TERNARIO => es una simplificación de if...else, consta de una estructura de sí o sí 3 partes: [condición ? caso1 : caso2]

let temperatura = 31;

if (temperatura > 30){
    console.log('Día caluroso!');
}else{
    console.log('Día agradable');
};

temperatura -= 2;

temperatura > 30 ? console.log('Día caluroso!') : console.log('Día agradable');

// El operador ternario devuelve un return implícito para cada caso, por ende podemos utilizarlo para casos en los que dependemos del valor del return

//Ej:

const usuario = {
    nombre: 'Santi',
    edad: 27
}

// Forma tradicional
/* 
let permiso;

if (usuario.edad >= 18){
    permiso = true;
}else{
    permiso = false;
}

if (permiso){
    console.log('Puede comprar cerveza');
}else{
    console.log('No puede comprar cerveza');
}
 */

// Forma con operador ternario

const permiso = (usuario.edad >= 18) ? true : false;

permiso ? console.log('Puede comprar cerveza') : console.log('No puede cmprar cerveza');


// OPERADOR LÓGICO AND => El operador lógico AND también es una reducción de un condicional, pero trata de ejecutar o retornar algo sólo si la condición es verdadera. Es decir es una reducción de un if sencillo con un solo bloque de ejecución.

const carrito = [];

// Forma tradicional

if (carrito.length === 0){
    console.log('El carrito está vacío!');
}

// con operador AND

carrito.length === 0 && console.log('El carrito está vacío!');

// Todos estos operadores también tienen un return implícito, por lo que se puede utilizar para asignar valores:

const usuario1 = {
    nombre: 'Zeus',
    edad: 2
}

const registroIngreso = usuario1.edad < 3 && new Date();

console.log(registroIngreso);

// OPERADOR LÓGICO OR => funciona de manera similar al operador && pero con la diferencia de que consta de 2 operandos y no de una condición explícita => operando1 || operando2.   Retorna el operando de la izquierda si NO es falsy (es decir, es distinto de 0, null, undefined, NaN, false o string vacío) y sino retorna el de la derecha.

// Ej:

const mascota1 = {
    nombre: 'Miguel',
    edad: 3
};

const mascota2 = null;

console.log(mascota1 || 'La mascota no existe');

console.log(mascota2 || 'La mascota no existe');


// NULLISH COALESCING ("??") => funciona igual que el operador || con la diferencia de que retorna el operador de la izquierda sólo si el de la derecha es null o undefined. Es útil cuando en la evaluación necesitamos incluir valores como el 0 o strings vacíos.

// tabla de valores nullish

console.log(0 ?? "Nullish") // 0
console.log(40 ?? "Nullish") // 40
console.log(null ?? "Nullish") // Nullish
console.log(undefined ?? "Nullish") // Nullish
console.log("Hola mundo" ?? "Nullish") // Hola mundo
console.log("" ?? "Nullish") // ""
console.log(NaN ?? "Nullish") // NaN
console.log(true ?? "Nullish") // true
console.log(false ?? "Nullish") // false


//  ACCESO CNDICIONAL A UN OBJETO ("?") => Si intentamos acceder a un objeto que no existe, naturalmente obtendremos un error. Sin embargo, podemos utilizar el operador ? sobre la referencia de un objeto para condicionar su acceso y tener un mejor control de errores, ya que en caso de no existir dicha propiedad devolverá "undefined" y podemos combinarlo con los operadores || y ?? y evitar errores en la ejecución.

const gato = null;

// console.log(gato.nombre || 'La propiedad no existe'); // Uncaught TypeError: Cannot read properties of null (reading 'nombre') at myScript.js:1214:18

console.log(gato?.nombre || 'La propiedad no existe');

// También puede aplicarse sobre propiedades que sean objetos

const estudiante = {
    nombreEstudiante: 'Ignacio',
    apellidoEstudiante: 'Rojo',
    materias: {
        sociologia: 'aprobado',
        filosofia: 'aprobado',
        psicologiaSocial: 'desaprobado'
    }
}

console.log(estudiante?.materias?.filosofia || 'La materia consultada no existe');

console.log(estudiante?.materias?.matematica || 'La materia consultada no existe');


// DESESTRUCTURACIÓN => es una forma simplificada de crear variables con valores de propiedades de un objeto

// Forma tradicional
/* 
let nombreEstudiante = estudiante.nombreEstudiante;

let apellidoEstudiante = estudiante.apellidoEstudiante;

console.log(nombreEstudiante);
console.log(apellidoEstudiante);
 */

// Forma con desestructuración [let o const + {nombre de la variable 1, nombre de la variable 2} = nombre del objeto de referencia; (los nombres de las variables deben ser idénticos a los de las propiedades de las cuales van a tomar su valor)]

let {nombreEstudiante, apellidoEstudiante} = estudiante;

console.log(nombreEstudiante);
console.log(apellidoEstudiante);

// Forma para desestructurar una propiedad que a la vez es un objeto

let {materias: {filosofia}} = estudiante;

console.log(filosofia);

// ALIAS => debido a que cuando desestructuramos un objeto el nombre de la propiedad y de la variable que almacene su valor deben ser iguales, suele darse el caso de tener variables con nombres poco descriptivos o apropiados, por eso podemos asignar alias a las propiedades que pasarán a ser el nombre de la variable donde almacenemos el valor de dicha propiedad.

const item = {
    item_id: 432,
    product_name: 'Some product',
    price_per_unit: 5600
}

const {
    item_id: id,
    product_name: name,
    price_per_unit: precio
} = item;

console.log(id);
console.log(name);
console.log(precio);

// DESESTRUCTURACIÓN EN PARÁMETROS => Consiste en desestructurar objetos al pasarlos por parámetro directamente en el llamado de la función

const product = {
    id: 10,
    nombre: 'Curso Javascript',
    precio: 12500
}

// Forma desestructurando en el bloque
const desestructurar = (item) => {
    const {id, nombre} = item;
    console.log(id, nombre);
}

desestructurar(product);

// Forma desestructurando lo que reciba por parámetro
const desestructiring = ( {id, nombre}) => {
    console.log(id, nombre);
}

desestructiring(product);

let botoncito = document.getElementById("botoncito");


// DESESTRUCTURACIÓN DE ARRAYS => Podemos desestructurar arrays de forma similar a los objetos, pero en vez de utilizar llaves utilizamos corchetes. La desestructuración de arrays es POSICIONAL, es decir, declaramos las variables en orden y estas almacenan los valores de las mismas posiciones del array de referencia.

const colores = ['azul', 'blanco', 'amarillo', 'rojo'];

const [a, b] = colores;

console.log(a,b); // azul blanco

// No funciona aquí la coincidencia por nombre, sino que se toman los valores segun la posición. Si queremos acceder a otras posiciones, o mejor dicho omitir las primeras, podemos hacerlo dejando espacios vacíos con comas.

const [,, c, d] = colores;

console.log(c, d); // amarillo rojo



// SPREAD (...) => Sirve para "desparramar" los elementos de un array cuando lo pasamos como parámetro, es decir, en lugar de pasar un array como tal, pasa como parámetro cada elemento individualmente 

console.log(colores);

console.log(...colores);

// Es muy útil cuando trabajamos con funciones que no admiten arrays como parámetros. Por ej:

const numbers = [54, 82, 76, 39, 22];

console.log(Math.max(...numbers)); // 82

// También podemos hacer spread de un array dentro de otras estructuras que lo admitan, como puede ser otro array o un objeto, lo que nos permite replicar el contenido de un array desntro de otra estructura. Si lo hacemos dentro de un objeto, cada propiedad toma como nombre el índice de los elementos.

const nombres1 = ['Lu', 'Santi'];
const nombres2 = ['Miguel', 'Pilar', 'Zeus'];

// Spread de los dos arrays dentro de otro
const allNames = [...nombres1, ...nombres2];

console.log(allNames); // ['Lu', 'Santi', 'Miguel', 'Pilar', 'Zeus']

// Spread del array en un objeto
const nombresObj = {
    ...allNames
}

console.log(nombresObj); // {0: 'Lu', 1: 'Santi', 2: 'Miguel', 3: 'Pilar', 4: 'Zeus'}

// Spread de objetos => También se puede hacer spread de objetos, pero debe hacerse dentro de una estructura que lo permita, como por ejemplo otro objeto. Al hacer esto, cada par de clave-valor se replica y a la vez nos permite modificar o agregar las que queramos.

const user1 = {
    nombre: 'Juan',
    edad: 24,
    curso: 'Javascript'
}

// Lista todas las propiedades y valores de user1 dentro de otro objeto

const user2 = {
    ...user1
};

console.log(user2); // {nombre: 'Juan', edad: 24, curso: 'Javascript'}

const user3 = {
    ...user1,
    curso: 'React JS',
    email: 'juan@doe.com'
};

console.log(user3); // {nombre: 'Juan', edad: 24, curso: 'React JS', email: 'juan@doe.com'}


// REST PARAMETERS => El operador spread también puede utilizarse dentro de la declaración de una función para indicar que queremos recibir una cantidad indeterminada de parámetros. Al hacer esto, todos los parámetros que reciba la función seran agrupados dentro de un array, con el cual podre trabajar dentro.

// Ejemplo se función suma con rest parameters

function sumar(...nums){
    return nums.reduce((acc,n) => acc + n, 0);
};

console.log(sumar(3,8,4)); // 15
console.log(sumar(6,7)); // 13
