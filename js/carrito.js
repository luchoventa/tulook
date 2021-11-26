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
    for(const producto of carrito){
        htmlString+= `<li> ${producto.nombre} $ ${producto.precio}</li>`
        precioTotal+=producto.precio;
    }
    htmlString+= `</ul>`
    
    contenedor.innerHTML=htmlString;
    let DivPrecio=document.getElementById("precio");
    DivPrecio.innerHTML=`TOTAL ${precioTotal}`
}

let btnComprar=document.getElementById("comprar");
btnComprar.innerHTML= `<button>Comprar</button>`
btnComprar.addEventListener("click",()=>{ 
     alert("Su compra esta siendo procesada")
     document.getElementById("carrito").innerHTML=""
     document.getElementById("precio").innerHTML=""
    
})


