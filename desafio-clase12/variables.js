const productos = []

productos.push({id:1, nombre: "Air Sneakers 1", precio: 200, stock: 15, demanda: 5, imagen: ` /img/foto-noticia-2`, info: `Se entregan en un plazo de 7 dias habiles. Vienen con caja y etiqueta original.`});
productos.push({id:2, nombre: "Air Sneakers 2", precio: 150, stock: 5, demanda: 10, imagen: `/img/foto-noticia-3`, info: `Se entregan en un plazo de 7 dias habiles. Vienen con caja y etiqueta original.`});
productos.push({id:3, nombre: "Air Sneakers 3", precio: 300, stock: 10, demanda: 40, imagen: `/img/foto-noticia-4`, info: `Se entregan en un plazo de 7 dias habiles. Vienen con caja y etiqueta original.`});
productos.push({id:4, nombre: "Air Sneakers 4", precio: 250, stock: 2, demanda: 3, imagen: `/img/foto-noticia-5`, info: `Se entregan en un plazo de 7 dias habiles. Vienen con caja y etiqueta original.`});
productos.push({id:5, nombre: "Air Sneakers 5", precio: 310, stock: 12, demanda: 4, imagen: `/img/foto-noticia-6`, info: `Se entregan en un plazo de 7 dias habiles. Vienen con caja y etiqueta original.`});
productos.push({id:6, nombre: "Air Sneakers 6", precio: 230, stock: 15, demanda: 5, imagen: ` /img/foto-noticia-7`, info: `Se entregan en un plazo de 7 dias habiles. Vienen con caja y etiqueta original.`});


let carritoDeCompras = [];
let newCarrito = [``];




const preguntarCantidad ="Cuantos pares queres?";

let respuesta = undefined;

let montoAPagar = 0;
let msjModal = ``;
let mensaje= `aaaaaaaaaaa`;
