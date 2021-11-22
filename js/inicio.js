let nombre= localStorage.getItem("usuario");
if (nombre==null){
    nombre= prompt("como es tu nombre?");
    nombre=localStorage.setItem("usuario",nombre);
}
let campoSaludo=document.getElementById("saludo");
campoSaludo.innerHTML = `<h1>Bienvenido ${nombre}! Aqui encontraras tu look ideal</h1>`

let descuentoFiesta=""
let descuentoOriginal=""

    class Producto{
        constructor(nombre,talle, precio){
            this.nombre = nombre.toLowerCase();
            this.talle= talle.toUpperCase();
            this.precio = parseFloat(precio);
            this.stock=3;
            this.id=Producto.ID;
            Producto.ID ++;
        }
        
        static ID = 01
        descuentoFiesta(){
            let descuentoFiesta=(this.precio-100)*1.21;
            this.precio= descuentoFiesta;
            return descuentoFiesta;
        }
        descuentoOriginal(){
            let descuentoOriginal=(this.precio-400)*1.21;
            this.precio= descuentoOriginal;
            return descuentoOriginal;
        }

    sell(){
        this.precio=this.precio*1.21;
        if (this.stock === 0){
            console.log("Fuera de stock");
        }else{ 
        this.stock--;
        }
    return this
}
}

const vestidos= []
    vestidos.push (new Producto("Vestido Yellow","L",2510));
    vestidos.push (new Producto("Vestido Briza","M",4500));
    vestidos.push (new Producto("Vestido Black","S",5700));
    vestidos.push (new Producto("Vestido Pink","XS",4800));


const zapatos = []
zapatos.push (new Producto("Zapato Sky","38",2700));
zapatos.push (new Producto("Sandalia Arte","38",4150));
zapatos.push (new Producto("Zapatos Dream","35",2510));
zapatos.push (new Producto("Sandalias Cardiff","39",2600));


const accesorios = []
    accesorios.push (new Producto("Pulsera Diamond","U",1200));
    accesorios.push (new Producto("Collar Esmeraldas","U",1780));
    accesorios.push (new Producto("Collar Piedra","U",2510));
    accesorios.push (new Producto("Aros Brillo","U",4800));

let carrito = [];

carrito.push(accesorios[1].sell());

let item=vestidos.find(small=> small.talle =="S");
carrito.push(item.sell());

let zapatoBarato=zapatos.filter(zapatos=>zapatos.precio<3000);
carrito.push(zapatoBarato);

function guardarCarrito(){
    let carritoString=JSON.stringify(carrito);
    localStorage.setItem("carrito",carritoString)
}
function obtenerCarrito(){
    let carritoString= localStorage.getItem("carrito");
    let carritoDeCompra= JSON.parse(carritoString);
    console.log(carritoDeCompra)
    carrito=carritoDeCompra
}



//suerte//
let talleVestido=document.getElementById("talle").value="S";
let talleZapato=document.getElementById("talleZapato").value="38"
let accesoriosSi=document.getElementById("accesoriosSi").value=true;

const vestidoSuerte=document.getElementById("vestidoSuerte")
if (talleVestido=="S"){
    let vestidoSuerteS=vestidos.find(vSuerteS=> vSuerteS.talle =="S");
    let vestidoSuerteDivS=document.createElement("div")
    vestidoSuerteDivS.innerHTML = 
    `<h4> Vestido: </h4>
    <h5> Producto: ${vestidoSuerteS.nombre}</h5> 
    <h6> Precio: $ ${vestidoSuerteS.precio}</h6>
    `
    vestidoSuerte.appendChild(vestidoSuerteDivS)
}else if (talleVestido=="M"){
    let vestidoSuerteM=vestidos.find(vSuerteM=> vSuerteM.talle =="M");
    let vestidoSuerteDivM=document.createElement("div")
    vestidoSuerteDivM.innerHTML = 
    `<h4> Vestido: </h4>
    <h5> Producto: ${vestidoSuerteM.nombre}</h5> 
    <h6> Precio: $ ${vestidoSuerteM.precio}</h6>
    `
    vestidoSuerte.appendChild(vestidoSuerteDivM)
}else if (talleVestido=="L"){
    let vestidoSuerteL=vestidos.find(vSuerteM=> vSuerteM.talle =="L");
    let vestidoSuerteDivL=document.createElement("div")
    vestidoSuerteDivL.innerHTML = 
    `<h4> Vestido: </h4>
    <h5> Producto: ${vestidoSuerteL.nombre}</h5> 
    <h6> Precio: $ ${vestidoSuerteL.precio}</h6>
    `
    vestidoSuerte.appendChild(vestidoSuerteDivL)
}else if (talleVestido=="XS"){
    let vestidoSuerteXS=vestidos.find(vSuerteM=> vSuerteM.talle =="XS");
    let vestidoSuerteDivXS=document.createElement("div");
    vestidoSuerteDivXS.innerHTML = 
    `<h4> Vestido: </h4>
    <h5> Producto: ${vestidoSuerteXS.nombre}</h5> 
    <h6> Precio: $ ${vestidoSuerteXS.precio}</h6>
    `
    vestidoSuerte.appendChild(vestidoSuerteDivXS)
} else{
    let sinTalle=document.createElement("p")
    sinTalle.innerHTML= `No ha seleccionado talle`
    vestidoSuerte.appendChild(sinTalle)
}

const zapatoSuerte =document.getElementById("zapatoSuerte")
switch (talleZapato){
    case "35":
        let zapato35=zapatos.find(z35=>z35.talle =="35");
        let zapato35Div=document.createElement("div");
        zapato35Div.innerHTML=
        `<h4> Zapatos: </h4>
        <h5> Modelo: ${zapato35.nombre}</h5>
        <h6> Precio: ${zapato35.precio} </h6>`
        zapatoSuerte.appendChild(zapato35Div);
        break;
    case "38":
        let zapato38=zapatos.find(z38=>z38.talle =="38");
        let zapato38Div=document.createElement("div");
        zapato38Div.innerHTML=
        `<h4> Zapatos: </h4>
        <h5> Modelo: ${zapato38.nombre}</h5>
        <h6> Precio: ${zapato38.precio} </h6>`
        zapatoSuerte.appendChild(zapato38Div);
        break;   
    case "39":
        let zapato39=zapatos.find(z39=>z39.talle =="39");
        let zapato39Div=document.createElement("div");
        zapato39Div.innerHTML=
        `<h4> Zapatos: </h4>
        <h5> Modelo: ${zapato39.nombre}</h5>
        <h6> Precio: ${zapato39.precio} </h6>`
        zapatoSuerte.appendChild(zapato39Div);
        break;      
    default:
        let sinZapato=document.createElement("p");
        sinZapato.innerHTML= `lo sentimos no tenemos tu talle`
        zapatoSuerte.appendChild(sinZapato);
        break;
}
const accesoriosSuerte=document.getElementById("accesoriosSuerte");
if(accesoriosSi=true){
   let accesoriosSuertePop=accesorios.pop();
    let accesoriosSuerteDiv=document.createElement("div");
    accesoriosSuerteDiv.innerHTML=
    `<h4> Accesorio:</h4>
    <h5> Accesorio: ${accesoriosSuertePop.nombre} </h5>
    <h6> Precio: ${accesoriosSuertePop.precio}</h6>
        `
        accesoriosSuerte.appendChild(accesoriosSuerteDiv);
} else{
    let accesoriosNo=document.createElement("p");
    accesoriosNo.innerHTML=`Selecciono sin accesorios`;
    accesoriosSuerte.appendChild(accesoriosNo)

}

let reservarLook= document.getElementById("reservarLook");
let reservarLookBoton=document.createElement("div");
    reservarLookBoton.innerHTML= 
    `<button> Reservar Look </button>`
reservarLook.appendChild(reservarLookBoton)
