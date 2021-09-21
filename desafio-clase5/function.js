
// FUNCION PARA VERIFICAR STOCL. RECIBE CANTIDAD INDICADA POR EL USUARIO Y STOCK DISPONIBLE
const stockValidator = (cantidad, stock) =>{
    if (cantidad > stock) {
        alert(`Lo siento, no hay suficiente stock para cubrir la cantidad del producto que pediste, nos quedan ${(stock)}`)
        return false
    }else{
        return true
    }
}



//FUNCION PARA CALCULAR MONTO DE LA VENTA 

const calculadoraVenta=(venta,cantidad)=>{
    let result = venta*cantidad
    alert(`El total de la compra es de ${result}`)
    return result
}


// FUNCION PARA AGREGAR AL CARRO DE COMPRAS. A PARTIR DE LA OPCION DEL MENU QUE ELIGE EL USUARIO TENEMOS EL PRODUCTO QUE ELIGIO Y LO MULTIPLICAMOS POR EL NNUMERO
const agregarAlCarro=(venta, cantidad) =>{
    
    switch (venta) {
    case 1:
        AirJordan1.showInfo()
        if (stockValidator(cantidad, (AirJordan1.stock))) {
            calculadoraVenta((AirJordan1.price), cantidad);
            (AirJordan1.stock) -= cantidad;
            montoAPagar += ((AirJordan1.price)*cantidad);

        }
    
     

         break;
    case 2:
        alert(`Seleccionaste las Air Jordan 2`)
        if (stockValidator(cantidad, (AirJordan2.stock))) {
            calculadoraVenta((AirJordan2.price), cantidad);
            (AirJordan2.stock) -= cantidad;
            montoAPagar += ((AirJordan2.price)*cantidad);

        }
        break;
    case 3:
            alert(`Seleccionaste las Air Jordan 3`)
            if (stockValidator(cantidad, (AirJordan3.stock))) {
                calculadoraVenta((AirJordan3.price), cantidad);
                (AirJordan3.stock) -= cantidad;
                montoAPagar += ((AirJordan3.price)*cantidad);
    
            }
        break;
    case 4:
            alert(`Seleccionaste las Air Jordan 4`)
            if (stockValidator(cantidad, (AirJordan4.stock))) {
                calculadoraVenta((AirJordan4.price), cantidad);
                (AirJordan4.stock) -= cantidad;
                montoAPagar += ((AirJordan4.price)*cantidad);
    
            }
        break;
                
    default:
        break;
}
}