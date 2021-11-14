class Producto{
    constructor(nombre,talle, precio){
        this.nombre = nombre.toLowerCase();
        this.talle= talle;
        this.precio = parseFloat(precio);
        this.vendido = false;
        this.stock=10;
    }
    descuentoFiesta(){
        this.precioDescuentoFiesta= (this.precio-100)*1.21;
    }
    descuentoOriginal(){
        this.precioDescuentoOriginal= (this.precio-400)*1.21;
    }
    precioIva(){
        this.precio=this.precio*1.21;
    }
    vender(){
        this.vendido=true;
        this.stock=this.stock-1;
    }
}

/* const vestidoY = new Producto ("Vestido Yellow","L","2510");
vestidoY.descuentoFiesta();
vestidoY.descuentoOriginal();
vestidoY.precioIva();
vestidoY.vender();

const vestidoB = new Producto ("Vestido Black","S","5700");
vestidoB.precioIva();

const vestidoBr = new Producto ("Vestido Briza","M","4500");
vestidoBr.descuentoOriginal();
vestidoBr.vender();

const vestidoP = new Producto ("Vestido Pink","XS","4800");
vestidoP.descuentoFiesta();
vestidoP.vender();

console.log("Se vendio el" , vestidoY.nombre,  "quedando ", vestidoY.stock , "unidades en stock asi como tambien el ", vestidoP.nombre, "quedando", vestidoP.stock, "unidades en stock");*/

const productos= [];
/* vestidos*/
productos.push (new Producto("Vestido Yellow","L",2510));
productos.push (new Producto("Vestido Briza","M",4500));
productos.push (new Producto("Vestido Black","S",5700));
productos.push (new Producto("Vestido Pink","XS",4800));
/* zapatos */
productos.push (new Producto("Zapato Sky","38",2600));
productos.push (new Producto("Sandalia Arte","38",4150));
productos.push (new Producto("Zapatos Dream","35",2510));
productos.push (new Producto("Sandalias Cardiff","39",2600));

/*accesorios*/
productos.push (new Producto("Pulsera Diamond","U",1200));
productos.push (new Producto("Collar Esmeraldas","U",1780));
productos.push (new Producto("Collar Piedra","U",2510));
productos.push (new Producto("Aros Brillo","U",4800));

let productosOrdenPrecio=productos.sort(function(a,b){
    return (a.precio-b.precio);
})

console.log(productosOrdenPrecio)


for (const p of productos){
   p.precioIva();
   console.log("suma IVA a todos los productos" );
}

const descuento100= productos.map((p100)=> p100.precio-100);
console.log(`Si utilizaras el cupon 'fiestas' los precios finales seria ${descuento100} `);

const descuento400= productos.map((p400 )=> p400.precio-400);
console.log(`Si utilizaras el cupon 'original' los precios finales seria ${descuento400} `);


const barato=productos.filter((b)=>b.precio<3000 );
console.log(barato);

const Accesorios=[
    {nombre: "Pulsera Diamond",talle: "U",precio: 1200},
    {nombre: "Collar Piedra",talle: "U",precio: 2510},
    {nombre: "Aros Brillo",talle: "U",precio: 4800},
    {nombre: "Collar Esmeraldas",talle: "U",precio: 1780},
]

const accesoriosOrden = Accesorios.sort(function(a,b){
    return (a.precio-b.precio);
})
console.log(accesoriosOrden);