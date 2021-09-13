let compraOVenta = prompt("Indique si realizo una compra o una venta");


if(compraOVenta == "Compra" || compraOVenta == "compra"  || compraOVenta1 ==  "Compra"|| compraOVenta1 == "compra" ){
    let compra = prompt(`Ingrese el monto de su compra, si desea salir, presione "ESC"`)
    
    console.log("El monto ingresado fue de : $"+ compra)
    while(compra != "ESC"){
        compra = prompt(`Ingrese el monto de su compra, si desea salir, presione "ESC"`)
        if(compra == "ESC"){
            console.log("Compra finalizada")
            break
        }
        console.log("El monto ingresado fue de : $"+ compra)
     
    }

}
    
let compraOVenta1 = prompt("Indique si realizo una compra o una venta. Si desea salir escriba ESC");

if (compraOVenta1 == "ESC") {
    console.log("Transaccion finalizada.")
}

if (compraOVenta == "venta" || compraOVenta == "Venta" || compraOVenta1 == "venta" || compraOVenta1 == "Venta"  ) {
    let venta = prompt(`Ingrese el monto de su venta, si desea salir, presione "ESC"`)
    console.log("El monto ingresado fue de : $"+ venta)
    while(venta != "ESC"){
        venta = prompt(`Ingrese el monto de su venta, si desea salir, presione "ESC"`)
        if(venta == "ESC"){
            console.log("Venta finalizada")
            break
        }
        console.log("El monto ingresado fue de : $"+ venta)
    }
}