
let descuentoFiesta=""
let descuentoOriginal=""

    class Producto{
        constructor(nombre,talle, precio,imagen){
            this.nombre = nombre.toUpperCase();
            this.talle= talle.toUpperCase();
            this.precio = parseFloat(precio);
            this.imagen=imagen
            this.stock=3;
            this.id=Producto.ID;
            Producto.ID ++;
        }
        
        static ID = 0
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
    vestidos.push (new Producto("Vestido Yellow","L",2510,"./images/vestidoYellow.jpg"));
    vestidos.push (new Producto("Vestido Briza","M",4500,"./images/vestidoBrisa.jpg"));
    vestidos.push (new Producto("Vestido Black","S",5700,"./images/vestidoBlack.jpg"));
    vestidos.push (new Producto("Vestido Pink","XS",4800,"./images/vestidoPink.jpg"));


const zapatos = []
zapatos.push (new Producto("Zapato Sky","38",2700,"./images/zapatosNegro.jpg"));
zapatos.push (new Producto("Sandalia Arte","38",4150,"./images/zapatosArte.jpg"));
zapatos.push (new Producto("Zapatos Dream","35",2510,"./images/zapatosPlateados.jpg"));
zapatos.push (new Producto("Sandalias Cardiff","39",2600,"./images/sandalias-cardiff-cobre.jpg"));


const accesorios = []
    accesorios.push (new Producto("Pulsera Diamond","U",1200,"./images/pulseraPiedras.jpg"));
    accesorios.push (new Producto("Collar Esmeraldas","U",1780,"./images/collarEsmeraldas.jpg"));
    accesorios.push (new Producto("Pulsera Esmeraldas","U",3510,"./images/pulseraEsmeralda.jpg"));
    accesorios.push (new Producto("Aros Brillo","U",4800,"./images/arosBrillo.png"));

