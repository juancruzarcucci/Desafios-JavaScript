$("body").append(`<div class="container"></div>`)

// $(`body`).append(`<div class="modal"><div class="modal-child">
// <h3 class="modal-tittle">FELICITACIONES, TU COMPRA SE EFECTUÓ CORRECTAMENTE</h3>
// <div class="modal-preg">
//     <p class="modal-text">Detalle de la compra:
//     ${newCarrito}</p>
//     <button class="modal-ok"><a class="ok" href="index.html">OK</a></button>
// </div></div>`)

const showMenu=()=>{


    for (const producto of productos) {

        const newProduct =`<div class="flex-item flex-item${producto.id}">
    <h2 class="item-name"><b>${producto.nombre}</b></h2>
    <div class="img-container"><img src="${producto.imagen}.jpg" class="img" alt=""></div>
    <p class="flex-text flex-price">PRECIO <b>$${producto.precio}</b></p><br>
    <div class="div-info${producto.id}" >
    <input type="button" id="infoButton${producto.id}" class="button" value="info"> <br>
    </div>
    <p class="flex-text">SELECCIONE CANTIDAD</p><input type="number" class="cantidad" id="cantidad${producto.id}"> <br>
    <input type="button" id="button${producto.id}" class="button" value="COMPRAR">
    </div>`

    // container.innerHTML += newProduct;
    $(".container").append(newProduct);
    let qty = document.getElementById(`cantidad${producto.id}`);

    
    $(`.div-info${producto.id}`).append(
        `<div class="info">
    <p>${producto.info}</p>
    </div>`)
    $(` body`).on("scroll",()=>{
        console.log("hoola")
        $(`.flex-item${producto.id}`).animate({"top":"+=50px"}, "fast", "linear")
    })

    $(`#infoButton${producto.id}`).on("click",()=>{
        
        $(".info").toggle("fast")
    })

    $(`#button${producto.id}`).on("click",()=>{
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
        // console.log(carritoDeCompras);
         console.log(newCarrito);
         $(`#btnCarritoDeCompras`).on("click", ()=>{
            $(".modal").fadeIn("slow");  
        })
        $(`body`).append(`<div class="modal"><div class="modal-child">
        <h3 class="modal-tittle">FELICITACIONES, TU COMPRA SE EFECTUÓ CORRECTAMENTE</h3>
        <div class="modal-preg">
             <p class="modal-text">${newCarrito}</p>
             <p class = "monto-a-pagar">El precio total de la compra es de $:<b>${montoAPagar}</b></p>
            <button class="modal-ok"><a href="index.html" class="ok">OK</a></button>
        </div></div>`)

    });
    }
    
}


showMenu()

