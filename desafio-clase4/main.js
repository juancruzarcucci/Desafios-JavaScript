

    // let newTransaction = prompt(`Indique si realizamos una Compra o una Venta, si desea salir presione "ESC"`)
do {
    let transaction = prompt(`Indique si realizamos una Compra o una Venta, si desea salir presione "ESC"`)
    switch(transaction) {
        case "Compra":
            alert("Realizaste una compra, vamos a proceder a calcular el costo")
            
            let qtyPurchase = parseInt(prompt("Cantidad de mercaderia que compras?")) 
            let purchase = parseInt(prompt("Indica el monto de la compra"))
            
            priceCalculator(qtyPurchase, purchase)
            let  resultCompra = qtyPurchase*purchase
            
            let purchaseTaxes = prompt("La compra fue realizada en el Exterior o en su mismo pais?")
            if (purchaseTaxes == "Exterior") {
                
                taxesCalulator(resultCompra)
                 balance =- result ;
                
            }else{
                
                ivaCalculator(resultCompra)
                 balance =- result ;
            }
            break;
            
            case "Venta":
                alert("Realizaste una venta, vamos a proceder a calcular el ingreso")
                
                let qtySale = parseInt(prompt("Cantidad de mercaderia que vendiste?")) 
                let sale = parseInt(prompt("Indica el monto de la venta"))
                
                priceCalculator(qtySale, sale)
               let resultVenta = qtySale*sale
                
                let saleTaxes = prompt("La venta fue realizada en el Exterior o en su mismo pais?")
                if (saleTaxes == "Exterior") {
                    
                    saleTax(resultVenta)
                     balance =+ saleResult ;
                }else{
                    
                    ivaTaxes(resultVenta)
                     balance =+ saleResult ;
                }
                break;
                
                case "ESC":
                    alert("Decidiste no comprar nada, que tengas un buen dia")
                    break;
                }

              respond = prompt(`Si deseas salir escribí el comando "ESC", si no escribe cualquier letra/palabra y continuemos`)
                if (respond == "ESC") {
                    alert(balance)
                    
                }
            } while (respond != "ESC");
  
                    
           
            