

$(`body`).append(`<div class="container">container</div>`)
$(`body`).append(`<button class= "btn" id="btn-1">Slide Up</button>`)
$(`body`).append(`<button class= "btn" id="btn-2">Slide Down</button>`)
$(`body`).append(`<button class= "btn" id="btn-3">Slide Toggle</button>`)

$(`#btn-1`).click(()=>{
    $(`.container`).slideUp(`fast`);
})
$(`#btn-2`).click(()=>{
    $(`.container`).slideDown(`slow`);
})
$(`#btn-3`).click(()=>{
    $(`.container`).toggle(`slow`);
})



