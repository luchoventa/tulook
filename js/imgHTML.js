let infoCarrito=localStorage.getItem("carrito")
let carrito = [];

 if(infoCarrito)
 carrito=JSON.parse(infoCarrito)



 function carritoNumero(){
     $("#qCarrito").html(carrito.length)
 }

 function guardarCarrito(compra){
 carrito.push(compra)
 let carritoString=JSON.stringify(carrito);
 localStorage.setItem("carrito",carritoString)

 carritoNumero()}

 function guardarCarrito2(){
             let carritoString=JSON.stringify(carrito);
     localStorage.setItem("carrito",carritoString)
 
     carritoNumero()}

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
    
      $(`#producto${vestido.id}`).click(()=>guardarCarrito(vestido)) 

     
 }
 
 for (const zapato of zapatos){
     $("#productosZapatos").append(
         `<div> <img src=${zapato.imagen} height=200px>
         <h5> Producto: ${zapato.nombre}</h5> 
         <h5> Talle: ${zapato.talle}
         <h6> Precio: $ ${zapato.precio}</h6>
         <button id="producto${zapato.id}" > Lo quiero </button></div>`
     )
     $(`#producto${zapato.id}`).click(()=>guardarCarrito(zapato))
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
     $(`#producto${accesorio.id}`).click(()=>guardarCarrito(accesorio))
 }
 
})