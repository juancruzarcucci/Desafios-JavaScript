let producto = prompt("que producto queres?")
let producto1 = prompt("que producto queres?")

const container = document.createElement("div");
container.classList.add("container")

document.body.appendChild(container);


for (let i = 0; i < 5; i++) {
    const div = document.createElement("div")
    div.classList.add("div")
    container.appendChild(div)

    const titulo = document.createElement("h1")
    titulo.classList.add("titulo")
    titulo.innerHTML=`Lo siento no tenemos ${producto}`;

    // const parrafo = document.createElement("p");
    // parrafo.innerHTML=`Pero te puedo ofrecer ${producto1}`
    
    
    div.appendChild(titulo)
    // div.appendChild(parrafo)

    div.innerHTML = `<h1>lo siento ${producto} no esta disponible</h1>`
    const parrafo = document.createTextNode(`pero te podemos ofrecer ${producto1}`)

    div.appendChild(parrafo)
}

