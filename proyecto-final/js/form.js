let nombre = document.getElementById("inputNombre");
let form = document.querySelector(".form")
let email = document.getElementById("inputEmail");
let button = document.getElementById("buttonForm")

const nombreValidator=()=>{

        if (nombre.value.length > 4 && nombre.value.length < 40) {
            return true
        }
        else{
            $(".form").append(`<p class="red">Lo siento el nombre ingresado no es correcto</p>`)
        }
}
const emailValidator=()=>{
    
        if ( (email.value.includes("@hotmail") || email.value.includes("@gmail")) && email.value.length >5) {
          
           
            return true
        }
        else{
            $(".form").append(`<p class="red">Lo siento el email ingresado no es correcto</p>`)
        }

}

const sendForm=()=>{

    $(button).on("click",()=>{
        if (nombreValidator() && emailValidator() ) {
            sessionStorage.setItem("nombre: " , nombre.value)
            sessionStorage.setItem("email: " , email.value)
            $(".form").append(`<p class="green">Solicitud enviada correctamente</p>`)
        }
    
    })
    
}


sendForm()