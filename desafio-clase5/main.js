alert(`Bienvenido a Air Sneakers`)

do {
    let venta = parseInt(prompt(menu))
    if (venta === 5) {
        break
    }
    let cantidad = parseInt(prompt(preguntarCantidad))
    
    agregarAlCarro(venta, cantidad)

  respuesta = prompt(`Desea seguir comprando? Si/No`)
    
} while (respuesta == "Si");



alert(`El monto a pagar es de $${montoAPagar}`)


