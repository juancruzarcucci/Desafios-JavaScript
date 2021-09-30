
const container = document.createElement("div");

const btn = document.getElementById("btn");
btn.addEventListener(`click`, handlerBtnSaludo);



const handlerBtnSaludo =()=>{
    let mensaje = `Hola Coder`;
   container.innerHTML= `<h1>${mensaje}</h1>`
   document.body.appendChild(container)
   
}
