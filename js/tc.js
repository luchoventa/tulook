const monedaUno = document.getElementById('moneda-uno');
const monedaDos = document.getElementById('moneda-dos');
const cantMUno = document.getElementById('cantidad-uno');
const cantMDos = document.getElementById('cantidad-dos');
const cambio = document.getElementById('cambio');
const taza1 = document.getElementById('taza');

$("#tcBtn").click(()=>{
    $("#tc").toggle("slow")
})

// Fetch Exchange Rate and Update the DOM
function calculate(){
    const mUno = monedaUno.value;
    const mDos = monedaDos.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${mUno}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[mDos];
       
       cambio.innerText = `1 ${mUno} = ${taza} ${mDos}`;

       cantMDos.value = (cantMUno.value * taza).toFixed(2);

    } );
    
}

//Event listeners
monedaUno.addEventListener('change', calculate);
cantMUno.addEventListener('input', calculate);
monedaDos.addEventListener('change', calculate);
cantMDos.addEventListener('input', calculate);

taza.addEventListener('click', () =>{
    const temp = monedaUno.value;
    monedaUno.value = monedaDos.value;
    monedaDos.value = temp;
    calculate();
} );

