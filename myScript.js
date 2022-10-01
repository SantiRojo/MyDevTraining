let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let age;
let phoneNumber = "+54 9 (0351) 152262561";

const catName = "Miguel";


let yob = parseInt(prompt("Ingrese el año de su nacimiento"));
let actualYear = 2022;

age = actualYear - yob;

console.log(age);

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

alert("El usuario ingresado es " + nombreCompleto + " y su edad es de " + age + " años.");
 
if(age >= 18){
    alert("El usuario es mayor de edad.");
}else{
    alert("El usuario es menor de edad.");
}; 