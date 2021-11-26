
const productosVestidos=document.getElementById("productosVestidos")
for (const vestido of vestidos){
    let contenedorVestidos=document.createElement("div");
    contenedorVestidos.innerHTML=
    `<img src=${vestido.imagen} height=200px>
    <h5> Producto: ${vestido.nombre}</h5> 
    <h5> Talle: ${vestido.talle}
    <h6 > Precio: $ ${vestido.precio}</h6>
    <button class=addToCart> Lo quiero </button>
`
productosVestidos.appendChild(contenedorVestidos)
}

const productosZapatos=document.getElementById("productosZapatos")
for (const zapato of zapatos){
    let contenedorZapatos=document.createElement("div");
    contenedorZapatos.innerHTML=
    `<img src=${zapato.imagen} height=200px>
    <h5> Producto: ${zapato.nombre}</h5> 
    <h5> Talle: ${zapato.talle}
    <h6> Precio: $ ${zapato.precio}</h6>
    <button class=addToCartZ> Lo quiero </button>`
productosZapatos.appendChild(contenedorZapatos)
}

const productosAccesorios=document.getElementById("productosAccesorios")
for (const accesorio of accesorios){
    let contenedorAccesorios=document.createElement("div");
    contenedorAccesorios.innerHTML=
    `<img src=${accesorio.imagen} height=200px>
    <h5> Producto: ${accesorio.nombre}</h5> 
    <h5> Talle: ${accesorio.talle}
    <h6> Precio: $ ${accesorio.precio}</h6>
    <button class=addToCartA> Lo quiero </button>`
productosAccesorios.appendChild(contenedorAccesorios)
}

//btn vestidos//
let btnAddToCartV=document.getElementsByClassName("addToCart");

for (let i = 0; i < btnAddToCartV.length; i++) {
        btnAddToCartV[i].addEventListener("click",() => {
        agregarCarritoV(i)
    });
}
function agregarCarritoV(vestidosID){
    let itemCarritoV=vestidos.find((item=>item.id==vestidosID))

    carrito.push(itemCarritoV)
    mostrarCarrito();
}

//btn zapatos//
let btnAddToCartZ=document.getElementsByClassName("addToCartZ");

for (let i = 0; i < btnAddToCartZ.length; i++) {
        btnAddToCartZ[i].addEventListener("click",() => {
        agregarCarritoZ(4+i)
    });
}
function agregarCarritoZ(zapatosID){
    let itemCarritoZ=zapatos.find((itemz=>itemz.id==zapatosID))

    carrito.push(itemCarritoZ)
    mostrarCarrito()
}

//btn accesorios//

let btnAddToCartA=document.getElementsByClassName("addToCartA");

for (let i = 0; i < btnAddToCartA.length; i++) {
        btnAddToCartA[i].addEventListener("click",() => {
        agregarCarritoA(8+i)
    });
}
function agregarCarritoA(accesoriosID){
    let itemCarritoA=accesorios.find((itema=>itema.id==accesoriosID))

    carrito.push(itemCarritoA)
    mostrarCarrito()
}

