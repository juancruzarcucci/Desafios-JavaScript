
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

   const armarTarjeta =(mjeModal)=>{
    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);
    // const card = document.createElement("div");
    // card.classList.add("card");
    // cardContainer.appendChild(card);

    // const divFotoCard = document.createElement("div");
    // divFotoCard.classList.add("div-foto","card");
    // cardContainer.appendChild(divFotoCard);
    // divFotoCard.innerHTML = ` <img src="${fotoProducto}.jpg" class="foto">`

   

    return modal.innerHTML = `<div class="modal-child">
    <h3 class="modal-tittle">FELICITACIONES, TU COMPRA SE EFECTUÓ CORRECTAMENTE</h3>
    <div class="modal-preg">
        <p class="modal-text">Detalle de la compra:
        ${mjeModal}</p>
        <button class="modal-ok"><a href="index.html">OK</a></button>
    </div>`
    
    // <img src="${fotoProducto}.jpg">
    // fotoProducto
}


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
    <p class="flex-text">SELECCIONE CANTIDAD</p><input type="number" class="cantidad" id="cantidad${producto.id}"> <br>
    <input type="button" id="button${producto.id}" class="button" value="COMPRAR">
    </div>`


    container.innerHTML += newProduct;
    

}
    for (const producto of productos) {


        let qty = document.getElementById(`cantidad${producto.id}`);
         button = document.getElementById(`button${producto.id}`);
        let detalle1 = ``;
        let mensaje= ``;
        // let montoAPagar = 0;
        
        button.addEventListener("click", ()=>{
            let montoXCompra = (producto.precio*qty.value);

            montoAPagar += montoXCompra;
         
            detalle1 = [`Compraste:
            -Nombre producto: ${producto.nombre} <br>
            -Cantidad producto: ${qty.value}<br>
            -Precio producto: $${producto.precio}<br>
            <br><br>
            `];
            // -Precio total: $${montoAPagar}<br></br>
            // detalle1 = `- Compraste  ${producto.nombre} a $${producto.precio} cada par. El precio total de los ${qty.value} pares es de ${montoAPagar}` 
          

            msjModal += detalle1;
            mensaje += `El precio final es de: <b>$${montoAPagar}</b>`
            
            // console.log(qty.value,montoXCompra);
            // console.log(montoAPagar)
            // console.log(`${detalle1}
            // El precio unitario por esta compra es de: ${montoXCompra}
            // El precio total de la compra es de ${montoAPagar}`);
            // console.log(msjModal)
            // console.log(montoXCompra, montoAPagar)
            carritoDeCompras.push(msjModal);
            newCarrito = carritoDeCompras.pop(0,1);
            console.log(carritoDeCompras);
             console.log(newCarrito);
        }
        )
       
    }


   
   
    const carritoButton = document.getElementById("btnCarritoDeCompras");
    carritoButton.addEventListener("click", ()=>{
    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);

    // const encontrar = carritoDeCompras.find(elemento => elemento.montoTotal);

    console.log(newCarrito);
    

    return modal.innerHTML = `<div class="modal-child">
    <h3 class="modal-tittle">FELICITACIONES, TU COMPRA SE EFECTUÓ CORRECTAMENTE</h3>
    <div class="modal-preg">
         <p class="modal-text">${newCarrito}</p>
         <p class = "monto-a-pagar">El precio total de la compra es de $:<b>${montoAPagar}</b></p>
        <button class="modal-ok"><a href="index.html" class="ok">OK</a></button>
    </div>`
        })
   

}

showMenu()



// const button = document.querySelectorAll("#button")
// const cantidad = document.getElementById("cantidad");





//  button2.addEventListener("click", efectuarCompra= (e)=>{
//     alert(cantidad)
//  })
    // ()=>{
    //     console.log(montoAPagar)
    //     const modal = document.createElement("div");
    //     modal.classList.add("modal");
    //     document.body.appendChild("modal");

    //     modal.innerHTML = `<div class="modal-child">
    //     <h3 class="modal-tittle">FELICITACIONES, TU COMPRA SE EFECTUÓ CORRECTAMENTE</h3>
    //     <div class="modal-preg">
    //         <p class="modal-text">Desea seguir comprando?</p>
    //         <input type="button" value="SI" id="modal-si">
    //         <input type="button" value="NO" id="modal-no">
    //     </div>`
    // }