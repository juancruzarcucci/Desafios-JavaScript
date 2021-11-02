
const URLJSON = "/proyecto-final/deposito/productos.json"


$.getJSON(URLJSON, function (result, state){
    if(state == "success"){
        const showCards=()=>{
            let misProductos = result;
            // iteracion sobre el array de objetos
            for (const producto of misProductos) {
        
                const newProduct= `<div class="flex-item flex-item${producto.id}">
                <h2 class="item-name"><b>${producto.nombre}</b></h2>
                <div class="img-container"><img src="${producto.imagen}.jpg" class="img" alt=""></div>
                <p class="flex-text flex-price">PRECIO <b>$${producto.precio}</b></p><br>
                <div  id="div-info${producto.id}" >
                <input type="button" id="infoButton${producto.id}" class="button" value="info"> <br>
                </div>
                <p class="flex-text">SELECCIONE CANTIDAD</p><input type="number" class="cantidad" id="cantidad${producto.id}"> <br>
                <input type="button" id="button${producto.id}" class="button" value="COMPRAR">
                </div>`
        
                $(".container").append(newProduct);
        
                //    CREO DIV INFO PARA EL BOTON TOGGLE
            $(`#div-info${producto.id}`).append(
                `<div class="info" id="info${producto.id}">
            <p>${producto.info}</p>
            </div>`)
        
            // BOTON TOGGLE PARA DESPLEGAR INFO
            $(`#infoButton${producto.id}`).on("click",(e)=>{
                $(`#info${producto.id}`).toggle("fast")
            })
        
            }
        }
        showCards()
    }
})

// FUNCION QUE NO PERMITE LE INDICA AL CLIENTE QUE NO ESTA INDICANDO UNA CANTIDAD DE PARES PARA REALIZAR LA COMPRA
const qtyValidator=(qty)=>{
    // console.log(qty)
    if ( qty == "" || qty== 0) {
        return true
    }
}
// FUNCION QUE VALIDA SI HAY CANTIDAD EN STOCK DEL PRODUCTO SELECCIONADO
const stockValidator=(qty, stock)=>{
    if (qty > stock) {
     return true   
    }
}

$.getJSON(URLJSON, function (result, state){
    if(state == "success"){
        console.log("andamo bien")
        const ejecutarCompra = ()=>{
            let misProductos = result;
            for (const producto of misProductos) {
                // LLAMADA AL INPUT QUE INDICA CANTIDAD 
                let qty = document.getElementById(`cantidad${producto.id}`);
        
                let stock = (`${producto.stock}`);
                
        
                  // FUNCION DE BOTON COMPRA
            $(`#button${producto.id}`).on("click",()=>{
        
               if ( qtyValidator(`${qty.value}`)) {
                $(`.flex-item${producto.id}`).append(
                    ` <p class="aviso-cantidad">Lo siento, tienes que indicar una cantidad para realizar la compra</p>`)
               }
               else if(stockValidator(`${qty.value}`, `${producto.stock}`)){
                $(`.flex-item${producto.id}`).append(
                    ` <p class="aviso-cantidad">Lo siento, no tenemos stock suficiente del producto que indicas</p>`)
               }
               else{
                   $(".aviso-cantidad").css("display", "none");
        
                    stock -= (`${qty.value}`);
        
        
                   let montoXCompra = (producto.precio*qty.value);
                   montoAPagar += montoXCompra;
           
                   detalle1 = [`Compraste:
                   -Nombre producto: ${producto.nombre} <br>
                   -Cantidad producto: ${qty.value}<br>
                   -Precio producto: $${producto.precio}<br>
                   <br><br>
                   `];
           
                   msjModal += detalle1;
                   mensaje += `El precio final es de: <b>$${montoAPagar}</b>`
           
                   carritoDeCompras.push(msjModal);
                   newCarrito = carritoDeCompras.pop(0);
           
           
           
                    console.log(newCarrito);
        
                    // FUNCION DEL BOTON QUE DESPLIEGA UN MODAL CON EL DETALLE DE LAS COMPRAS Y PRECIO TOTAL
                    $(`#btnCarritoDeCompras`).on("click", ()=>{
                       $(".modal").fadeIn("slow");  
                   })
                   $(`body`).append(`
                   <div class="modal"><div class="modal-child">
                   <h3 class="modal-tittle">FELICITACIONES, TU COMPRA SE EFECTUÓ CORRECTAMENTE</h3>
                   <div class="modal-preg">
                        <p class="modal-text">${newCarrito}</p>
                        <p class = "monto-a-pagar">El precio total de la compra es de:<b> $${montoAPagar}</b></p>
                       <button class="modal-ok"><a href="compraonline.html" class="ok">OK</a></button>
                   </div></div>`)
               }
                
            
            }
            );
            }
        
        
               
            }
            ejecutarCompra()
    }
})
// $.getJSON(URLJSON, function(result,state){
// if (state == "success") {
//     let misProductos = result;
//     const showCards=()=>{
//         // iteracion sobre el array de objetos
//         for (const producto of misProductos) {
    
//             const newProduct= `<div class="flex-item flex-item${producto.id}">
//             <h2 class="item-name"><b>${producto.nombre}</b></h2>
//             <div class="img-container"><img src="${producto.imagen}.jpg" class="img" alt=""></div>
//             <p class="flex-text flex-price">PRECIO <b>$${producto.precio}</b></p><br>
//             <div  id="div-info${producto.id}" >
//             <input type="button" id="infoButton${producto.id}" class="button" value="info"> <br>
//             </div>
//             <p class="flex-text">SELECCIONE CANTIDAD</p><input type="number" class="cantidad" id="cantidad${producto.id}"> <br>
//             <input type="button" id="button${producto.id}" class="button" value="COMPRAR">
//             </div>`
    
//             $(".container").append(newProduct);
    
//              //    CREO DIV INFO PARA EL BOTON TOGGLE
//         $(`#div-info${producto.id}`).append(
//             `<div class="info" id="info${producto.id}">
//         <p>${producto.info}</p>
//         </div>`)
       
//         // BOTON TOGGLE PARA DESPLEGAR INFO
//         $(`#infoButton${producto.id}`).on("click",(e)=>{
//             $(`#info${producto.id}`).toggle("fast")
//         })
       
//         }
//     }
//     showCards()
// }
// })

