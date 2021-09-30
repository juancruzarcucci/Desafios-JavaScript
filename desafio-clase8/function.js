
//FUNCION PARA CALCULAR MONTO DE LA VENTA 

// const calculadoraVenta=(venta,cantidad)=>{
//     let result = venta*cantidad
//     alert(`El total de la compra es de ${result}`)
//     return result
// }

const showMenu = ()=>{
    let menu = `Elija el producto:\n`
    productos.forEach((producto)=>{
        menu += `${producto.id}.- ${producto.nombre} \n`
    })
    menu += (productos.length + 1) + ".-Salir"

    return parseInt(prompt(menu))
}

// FUNCION PARA VERIFICAR STOCL. RECIBE CANTIDAD INDICADA POR EL USUARIO Y STOCK DISPONIBLE
const stockValidator = (cantidad, stock) =>{
    if (cantidad > stock) {
        alert(`Lo siento, no hay suficiente stock para cubrir la cantidad del producto que pediste, nos quedan ${(stock)}`)
        return false
    }else{
        return true
    }
}


// ESTA FUNCION EJECUTA LA COMPRA. ENCONTRAMOS EL PRODUCTO MEDIANTE LA venta 
// MEDIANTE UN FIND ENTRAMOS AL ARRAY Y TENEMOS LA VARIABLE encontrar
// 
const agregarAlCarro = (venta, cantidad ) =>{
   const encontrar = productos.find(producto=>producto.id === venta)
   var nombreProducto = encontrar.nombre
   var fotoProducto = encontrar.imagen
   
   stockValidator(cantidad, encontrar.stock)
   if (stockValidator(false)) {
       montoAPagar += cantidad*encontrar.precio;
       productos[venta-1].stock -= cantidad;
       alert(`Se agregó ${encontrar.nombre} a la cuenta, el monto a pagar es de $${montoAPagar}`)
   }

   const armarTarjeta =(producto, cantidad, precio, foto)=>{
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container")
    container.appendChild(cardContainer)

    const card = document.createElement("div");
    card.classList.add("card");
    cardContainer.appendChild(card);

    const divFotoCard = document.createElement("div");
    divFotoCard.classList.add("div-foto","card");
    cardContainer.appendChild(divFotoCard);
    divFotoCard.innerHTML = ` <img src="${fotoProducto}.jpg" class="foto">`

   

    card.innerHTML = `<h1>COMPRA REALIZADA CON EXITO</h1>
    <p><b>${producto}</b> ha sido agregado al carrito correctamente</p>
    <p>Cantidad: <b>${cantidad}</b></p>
    <p>Precio total a pagar: <b>$${precio}</b></p>
    `
    
    // <img src="${fotoProducto}.jpg">
    // fotoProducto
}


   armarTarjeta(nombreProducto, cantidad, montoAPagar )
}
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

