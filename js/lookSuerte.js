let talleVestido=document.getElementById("talle");
let talleZapato=document.getElementById("talleZapato");
let accesoriosSi=document.getElementById("accesoriosSi");

let miFormulario=document.getElementById("formulario")
let suma=0

function formularioSuerte(event){ 
    event.preventDefault();

    const accesoriosSuerte=document.getElementById("accesoriosSuerte")
    if (accesoriosSi.checked){
        let accesoriosSuertePop = accesorios[Math.floor(Math.random()*accesorios.length)];
        let accesoriosSuerteDiv=document.createElement("div");
        accesoriosSuerteDiv.innerHTML=
        `<h4> Accesorio: </h4>
        <h5>Nombre: ${accesoriosSuertePop.nombre}</h5>
       <h6> Precio: $${accesoriosSuertePop.precio}</h5>
        <img src=${accesoriosSuertePop.imagen} height=200px>`
        suma+= accesoriosSuertePop.precio
        accesoriosSuerte.appendChild(accesoriosSuerteDiv)
    } else{
        let sinTalleAccesorios=document.createElement("p")
        sinTalleAccesorios.innerHTML= `No ha seleccionado accesorios`
        accesoriosSuerte.appendChild(sinTalleAccesorios)
    }

const vestidoSuerte=document.getElementById("vestidoSuerte")
function vestidoLook() { 
if (talleVestido.value=="S"){
    let vestidoSuerteS=vestidos.find(vSuerteS=> vSuerteS.talle =="S");
    let vestidoSuerteDivS=document.createElement("div")
    vestidoSuerteDivS.innerHTML = 
    `<h4> Vestido: </h4>
    <h5> Producto: ${vestidoSuerteS.nombre}</h5> 
    <h6> Precio: $ ${vestidoSuerteS.precio}</h6>
    <img src=${vestidoSuerteS.imagen} height=200px>`
    suma+= vestidoSuerteS.precio
    vestidoSuerte.appendChild(vestidoSuerteDivS)
}else if (talleVestido.value=="M"){
    let vestidoSuerteM=vestidos.find(vSuerteM=> vSuerteM.talle =="M");
    let vestidoSuerteDivM=document.createElement("div")
    vestidoSuerteDivM.innerHTML = 
    `<h4> Vestido: </h4>
    <h5> Producto: ${vestidoSuerteM.nombre}</h5> 
    <h6> Precio: $ ${vestidoSuerteM.precio}</h6>
    <img src=${vestidoSuerteM.imagen} height=200px>
    `
    suma+= vestidoSuerteM.precio
    vestidoSuerte.appendChild(vestidoSuerteDivM)
}else if (talleVestido.value=="L"){
    let vestidoSuerteL=vestidos.find(vSuerteM=> vSuerteM.talle =="L");
    let vestidoSuerteDivL=document.createElement("div")
    vestidoSuerteDivL.innerHTML = 
    `<h4> Vestido: </h4>
    <h5> Producto: ${vestidoSuerteL.nombre}</h5> 
    <h6> Precio: $ ${vestidoSuerteL.precio}</h6>
    <img src=${vestidoSuerteL.imagen} height=200px>
    `
    suma+= vestidoSuerteL.precio
    vestidoSuerte.appendChild(vestidoSuerteDivL)
}else if (talleVestido.value=="XS"){
    let vestidoSuerteXS=vestidos.find(vSuerteM=> vSuerteM.talle =="XS");
    let vestidoSuerteDivXS=document.createElement("div");
    vestidoSuerteDivXS.innerHTML = 
    `<h4> Vestido: </h4>
    <h5> Producto: ${vestidoSuerteXS.nombre}</h5> 
    <h6> Precio: $ ${vestidoSuerteXS.precio}</h6>
    <img src=${vestidoSuerteXS.imagen} height=200px>
    `
    suma+= vestidoSuerteXS.precio
    vestidoSuerte.appendChild(vestidoSuerteDivXS)
} else{
    let sinTalle=document.createElement("p")
    sinTalle.innerHTML= `No ha seleccionado talle`
    vestidoSuerte.appendChild(sinTalle)
}
console.log(`el vestido adecuado es ${vestidoSuerte.toString()}}`)
}
vestidoLook();

const zapatoSuerte =document.getElementById("zapatoSuerte")
function zapatoLook() { 
switch (talleZapato.value){
    case "35":
        let zapato35=zapatos.find(z35=>z35.talle =="35");
        let zapato35Div=document.createElement("div");
        zapato35Div.innerHTML=
        `<h4> Zapatos: </h4>
        <h5> Modelo: ${zapato35.nombre}</h5>
        <h6> Precio: ${zapato35.precio} </h6>
        <img src= ${zapato35.imagen} height=200px>`
        suma+= zapato35.precio
        zapatoSuerte.appendChild(zapato35Div);
        break;
    case "38":
        let zapato38=zapatos.find(z38=>z38.talle =="38");
        let zapato38Div=document.createElement("div");
        zapato38Div.innerHTML=
        `<h4> Zapatos: </h4>
        <h5> Modelo: ${zapato38.nombre}</h5>
        <h6> Precio: ${zapato38.precio} </h6>
        <img src= ${zapato38.imagen} height=200px>`
        suma+= zapato38.precio
        zapatoSuerte.appendChild(zapato38Div);
        break;   
    case "39":
        let zapato39=zapatos.find(z39=>z39.talle =="39");
        let zapato39Div=document.createElement("div");
        zapato39Div.innerHTML=
        `<h4> Zapatos: </h4>
        <h5> Modelo: ${zapato39.nombre}</h5>
        <h6> Precio: ${zapato39.precio} </h6>
        <img src= ${zapato39.imagen} height=200px>`
        suma+= zapato39.precio
        zapatoSuerte.appendChild(zapato39Div);
        break;      
    default:
        let sinZapato=document.createElement("p");
        sinZapato.innerHTML= `lo sentimos no tenemos tu talle`
        zapatoSuerte.appendChild(sinZapato);
      break;
    }  
}
zapatoLook()
console.log(suma)
miFormulario.reset()
}
miFormulario.addEventListener("submit", formularioSuerte)

let reservarLook= document.getElementById("reservarLook");
let reservarLookBoton=document.createElement("div");
    reservarLookBoton.innerHTML= 
    `<button> Reservar Look </button>`
reservarLook.appendChild(reservarLookBoton)
reservarLookBoton.addEventListener("click",()=>{
   alert(`Seguro que desea proceder? Su total es ${suma}`)
})

let borrarLook= document.getElementById("borrarLook");
let borrarLookBoton=document.createElement("div");
    borrarLookBoton.innerHTML= 
    `<button> Borrar Look </button>`
borrarLook.appendChild(borrarLookBoton)
borrarLookBoton.addEventListener("click", ()=>{
        document.getElementById("vestidoSuerte").innerHTML=""
        document.getElementById("zapatoSuerte").innerHTML=""
        document.getElementById("accesoriosSuerte").innerHTML=""
})


