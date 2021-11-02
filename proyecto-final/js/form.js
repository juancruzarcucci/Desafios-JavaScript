let nombre = document.getElementById("inputNombre");
let form = document.querySelector(".form")
let email = document.getElementById("inputEmail");
let button = document.getElementById("buttonForm")


// FUNCION PARA VALIDAR EL NOMBRE DEL FORM. SI ESTA CORRECTO DEVUELVE UN TRUE. EN CASO DE QUE NO DEVUELVE UN PARRAFO INDICANDOLO.
const nombreValidator=()=>{

        if (nombre.value.length > 4 && nombre.value.length < 40) {
            return true
        }
        else{
            $(".form").append(`<p class="red">Lo siento el nombre ingresado no es correcto</p>`)
        }
}
// FUNCION PARA VALIDAR EL EMAIL DEL FORM. SI ESTA CORRECTO DEVUELVE UN TRUE. EN CASO DE QUE NO DEVUELVE UN PARRAFO INDICANDOLO.
const emailValidator=()=>{
    
        if ( (email.value.includes("@hotmail") || email.value.includes("@gmail")) && email.value.length >5) {
          
           
            return true
        }
        else{
            $(".form").append(`<p class="red">Lo siento el email ingresado no es correcto</p>`)
        }

}

// FUNCION PARA ENVIAR EL FORM. EL IF CONTIENE LAS VALIDACIONES DE LAS FUNCIONES ANTERIORES. ALMACENA LOS DATOS EN EL STORAGE PARA QUE QUEDEN GUARDADOS
const sendForm=()=>{

    $(button).on("click",()=>{
        if (nombreValidator() && emailValidator() ) {
            localStorage.setItem("nombre: " , nombre.value)
            localStorage.setItem("email: " , email.value)
            $(".form").append(`<p class="green">Solicitud enviada correctamente</p>`)
        }
    
    })
    
}

// LLAMO A LA FUNCION SEND FORM
sendForm()