$(()=>{
    infoCarrito=localStorage.getItem("carrito")
    infoCarrito=JSON.parse(infoCarrito)

    let precioTotal=0
    
    mostrarCarrito2()

    function mostrarCarrito2(){ 
        let carritoHTML="<p>";
        for (const id in infoCarrito){ 
            let producto=infoCarrito[id]
            carritoHTML+=
             `<div id="carritoProductos" class="carritoProductos_${id}" style="display:hidden">
            <h5> ${producto.nombre}</h5> 
            <h6 > Precio: $ ${producto.precio}</h6>
            </div>`
            carritoHTML+="<p>"
            $("#pSeleccionados").html(carritoHTML)
            precioTotal+=producto.precio; 
            
        }
         
                     
     }

    $("#verCarrito").click(()=> { 
          $("#pSeleccionados").toggle("slow")
          
     })
    } )

