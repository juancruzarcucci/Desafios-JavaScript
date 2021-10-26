const URLJSON = "data/datos.json"

$("body").prepend(`<button id="buton">get info</button>`)

$("#buton").on("click", ()=>{
$.getJSON(URLJSON, function(result, state){
    if(state == "success"){
        let misDatos = result;
        for (const dato of misDatos) {
            $("body").append(`
            <div>
            <h2>${dato.nombre}</h2>
            <p>${dato.precio}</p>
            <div class="box">
            <img src="${dato.imagen}.jpg" class="img">
            </div>
            </div>`)
        }
    }
})
})