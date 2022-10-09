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

let parrafo = document.querySelector("#container p"); // Por sintaxis de css para selectores
let contenedor = document.querySelector("#container"); // Por selector de id con #
parrafo = document.querySelector(".texto"); // Por selector de clases con .

// [Lo interesante del querySelector es que también aplica a pseudo-clases de CSS, brindando un nivel más avanzado de presición]
let radioChecked = document.querySelector(".radio:checked");

// [querySelector retorna el primer elemento que coincida con el parámetro de búsqueda, o sea un solo elemento. Si quiero obtener una colección de elementos, es necesario utilizar el método querySelectorAll() siguiendo el mismo comportamiento.]
parrafo = document.querySelectorAll("p");

//--------------------------------------------------------------------

// EVENTOS