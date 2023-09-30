
let sect_c = document.getElementsByClassName("sect-carrito");


let a_admin = document.getElementById("admin");
let adminPass = "123";


let btn_c = document.getElementsByClassName("btn-c");
let items_carro= document.getElementsByClassName("p-item"); /* parrafos de articulos carrito */
let agua = document.getElementById("prod1");
let prod2 = document.getElementById("prod2");
let galletitas = document.getElementById("prod3");
let jugo = document.getElementById("prod4");

/*---------------- Intento de pasar los datos del producto al carrito ---------------*/
/* function jsonearnt(algo) {
    let elAlgo= JSON.stringify(algo)
    alert(elAlgo)    
}

for (const btn of btn_c) {    
    btn.addEventListener("click",()=>{
        switch (btn.name) {
            case "ivess": 
                alert("este es el boton de agua");
                jsonearnt(aguita);
                break;

            case "sanguchitos":
                jsonearnt(sanguches);
                alert("esto es comida");
                break;

            default: alert("equisdent");
                break;
        }
        
        
    })    
}
/* -------------------------------------------------------------------------- */
/*------------------------------- Productos ya creados--------------------------------- */
/* var sanguches = new Alimentos("Sanguchitos de miga", 700, 0.350, "10/07/23", 200);
var aguita = new Bebidas("Ivess", 365, 2.5, "30/11/23", 400);
var salamin = new Alimentos("Salame fox", 890, 0.56,"23/2/23",100); */
/* ------------------------------------------------------------------------------------ */ 


/* ----------------Funciones para otros botones---------------------------------------- */

function vender(cantidad) {
    if (cantidad < this.stock) {
        this.reducirStock(cantidad);
        let costo = this.precio * cantidad;
        return `El costo total es de: $ ${costo}`;
    } else {
        return `No hay suficiente stock. Stock disponible: ${this.stock}`;
    }
}
function agregar(item, cantidad = 1) {
    for (let unidades = 0; unidades < cantidad; unidades++) {
        carrito.push(item);
    };
}
function calcularPrecio() {
    carrito.forEach(e => {
        listaPrecios.push(e.precio);
        nombresProductos.push(e.nombre);
    });
    let costoTotal = 0;
    listaPrecios.forEach(e => {
        costoTotal = costoTotal + e;
    });
    return `Productos: ${nombresProductos} \n Precios: ${listaPrecios} \n Costo total: ${costoTotal}`;
       
}

let nombresProductos = [];

let listaPrecios = [];

let carrito = [];
/* ---------------------------------------------------------------------------------------------------- */

/* ---------------------Ingresar como Admin --------------------------- */
a_admin.addEventListener("click",function(event){
    
    let contraseña= "";
       
    contraseña=prompt("Ingrese la contraseña de Administrador");
    if (contraseña==adminPass) {
        alert("contraseña correcta");
      
      
   }else{   
    event.preventDefault();
        alert("Contraseña incorrecta"); 
    }

} )
/* -------------------------------------------------------------------- */



/*-------------------------------- Funcion de agregar al carro ------------------------------------*/

function agregarAlCarro() {
    let cantidad="";
    do {
         cantidad = prompt("Cuantas unidades desea agregar al carro?");

    } while (isNaN(cantidad));

    if (cantidad != NaN && cantidad>0) {
        alert("Añadiste " + cantidad + " unidades de " + items_carro + " al carrito.");
    } else{
        let confirmar = confirm("Desea agregar este producto al carrito?");

        if (confirmar == true) {
            alert("Ingrese nuevamente");
            agregarAlCarro();
        } else {
            alert("entonces pa que tocas?");            
        }
    } 
}
/* -------------------------------------------------------------------------------------------------- */
