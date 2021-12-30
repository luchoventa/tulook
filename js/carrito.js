$(() => {
  infoCarrito = localStorage.getItem("carrito");
  infoCarrito = JSON.parse(infoCarrito);

  $("#cupon").append(`
        <input type=text id=cuponTipo>
        <button id=btnDescuento> Aplicar cupon </button>
    `);
    let precioTotal = 0;
    let iva = precioTotal * 0.21; 
    let descuento = 0;

    mostrarCarrito();
    precio();
    descuentoCupon();
    total();
    btnEliminar()
    
    function mostrarCarrito() {
      let carritoHTML = "<p>";
      for (const id in infoCarrito) {
        let producto = infoCarrito[id];
        carritoHTML += `<div id="carritoProductos" class="carritoProductos_${id}">
              <img src=.${producto.imagen} height=100px>
              <h5> ${producto.nombre}</h5> 
              <h5> Talle: ${producto.talle}</h5>
              <h6 > Precio: $ ${producto.precio}</h6>
              <button id="carrito_${id}"  class="borrar"> Eliminar </button>
              </div>`;
              precioTotal += producto.precio;
              
        }
        carritoHTML += "<p>";
        $("#productosCarrito").html(carritoHTML);
        btnEliminar()
        }
    
    
      function descuentoCupon() {
        $("#cuponTipo").change((e) => {
          if (e.target.value == "fiestas") {
            descuento = 100;
            $("#descuento").html(`descuento $ ${-descuento}`);
          } else if (e.target.value == "original") {
            descuento = 400;
            $("#descuento").html(`descuento $ ${-descuento}`);
          } else {
            descuento = 0;
            $("#descuento").html(`descuento $ ${-descuento}`);
          }
        });
        $("#btnDescuento").click(() => {
          descuentoCupon();
          total();
        });
      }
  
      function total() {
        $("#carritoTotal").html(
          `<b>Total a pagar:</b> $ ${precioTotal + precioTotal*0.21 - descuento}`
        );
      }
      function precio() {
          $("#total").html(`<b>Subtotal:</b> $ ${precioTotal}`);
          $("#iva").html(`<b>Iva:</b> $ ${precioTotal * 0.21}`);
        
        }
  

  
    function btnEliminar() {
    let borrar = $(".borrar");
      for (const btn of borrar) {
        btn.onclick = () => {
          localStorage.getItem("carrito");
          let id = $(btn).attr("id");
          const idNumber = parseInt(id.split("_")[1]);
          localStorage.removeItem(
            "carrito",
            carrito.splice(carrito.indexOf(idNumber), 1)
          );
          $(`.carritoProductos_${idNumber}`).remove();
        let carrito2 = JSON.stringify(carrito);
           localStorage.setItem("carrito", carrito2);  
            
        };

      }

  }
});
/* 
$(() => {
    infoCarrito = localStorage.getItem("carrito");
    infoCarrito = JSON.parse(infoCarrito);
  
    $("#cupon").append(`
          <input type=text id=cuponTipo>
          <button id=btnDescuento> Aplicar cupon </button>
      `);
      
      mostrarCarrito();
    
      function mostrarCarrito() {
      let precioTotal = 0;
      let iva = precioTotal * 0.21;
    
        let carritoHTML = "<p>";
        for (const id in infoCarrito) {
          let producto = infoCarrito[id];
          carritoHTML += `<div id="carritoProductos" class="carritoProductos_${id}">
                <img src=.${producto.imagen} height=150px>
                <h5> ${producto.nombre}</h5> 
                <h5> Talle: ${producto.talle}</h5>
                <h6 > Precio: $ ${producto.precio}</h6>
                <button id="carrito_${id}"  class="borrar"> Eliminar </button>
                </div>`;
                precioTotal += producto.precio;
          }
          carritoHTML += "<p>";
          $("#productosCarrito").html(carritoHTML);
          
      let descuento = 0;
        function descuentoCupon() {
          $("#cuponTipo").change((e) => {
            if (e.target.value == "fiestas") {
              descuento = 100;
              $("#descuento").html(`descuento $ ${-descuento}`);
            } else if (e.target.value == "original") {
              descuento = 400;
              $("#descuento").html(`descuento $ ${-descuento}`);
            } else {
              descuento = 0;
              $("#descuento").html(`descuento $ ${-descuento}`);
            }
          });
          $("#btnDescuento").click(() => {
            descuentoCupon();
            total();
          });
        }
    
        function total() {
          $("#carritoTotal").html(
            `Total a pagar: $ ${precioTotal + iva - descuento}`
          );
        }
        function precio() {
            $("#total").html(`Subtotal: $ ${precioTotal}`);
            $("#iva").html(`Iva: $ ${precioTotal * 0.21}`);
          }
    
        precio();
        btnEliminar();
        descuentoCupon();
        total();
      }
    
    
      function btnEliminar() {
      let borrar = $(".borrar");
        for (const btn of borrar) {
          btn.onclick = () => {
            localStorage.getItem("carrito");
            let id = $(btn).attr("id");
            const idNumber = parseInt(id.split("_")[1]);
            localStorage.removeItem(
              "carrito",
              carrito.splice(carrito.indexOf(idNumber), 1)
            );
            
         $(`.carritoProductos_${idNumber}`).remove();
         let carrito2 = JSON.stringify(carrito);
            localStorage.setItem("carrito", carrito2);  
         };
         
        }
  
    }
  });
  
   */