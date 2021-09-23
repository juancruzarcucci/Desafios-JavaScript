const productos = []

productos.push({id:1, nombre: "Air Sneakers 1", precio: 200, stock: 15, demanda: 5});
productos.push({id:2, nombre: "Air Sneakers 2", precio: 150, stock: 5, demanda: 10});
productos.push({id:3, nombre: "Air Sneakers 3", precio: 300, stock: 10, demanda: 40});
productos.push({id:4, nombre: "Air Sneakers 4", precio: 250, stock: 2, demanda: 3});




const preguntarCantidad ="Cuantos pares queres?";

let respuesta = undefined;

let montoAPagar = 0;

arrayPrecios=[];

arrayDemanda=[];


for(const producto of productos) {
    console.log( producto.precio ) 
    arrayPrecios.push(producto.precio)
    console.log(producto.demanda)
    arrayDemanda.push(producto.demanda)
}

console.log(arrayPrecios.sort())

let demandaOrden = console.log(arrayDemanda.sort((a, b) => {
    return a-b;
    }
))


console.log(`La demanda de los productos es de  ${demandaOrden}`)

