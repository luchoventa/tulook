$(()=>{   
    
            $("#formPago").append(
            `
            <form style="display:none" >
            <label for="text">Nombre <input type="text"></label>
            <label for="number">Numero de tarjeta <input type="number"></label>
            <label for="number">Vencimiento <input type="number"></label>
            <label for="number">Codigo de seguridad <input type="number"></label>
            
            <button id="comprar"  >comprar</button>
            </form>
        `   
        )
    
        $("#pagar").click(()=>{
            $("form").fadeIn("slow")
        })
        
    
    
    $("#comprar").click(()=>{
    alert("Su compra esta siendo procesada")
    localStorage.removeItem("carrito")
    document.getElementById("productosCarrito").innerHTML=" "
    document.getElementById("total").innerHTML=" "
    document.getElementById("iva").innerHTML=" "
    document.getElementById("cupon").innerHTML=" "
    document.getElementById("descuento").innerHTML=" "
    document.getElementById("carritoTotal").innerHTML=" "
})

}) 
