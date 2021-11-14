let nombre= prompt("ingrese su nombre");
let fecha= prompt("hola "+ nombre + " ! estas buscando un atuendo para fin de a;o?")

let descuentoFiestas= 100
let descuentoOriginal= 400
if(fecha==="si"||fecha==="Si"||fecha==="SI"){ 
    
    alert("tenes un descuento de "+descuentoFiestas+ " pesos con el codigo 'fiestas'" );
}else if (fecha==="no"||fecha==="No"||fecha==="NO"){
    
    alert("tenes un descuento de "+descuentoOriginal+ " pesos con el codigo 'original' " );
}else{
    alert ("respuesta incorrecta, perdiste tu descuento");
}
let articulo1 =parseInt( prompt("Ingrese precio del articulo 1"));
let articulo2=parseInt( prompt("Ingrese precio del articulo 2"));
let articulo3=parseInt( prompt("Ingrese precio del articulo 3"));
function precioSuma (a,b,c){
    let comboTotal= a+b+c;
    return comboTotal;
}
const iva=(x) => x*1.21;
const descuento= function (a,b){return a-b};
function precioFinal(resultado){
    console.log("Su precio total es " + resultado);
}

let ingreseCodigo=prompt("ingrese su codigo de descuento");

if(ingreseCodigo=== "fiestas"||ingreseCodigo==="Fiestas"||ingreseCodigo==="FIESTAS"){
  /* let precioFiestas= precioSuma(articulo1,articulo3o,articulo2);
   let ivaFiestas= iva(precioFiestas);
   let resultadoFinalFiestas=descuento(ivaFiestas,descuentoFiestas);  */
 precioFinal(descuento(iva(precioSuma(articulo1,articulo2,articulo3)),descuentoFiestas));
} else if (ingreseCodigo=== "original"||ingreseCodigo==="Original"||ingreseCodigo==="ORIGINAL"){
/*    precioOriginal= precioSuma(articulo1,articulo2,articulo3);
    let ivaOriginal= iva(precioOriginal);
    let resultadoFinalOriginal=descuento(ivaOriginal,descuentoOriginal);  */
   precioFinal(descuento(iva(precioSuma(articulo1,articulo2,articulo3)),descuentoOriginal));
} else {
   precioFinal(iva(precioSuma(articulo1,articulo2,articulo3)));
}
