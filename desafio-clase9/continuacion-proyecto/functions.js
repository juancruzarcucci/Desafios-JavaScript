
// FUNCION PARA VERIFICAR STOCL. RECIBE CANTIDAD INDICADA POR EL USUARIO Y STOCK DISPONIBLE
// const stockValidator = (cantidad, stock) =>{
//     if (cantidad > stock) {
//         alert(`Lo siento, no hay suficiente stock para cubrir la cantidad del producto que pediste, nos quedan ${(stock)}`)
//         return false
//     }else{
//         return true
//     }
// }





// ESTA FUNCION EJECUTA LA COMPRA. ENCONTRAMOS EL PRODUCTO MEDIANTE LA venta 
// MEDIANTE UN FIND ENTRAMOS AL ARRAY Y TENEMOS LA VARIABLE encontrar
// 
// const agregarAlCarro = (venta, cantidad ) =>{
//    const encontrar = productos.find(producto=>producto.id === venta)
//    var nombreProducto = encontrar.nombre
//    var fotoProducto = encontrar.imagen
   
//    stockValidator(cantidad, encontrar.stock)
//    if (stockValidator(false)) {
//        montoAPagar += cantidad*encontrar.precio;
//        productos[venta-1].stock -= cantidad;
//        alert(`Se agregó ${encontrar.nombre} a la cuenta, el monto a pagar es de $${montoAPagar}`)
//    }

//    const armarTarjeta =(producto, cantidad, precio, foto)=>{
//     const cardContainer = document.createElement("div");
//     cardContainer.classList.add("card-container")
//     container.appendChild(cardContainer)

//     const card = document.createElement("div");
//     card.classList.add("card");
//     cardContainer.appendChild(card);

//     const divFotoCard = document.createElement("div");
//     divFotoCard.classList.add("div-foto","card");
//     cardContainer.appendChild(divFotoCard);
//     divFotoCard.innerHTML = ` <img src="${fotoProducto}.jpg" class="foto">`

   

//     card.innerHTML = `<h1>COMPRA REALIZADA CON EXITO</h1>
//     <p><b>${producto}</b> ha sido agregado al carrito correctamente</p>
//     <p>Cantidad: <b>${cantidad}</b></p>
//     <p>Precio total a pagar: <b>$${precio}</b></p>
//     `
    
//     // <img src="${fotoProducto}.jpg">
//     // fotoProducto
// }


//    armarTarjeta(nombreProducto, cantidad, montoAPagar )
// }




// FUNCION QUE ME PERMITE MOSTRAR TODOS LOS PRODUCTOS DISPONIBLES EN STOCK

const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const showMenu = ()=>{

for (const producto of productos) {


    const newProduct =`<div class="flex-item">
    <h2 class="item-name">${producto.nombre}</h2>
    <div class="img-container"><img src="${producto.imagen}.jpg" class="img" alt=""></div>
    <p class="flex-text flex-price">PRECIO <b>$${producto.precio}</b></p><br>
    <p class="flex-text">SELECCIONE CANTIDAD</p><input type="number" id="cantidad"> <br>
    <input type="button" id="button" class="button" value="COMPRAR">
    </div>`

    container.innerHTML += newProduct;
}

}
showMenu()




const prueba = document.querySelector("#prueba")
prueba.addEventListener("click", (e)=>{
    alert("di click en el boton")
})


const button = document.querySelectorAll("#button")
const cantidad = document.getElementById("cantidad");





 button2.addEventListener("click", efectuarCompra= (e)=>{
    alert(cantidad)
 })