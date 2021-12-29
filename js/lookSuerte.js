let talleVestido=document.getElementById("talle");
let talleZapato=document.getElementById("talleZapato");
let accesoriosSi=document.getElementById("accesoriosSi");

let miFormulario=document.getElementById("formulario")
let suma=0
let suerte=[]

function UperCase() {
    talleVestido.value=talleVestido.value.toUpperCase()
}
    


function formularioSuerte(event){ 
    event.preventDefault();

    const accesoriosSuerte=document.getElementById("accesoriosSuerte")
    if (accesoriosSi.checked){
        let accesoriosSuertePop = accesorios[Math.floor(Math.random()*accesorios.length)];
        let accesoriosSuerteDiv=document.createElement("div");
        accesoriosSuerteDiv.innerHTML=
        `<h4> Accesorio: </h4>
        <h5> <b>Nombre:</b> ${accesoriosSuertePop.nombre}</h5>
       <h6> <b> Precio: </b> $${accesoriosSuertePop.precio}</h5>
        <img src=${accesoriosSuertePop.imagen} height=200px>`
        suma+= accesoriosSuertePop.precio
        accesoriosSuerte.appendChild(accesoriosSuerteDiv)
        suerte.push(accesoriosSuertePop)
    } else{
    }

const vestidoSuerte=document.getElementById("vestidoSuerte")
function vestidoLook() { 
    UperCase()
    let vestidoSuerteDiv=document.createElement("div")
if (talleVestido.value=="S"){
    let vestidoSuerteS=vestidos.find(vSuerteS=> vSuerteS.talle =="S");

    vestidoSuerteDiv.innerHTML = 
    `<h4> Vestido: </h4>
    <h5> <b> Producto: </b> ${vestidoSuerteS.nombre}</h5> 
    <h6><b> Precio:</b> $ ${vestidoSuerteS.precio}</h6>
    <img src=${vestidoSuerteS.imagen} height=200px>`
    suma+= vestidoSuerteS.precio
    vestidoSuerte.appendChild(vestidoSuerteDiv)
    suerte.push(vestidoSuerteS)
}else if (talleVestido.value=="M"){
    let vestidoSuerteM=vestidos.find(vSuerteM=> vSuerteM.talle =="M");

    vestidoSuerteDiv.innerHTML = 
    `<h4> Vestido: </h4>
    <h5><b> Producto:</b> ${vestidoSuerteM.nombre}</h5> 
    <h6><b> Precio:</b> $ ${vestidoSuerteM.precio}</h6>
    <img src=${vestidoSuerteM.imagen} height=200px>
    `
    suma+= vestidoSuerteM.precio
    vestidoSuerte.appendChild(vestidoSuerteDiv)
    suerte.push(vestidoSuerteM)
}else if (talleVestido.value=="L"){
    let vestidoSuerteL=vestidos.find(vSuerteM=> vSuerteM.talle =="L");

    vestidoSuerteDiv.innerHTML = 
    `<h4> Vestido: </h4>
    <h5><b> Producto:</b> ${vestidoSuerteL.nombre}</h5> 
    <h6><b> Precio:</b> $ ${vestidoSuerteL.precio}</h6>
    <img src=${vestidoSuerteL.imagen} height=200px>
    `
    suma+= vestidoSuerteL.precio
    vestidoSuerte.appendChild(vestidoSuerteDiv)
    suerte.push(vestidoSuerteL)
}else if (talleVestido.value=="XS"){
    let vestidoSuerteXS=vestidos.find(vSuerteM=> vSuerteM.talle =="XS");

    vestidoSuerteDiv.innerHTML = 
    `<h4> Vestido: </h4>
    <h5><b> Producto:</b> ${vestidoSuerteXS.nombre}</h5> 
    <h6><b> Precio:</b> $ ${vestidoSuerteXS.precio}</h6>
    <img src=${vestidoSuerteXS.imagen} height=200px>
    `
    suma+= vestidoSuerteXS.precio
    vestidoSuerte.appendChild(vestidoSuerteDiv)
    suerte.push(vestidoSuerteXS)
} else if(talleVestido.value==""){
    let vacio=document.createElement("p")
    vacio.innerHTML= ``
    vestidoSuerte.appendChild(vacio)
}
 else{
    let sinTalle=document.createElement("p")
    sinTalle.innerHTML= `No tenemos su talle talle`
    vestidoSuerte.appendChild(sinTalle)
}
}
vestidoLook();

const zapatoSuerte =document.getElementById("zapatoSuerte")
function zapatoLook() { 
    let zapatoDiv=document.createElement("div");
switch (talleZapato.value){
    case "35":
        let zapato35=zapatos.find(z35=>z35.talle =="35");

        zapatoDiv.innerHTML=
        `<h4> Zapatos: </h4>
        <h5> <b>Modelo:</b> ${zapato35.nombre}</h5>
        <h6><b> Precio:</b> ${zapato35.precio} </h6>
        <img src= ${zapato35.imagen} height=200px>`
        suma+= zapato35.precio
        zapatoSuerte.appendChild(zapatoDiv);
        suerte.push(zapato35)
        break;
    case "38":
        let zapato38=zapatos.find(z38=>z38.talle =="38");
        zapatoDiv.innerHTML=
        `<h4> Zapatos: </h4>
        <h5> <b>Modelo:</b> ${zapato38.nombre}</h5>
        <h6><b> Precio:</b> ${zapato38.precio} </h6>
        <img src= ${zapato38.imagen} height=200px>`
        suma+= zapato38.precio
        zapatoSuerte.appendChild(zapatoDiv);
        suerte.push(zapato38)
        break;   
    case "39":
        let zapato39=zapatos.find(z39=>z39.talle =="39");
        zapatoDiv.innerHTML=
        `<h4> Zapatos: </h4>
        <h5><b> Modelo:</b> ${zapato39.nombre}</h5>
        <h6><b> Precio:</b> ${zapato39.precio} </h6>
        <img src= ${zapato39.imagen} height=200px>`
        suma+= zapato39.precio
        zapatoSuerte.appendChild(zapatoDiv);
        suerte.push(zapato39)
        break;
    case "":
        let sinZapatoVacio=document.createElement("p");
        sinZapatoVacio.innerHTML= ``
        zapatoSuerte.appendChild(sinZapatoVacio);
      break;
    default:
        let sinZapato=document.createElement("p");
        sinZapato.innerHTML= `lo sentimos no tenemos tu talle`
        zapatoSuerte.appendChild(sinZapato);
      break;
    }  
 }
zapatoLook()
miFormulario.reset()
}
miFormulario.addEventListener("submit", formularioSuerte)

let reservarLook= document.getElementById("reservarLook");
let reservarLookBoton=document.createElement("div");
    reservarLookBoton.innerHTML= 
    `<button class="btnLook"> Reservar Look </button>`
reservarLook.appendChild(reservarLookBoton)

reservarLookBoton.addEventListener("click",()=>{
    for (const id in suerte){ 
        let producto=suerte[id]
        $("#dropdownCart").append(
        `
        <h6 > ${producto.nombre}</h6> 
        <p > $ ${producto.precio}</p>
      `)
    }
    Swal.fire({
        title: 'Productos agregados al carrito',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    let carritoSuerte= Array.prototype.push.apply(carrito, suerte)
   suerte=[];
   console.log(suerte)
   guardarCarrito2(carritoSuerte)


   document.getElementById("vestidoSuerte").innerHTML=" "
   document.getElementById("zapatoSuerte").innerHTML=" "
   document.getElementById("accesoriosSuerte").innerHTML=" "
   suma=0
})

let borrarLook= document.getElementById("borrarLook");
let borrarLookBoton=document.createElement("div");
    borrarLookBoton.innerHTML= 
    `<button class="btnLook"> Borrar Look </button>`
borrarLook.appendChild(borrarLookBoton)
borrarLookBoton.addEventListener("click", ()=>{
        document.getElementById("vestidoSuerte").innerHTML=" "
        document.getElementById("zapatoSuerte").innerHTML=" "
        document.getElementById("accesoriosSuerte").innerHTML=" "
        suma=0

}) 
