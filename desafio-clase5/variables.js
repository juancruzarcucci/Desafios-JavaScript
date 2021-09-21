class Productos{
    constructor(id , nombre, precio, stock){
    this.id = id
    this.name = nombre;
    this.price =precio;
    this.stock = stock;
    this.info = `Las ${nombre} tienen un precio de $${precio}.`
    }
    showInfo(){
        alert(this.info)
    }
}

let AirJordan1 = new Productos(1,"Air Jordan 1", 200, 10);
let AirJordan2 = new Productos(2,"Air Jordan 2", 150, 15);
let AirJordan3 = new Productos(3,"Air Jordan 3", 250, 8);
let AirJordan4 = new Productos(4,"Air Jordan 4", 200, 4);

const menu = `Seleccione el articulo que desea: 
1-${(AirJordan1.name)}
2-${(AirJordan2.name)}  
3-${(AirJordan3.name)} 
4-${(AirJordan4.name)}
5-Si desea salir presione `;

const preguntarCantidad ="Cuantos pares queres?";

let respuesta = undefined;

let montoAPagar = 0;



