let infoCarrito=localStorage.getItem("carrito")
let precioTotal=0
let carrito = [];

 if(infoCarrito)
 carrito=JSON.parse(infoCarrito)

 

 function carritoNumero(){
     $("#qCarrito").html(carrito.length)
     $("#qCarritoBtn").html(carrito.length)
 }

 function dropdown () { 
    let carritoDropDown = "<li>";
    localStorage.getItem("carrito")
    for (const id in carrito) {
      let producto = carrito[id];
      carritoDropDown += `<li>
            <h5> ${producto.nombre}</h5> 
            <h6 > Precio: $ ${producto.precio}</h6>
            </li>`;
          }
          carritoDropDown += "</li>"
          $("#dropdownCart").html(carritoDropDown);
}

 
 function guardarCarrito(compra){
 carrito.push(compra)
 let carritoString=JSON.stringify(carrito);
 localStorage.setItem("carrito",carritoString)

 carritoNumero()
 dropdown ()
 
 }

 function guardarCarrito2(){
    let carritoString=JSON.stringify(carrito);
    localStorage.setItem("carrito",carritoString)
     carritoNumero()
     dropdown ()
    }
     
 $(()=> {
     carritoNumero()
     dropdown ()
 for (const vestido of vestidos){ 
     $("#productosVestidos").append(
         `<div>
         <img src=${vestido.imagen} height=200px>
         <h5> <b> Producto: </b> ${vestido.nombre}</h5> 
         <h5><b> Talle: </b> ${vestido.talle}
         <h6 > <b>Precio:  </b> $ ${vestido.precio}</h6>
         <button id="producto${vestido.id}" > Lo quiero </button>
     </div>`
     )
    
      $(`#producto${vestido.id}`).click(()=>{
        guardarCarrito(vestido)
        }) 
    
     
 }
 
 for (const zapato of zapatos){
     $("#productosZapatos").append(
         `<div> <img src=${zapato.imagen} height=200px>
         <h5> <b> Producto: </b> ${zapato.nombre}</h5> 
         <h5> <b> Talle: </b> ${zapato.talle}
         <h6> <b> Precio: </b> $  ${zapato.precio}</h6>
         <button id="producto${zapato.id}" > Lo quiero </button></div>`
     )
     $(`#producto${zapato.id}`).click(()=>{
                guardarCarrito(zapato)})
 }
 
 for (const accesorio of accesorios){
     $("#productosAccesorios").append(
         `<div>
         <img src=${accesorio.imagen} height=200px>
         <h5><b> Producto  :</b> ${accesorio.nombre}</h5> 
         <h5> <b> Talle :</b> ${accesorio.talle}
         <h6><b> Precio :</b> $ ${accesorio.precio}</h6>
         <button id="producto${accesorio.id}" > Lo quiero </button> </div>`
     )
     $(`#producto${accesorio.id}`).click(()=>{
     guardarCarrito(accesorio)})
 }



$("#eliminar").click(()=>{
    
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Seguro que quiere borrar el carrito?',
    text: "Una vez borrado no se podra recuperar",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Borrar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Tu carrito ha sido borrado',
        'success')
        carrito = [];
        localStorage.removeItem("carrito");
        document.getElementById("dropdownCart").innerHTML=""
        document.getElementById("qCarritoBtn").innerHTML=0
        document.getElementById("qCarrito").innerHTML=0
      
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Tu carrito esta guardado',
        'error'
      )
    }
  })

})
})


