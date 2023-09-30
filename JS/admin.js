let btn_agg_prod = document.getElementById("agg_Prod");
let btn_stock_prod = document.getElementById("stock_Prod");

let nombresProductos = [];

/*----------------- Intento de crear y agregar nuevos productos a la lista--------------------- */

btn_agg_prod.addEventListener("click", ()=>{
    switch (prompt("Bebida o Alimento?")) {
        case "Bebida":
            agregarBebida();            
            break;
        case "Alimento":
            agregarAlimento();
            break;    
        default:
            alert("Error, intente de nuevo");
            break;
    }    
} )

function agregarBebida(){
    let bebidaNueva = new Bebidas (prompt("Nombre del producto: "),prompt("Precio $:"), prompt("Peso en gr: "), prompt("Fecha de vencimiento: "), prompt("Cantidad: "))
    nombresProductos.push = bebidaNueva;
   alert("Agregaste "+ bebidaNueva.nombre +" a la lista de Productos");
   alert(nombresProductos);    
}
function agregarAlimento(){
    let nuevoAlimento = new Alimentos (prompt("Nombre del producto: "),prompt("Precio $:"), prompt("Peso en gr: "), prompt("Fecha de vencimiento: "), prompt("Cantidad: "))
    nombresProductos.push = nuevoAlimento;
    alert("Agregaste " + nuevoAlimento.nombre + " a la lista de Productos" );
}

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    etiquetar() {
        return ` ${this.categoria} ${this.nombre} $ ${this.precio} Fecha de vencimiento: ${this.vencimiento} `
    }
    reducirStock(cantidad) {
        if (this.stock > cantidad) {
            this.stock = this.stock - cantidad;
        }
        else {
            return `No hay suficiente stock. Stock disponible: ${this.stock}`;
        }
    }
    aumentarStock(cantidad) {
        this.stock = this.stock + cantidad;
        return `El stock actual de ${this.nombre} es: ${this.stock}`;
    }
   
}
class Bebidas extends Producto {
    constructor(nombre, precio, litros, vencimiento, stock) {
        super(nombre, precio, stock);
        this.litros = litros;
        this.categoria = "Bebidas";
        this.vencimiento = vencimiento;
    }
    etiquetar() {
        return ` ${super.etiquetar()} ${this.litros}Litros   Precio por litro: $ ${this.precio / this.litros} `
    }
    
}
class Alimentos extends Producto {
    constructor(nombre, precio, peso, vencimiento, stock) {
        super(nombre, precio, stock);
        this.peso = peso;
        this.categoria = "Alimentos";
        this.vencimiento = vencimiento;
    }
    etiquetar() {
        return ` ${super.etiquetar()}  ${this.peso} Kilos  Precio por kilo: $ ${this.precio / this.peso} `
    }
}
/* --------------------------------------------------------------------------------------- */

/*------------------------------- Productos ya creados--------------------------------- */
var sanguches = new Alimentos("Sanguchitos de miga", 700, 0.350, "10/07/23", 200);
var aguita = new Bebidas("Ivess", 365, 2.5, "30/11/23", 400);
var salamin = new Alimentos("Salame fox", 890, 0.56,"23/2/23",100);
/* ------------------------------------------------------------------------------------ */