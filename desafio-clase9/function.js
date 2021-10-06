const nombre = document.getElementById("nombre");
const mail = document.getElementById("mail");
const materia = document.getElementById("materia");
const btn = document.getElementById("button");
const resultado = document.querySelector(".resultado")



const validarForm=()=>{
    let error= []
   if(nombre.value.length < 5){
       error[0]=true
       error[1]= "El nombre no puede contener menos de 5 caracteres"
       return error
   }else if(nombre.value.length > 40){
       error[0]= true;
       error[1]= `El nombre no puede contener mas de 40 caracteres`;
       return error
   }
   	else if(materia.value.length < 5 || materia.value.length >20){
           error[0]=true;
           error[1]=`Nombre de la materia incorrecto`
           return error
       }
       error[0]= false
    return error

}
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    error = validarForm()
    if(error[0]){
        resultado.innerHTML= error[1];
        resultado.classList.add("red");
    }
    else{
        resultado.innerHTML= `<p class="white">SOLICITUD ENVIADA CORRECTAMENTE</p>`
    }
})

