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

var sanguchitos = new Alimentos("Sanguchitos de miga", 700, 0.350, "10/07/23", 200);
var aguita = new Bebidas("Ivess", 365, 2.5, "30/11/23", 400);
var salamin = new Alimentos()

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







