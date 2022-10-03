let nombre = "Santi";
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
};

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

do{
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
    
}while(edad < 18);

 