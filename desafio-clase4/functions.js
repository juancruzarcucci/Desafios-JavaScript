
// FUNCION PARA CALCULAR LA COMPRA
const priceCalculator = (purchasing, qty) =>{
    result =  purchasing*qty
    alert(`El total de tu compra sin impuestos es de $${result}`)
}

// FUNCION QUE CALCULA EL IMPUESTO POR UNA COMPRA EN EL EXTERIOR
const taxesCalulator = (purchase) =>{
     result = purchase + (purchase*foreignTaxes)
  
    alert(`El total de su compra con los impuestos agregados es de ${result}`);
}
// FUNCION QUE CALCULA EL IMPUESTO POR UNA COMPRA CON IVA
const ivaCalculator = (purchase)=>{
     result = purchase + (purchase*ivaTax)
    alert(`El total de su compra es de ${result}`);
}
// FUNCION QUE CALCULA IMPUESTOS QUE NOS HACEN POR VENTA EN EXTERIOR
const saleTax = (resultVenta)=>{
     saleResult = resultVenta - (resultVenta*foreignTaxes)
    alert(`La ganancia neta de la venta que realizaste junto con la deduccion de impuestos es de $${saleResult}`)
}


// FUNCION QUE CALCULA IMPUESTOS QUE NOS HACEN POR UNA VENTA EN PAIS DE ORIGEN

const ivaTaxes = (resultVenta) =>{
     saleResult = resultVenta - (resultVenta*ivaTax)
    alert(`La ganancia neta de la venta realizada junto con la deduccion de impuestos nacionales es de $${saleResult}`)
}
