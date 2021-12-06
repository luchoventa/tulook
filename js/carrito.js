

 $(()=>{
    infoCarrito=localStorage.getItem("carrito")
    infoCarrito=JSON.parse(infoCarrito)
    
    $("#cupon").append(`
        <input type=text id=cuponTipo>
        <button id=btnDescuento> Aplicar cupon </button>
    `)
    let precioTotal=0
    let iva=precioTotal*0.21
    let descuento=0
    
    mostrarCarrito()

    function mostrarCarrito(){ 
    let carritoHTML="<p>";
        for (const id in infoCarrito){ 
            let producto=infoCarrito[id]
            carritoHTML+=
             `<div id="carritoProductos" class="carritoProductos_${id}">
            <img src=.${producto.imagen} height=150px>
            <h5> ${producto.nombre}</h5> 
            <h5> Talle: ${producto.talle}</h5>
            <h6 > Precio: $ ${producto.precio}</h6>
            <button id="carrito_${id}"  class="borrar"> Eliminar </button>
            </div>`
            carritoHTML+="<p>"
            $("#productosCarrito").html(carritoHTML)
            precioTotal+=producto.precio; 
        }
    
    let descuento= 0
    function descuentoCupon(){ 
            $("#cuponTipo").change((e)=>{
            if(e.target.value=="fiestas"){
            descuento=100
            $("#descuento").html(`descuento $ ${-descuento}`)
            }else if(e.target.value=="original"){
            descuento=400
            $("#descuento").html(`descuento $ ${-descuento}`)
            }else{
            descuento=0
            $("#descuento").html(`descuento $ ${-descuento}`)
            }
            })
                $("#btnDescuento").click(()=>{ descuentoCupon()
                     total()})
            
            } 
    
    let iva=precioTotal*0.21
    function precio(){ 
            $("#total").html(`Subtotal: $ ${precioTotal}`);
            $("#iva").html (`Iva: $ ${iva}`)
        }
    
    function total(){
            $("#carritoTotal").html(`Total a pagar: $ ${precioTotal+iva-descuento}`)
        }
    
    precio()
    btnEliminar()
    descuentoCupon()
    total()
    
    }
    
    function btnEliminar() {  
        let borrar=document.getElementsByClassName("borrar")
        for  (const btn of borrar){
            btn.onclick=()=>{ 
            localStorage.getItem("carrito")
            let id=btn.getAttribute("id");
            idNumber=id.split("_")[1];
            localStorage.removeItem("carrito",carrito.splice(idNumber,1))
            let carrito2=JSON.stringify(carrito)
            localStorage.setItem("carrito",carrito2)
            $(`.carritoProductos_${idNumber}`).remove()
            location.reload()
        }   
            }
      
    } 
    
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
