let infoCarrito=localStorage.getItem("carrito")
let precioTotal=0
let carrito = [];

 if(infoCarrito)
 carrito=JSON.parse(infoCarrito)

 let carritoHTMLdrop="<li>";

 function carritoNumero(){
     $("#qCarrito").html(carrito.length)
     $("#qCarritoBtn").html(carrito.length)
 }
 
 
 function guardarCarrito(compra){
 carrito.push(compra)
 let carritoString=JSON.stringify(carrito);
 localStorage.setItem("carrito",carritoString)

 carritoNumero()
 
 
 }

 function guardarCarrito2(){
             let carritoString=JSON.stringify(carrito);
     localStorage.setItem("carrito",carritoString)
     carritoNumero()
    }
     
 $(()=> {
     carritoNumero()
    
 for (const vestido of vestidos){ 
     $("#productosVestidos").append(
         `<div>
         <img src=${vestido.imagen} height=200px>
         <h5> Producto: ${vestido.nombre}</h5> 
         <h5> Talle: ${vestido.talle}
         <h6 > Precio: $ ${vestido.precio}</h6>
         <button id="producto${vestido.id}" > Lo quiero </button>
     </div>`
     )
    
      $(`#producto${vestido.id}`).click(()=>{
        $("#dropdownCart").append(
            `
             <h6 > ${vestido.nombre}</h6> 
             <p > $ ${vestido.precio}</p>
             `)
        guardarCarrito(vestido)
        
        }) 
    
     
 }
 
 for (const zapato of zapatos){
     $("#productosZapatos").append(
         `<div> <img src=${zapato.imagen} height=200px>
         <h5> Producto: ${zapato.nombre}</h5> 
         <h5> Talle: ${zapato.talle}
         <h6> Precio: $ ${zapato.precio}</h6>
         <button id="producto${zapato.id}" > Lo quiero </button></div>`
     )
     $(`#producto${zapato.id}`).click(()=>{
        $("#dropdownCart").append(
           `
            <h6 > ${zapato.nombre}</h6> 
            <p > $ ${zapato.precio}</p>
            `)
         guardarCarrito(zapato)})
 }
 
 for (const accesorio of accesorios){
     $("#productosAccesorios").append(
         `<div>
         <img src=${accesorio.imagen} height=200px>
         <h5> Producto: ${accesorio.nombre}</h5> 
         <h5> Talle: ${accesorio.talle}
         <h6> Precio: $ ${accesorio.precio}</h6>
         <button id="producto${accesorio.id}" > Lo quiero </button> </div>`
     )
     $(`#producto${accesorio.id}`).click(()=>{
        $("#dropdownCart").append(
            `
             <h6 > ${accesorio.nombre}</h6> 
             <p > $ ${accesorio.precio}</p>
             `)

         guardarCarrito(accesorio)})
 }
$("#eliminar").click(()=>{
    localStorage.removeItem("carrito")
    document.getElementById("dropdownCart").innerHTML=""
    document.getElementById("qCarritoBtn").innerHTML=""
    document.getElementById("qCarrito").innerHTML=""

    alert("esta eliminando el carrito")
    location.reload()
})
})



