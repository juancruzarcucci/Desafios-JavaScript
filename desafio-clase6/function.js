
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
   stockValidator(cantidad, encontrar.stock)
   if (stockValidator(false)) {
       montoAPagar += cantidad*encontrar.precio;
       productos[venta-1].stock -= cantidad;
       alert(`Se agregó ${encontrar.nombre} a la cuenta, el monto a pagar es de $${montoAPagar}`)
   }
}

