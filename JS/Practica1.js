
/* Le pregunta al usuario su nombre y edad y le dice si es mayor o menor */


/* let nombre = prompt("¿Cual es tu nombre?");
do {

    var edad = prompt("¿Que edad tienes?");

} while (isNaN(edad));


if (edad>17) {
    alert("Hola " + nombre + ", felicidades, tienes " + edad + " años, ya eres mayor de edad :D");
    
} else {
    alert("Hola " + nombre + ", tienes solo " + edad + " años, todavía tas chiquito, vuelve cuando seas mayor de edad c:");    
} */


/* ------------------------------------------------------------------------------------------------ */


/* Le permite al usuario ingresar un numero y le dice si ese es par o impar */

/* do {
    var numero = prompt("Ingrese un número");
} while (isNaN(numero));


if (numero%2==0) {
    alert("el número ingresado es par");
    
} else { 
    alert("el número ingresado es impar");
    
}
 */

/* --------------------------------------------------------------------------------------------- */

/* programa pide 3 numeros y los ordena de mayor a menor */

/* let miLista = [];
let num1;
let num2;
let num3;
let lug1;
let lug2;
let lug3;

do {
   num1= prompt("Ingrese el primer numero");
   miLista.push(num1);
   
} while (isNaN(num1));

do {
    num2= prompt("Ingrese el segundo numero");
    miLista.push(num2);
    
} while (isNaN(num2));

do {
    num3= prompt("Ingrese el tercer numero");
    miLista.push(num3);
    alert(miLista);
    
} while (isNaN(num3));

/* [num1,num2,num3] */

/* if (num3<num2) {
    lug1=num2;
    miLista[1]=num3;
    miLista[2]=lug1;
    alert(miLista);
    alert("primer if");
}

if (num3<num1) {
    lug2=num1;
    miLista[0]=num3;
    miLista[1]=lug2;
    alert(miLista);
    alert("segundo if");
}

if (num2<num1) {
    lug1=num2;
    lug2=num1;
    lug3=lug2;
    miLista[1]=lug1;
    miLista[2]=lug3;
    alert(miLista);  
    alert("tercer if");  
}
------------------------------------------------------------------------------------------------------ */

/* function Vehiculo(km_inicio, km_final, combus_inicio, combus_final) {
    this.km_inicio = km_inicio;
    this.km_final = km_final;
    this.combus_inicio = combus_inicio;
    this.combus_final = combus_final;
    this.calcE = function () {
        consumo_combus = combus_inicio - combus_final;
        kms_recorridos = km_final - km_inicio;

        eficiencia = kms_recorridos / consumo_combus;
        alert(eficiencia);
    }
}
var listaC = [];

function camionNuevo() {
    return new Vehiculo(
        ingresoNumero("Kms iniciales del camion nuevo"),
        ingresoNumero("Kms final"),
        ingresoNumero("Combustible inicial"),
        ingresoNumero("Combustible final")
    )
}

function ingresoNumero(msj) {
    do {
        var numero = prompt(msj);

    } while (isNaN(numero));
    return numero;
}


do {
    listaC.push(camionNuevo());

} while (lictsaC.lenght < 3); 




for (let index = 0; index < 3; index++) {



} */

/* ------------------------------------------------------------------------------------------------------------------------------------- */

/* 03-06 matriz */

const laMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const laMatrix2LaVenganzaDeNeo = [
    [23, 2, 5],
    [9, 1, 2],
    [1, 5, 5, 5],
    [1, 5, 5]
]

/* ejercicio1 */
/* function suMatrizJaja(matriz) {

    let total = 0;

    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz[f].length; c++) {
            total = total + matriz[f][c];
        }
    }
    return total;
} */

/* ejercicio2 */
function suma2(matriz) {   
    let elArray = [] 

    for (let f = 0; f < matriz.length; f++) {

        let total = 0;

        for (let c= 0; c < matriz[f].length; c++) {

            total = total + matriz[f][c]; 
            
        }
        elArray.push(total);  
    }
    return elArray;    
    
}
console.log(suma2(laMatrix2LaVenganzaDeNeo));














