let carrito = [];

function guardarCarrito(){
    let carritoString=JSON.stringify(carrito);
    localStorage.setItem("carrito",carritoString)
    console.log("se ha guardado el carrito")
}
function verCarrito(){
    let carritoString= localStorage.getItem("carrito");
    let carritoDeCompra= JSON.parse(carritoString);
    console.log(carritoDeCompra)
    carrito=carritoDeCompra
}

function mostrarCarrito(){
    let contenedor=document.getElementById("carrito");
    let precioTotal=0
    contenedor.innerHTML="";
    
    htmlString= `<h2> Carrito </h2>
                                <ul>`;
    for(const id in carrito){
    let producto=carrito[id]
        htmlString+=
         `<li><img src=${producto.imagen} height=75px> ${producto.nombre} $ ${producto.precio}  
         </li>
         <button id=carrito_${id} class="borrar"> Eliminar </button>`

        
         precioTotal+=producto.precio;
    }
    htmlString+= `</ul>`

    
    contenedor.innerHTML=htmlString;
    let DivPrecio=document.getElementById("precio");
    DivPrecio.innerHTML=`TOTAL ${precioTotal}`

    let divIva=document.getElementById("iva")
    divIva.innerHTML=`IVA $ ${precioTotal*0.21}`
    
    let cuponTipo=document.getElementById("cuponTipo")
    let btnDescuento=document.getElementById("cupon")
    let descuento=0

    const descuentoDiv=document.getElementById("descuentoDiv")
    function descuentoCupon(){
        if(cuponTipo.value==="fiestas"){
            descuentoCompra=100
            let descuentoCompraDiv=document.createElement("div");
            descuentoCompraDiv.innerHTML=`- $100`
            descuentoDiv.appendChild(descuentoCompraDiv)
            descuento+=descuentoCompra
        }else if(cuponTipo.value==="original"){
             descuentoCompra=400
             let descuentoCompraDiv=document.createElement("div");
             descuentoCompraDiv.innerHTML=`- $400`
             descuentoDiv.appendChild(descuentoCompraDiv)
             descuento+=descuentoCompra
        } else{
            descuentoCompra=0
            let descuentoCompraDiv=document.createElement("div");
            descuentoCompraDiv.innerHTML=`0`
            descuentoDiv.appendChild(descuentoCompraDiv)
            descuento+=descuentoCompra
        }
    }
    
    btnDescuento.addEventListener("click", () => { 
        descuentoCupon ()
        let subTotal=document.getElementById("total");

    subTotal.innerHTML=`TOTAL ${precioTotal*1.21-descuento}`
     eliminarElemento()

    })

    
    
}
function eliminarElemento() {
    let btnEliminar=document.getElementsByClassName("borrar");

    for  (const boton of btnEliminar){
        boton.onclick= ()=>{
        let id=boton.getAttribute("id");
        idNumber=id.split("_")[1];
        carrito.splice(idNumber,1)
        
        mostrarCarrito()
        }
    }
}


let btnComprar=document.getElementById("comprar");
btnComprar.innerHTML= `<button>Comprar</button>`
btnComprar.addEventListener("click",()=>{ 
     alert("Su compra esta siendo procesada")
     document.getElementById("carrito").innerHTML=""
     document.getElementById("precio").innerHTML=""
     document.getElementById("iva").innerHTML=""
     document.getElementById("descuentoDiv").innerHTML=""
     document.getElementById("total").innerHTML=""
     carrito.splice(0,carrito.length)
})



