let edad = prompt("Que edad tienes?")

edad= parseInt(edad)


if(edad < 18){
    alert(`Lo siento tenes ${edad} años, sos menor de edad, no podes pasar`)
}
else if (edad > 35) {
    alert(`Tenes ${edad} años!! Sos muy grande para este lugar`)
} else {
    alert(`Como tenes ${edad} años, y estas dentro del rango, podes pasar`)
}

// document.write(edad)