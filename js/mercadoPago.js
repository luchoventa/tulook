const mp = new MercadoPago('TEST-21869f7b-224e-4eae-9b62-9bb91196d509');
// Step #3
const cardForm = mp.cardForm({
    amount: "100.5",
    autoMount: true,
    form: {
      id: "form-checkout",
      cardholderName: {
        id: "form-checkout__cardholderName",
        placeholder: "Titular de la tarjeta",
      },
      cardholderEmail: {
        id: "form-checkout__cardholderEmail",
        placeholder: "E-mail",
      },
      cardNumber: {
        id: "form-checkout__cardNumber",
        placeholder: "Número de la tarjeta",
      },
      cardExpirationMonth: {
        id: "form-checkout__cardExpirationMonth",
        placeholder: "Mes de vencimiento",
      },
      cardExpirationYear: {
        id: "form-checkout__cardExpirationYear",
        placeholder: "Año de vencimiento",
      },
      securityCode: {
        id: "form-checkout__securityCode",
        placeholder: "Código de seguridad",
      },
      installments: {
        id: "form-checkout__installments",
        placeholder: "Cuotas",
      },
      identificationType: {
        id: "form-checkout__identificationType",
        placeholder: "Tipo de documento",
      },
      identificationNumber: {
        id: "form-checkout__identificationNumber",
        placeholder: "Número de documento",
      },
      issuer: {
        id: "form-checkout__issuer",
        placeholder: "Banco emisor",
      },
    },
    callbacks: {
      onFormMounted: error => {
        if (error) return console.warn("Form Mounted handling error: ", error);
        console.log("Form mounted");
      },
      onSubmit: event => {
        event.preventDefault();
  
        const {
          paymentMethodId: payment_method_id,
          issuerId: issuer_id,
          cardholderEmail: email,
          amount,
          token,
          installments,
          identificationNumber,
          identificationType,
        } = cardForm.getCardFormData();
  
        fetch("/process_payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
            issuer_id,
            payment_method_id,
            transaction_amount: Number(amount),
            installments: Number(installments),
            description: "Descripción del producto",
            payer: {
              email,
              identification: {
                type: identificationType,
                number: identificationNumber,
              },
            },
          }),
        });
      },
      onFetching: (resource) => {
        console.log("Fetching resource: ", resource);
  
        // Animate progress bar
        const progressBar = document.querySelector(".progress-bar");
        progressBar.removeAttribute("value");
  
        return () => {
          progressBar.setAttribute("value", "0");
        };
      },
    },
  });


$(".pago").click(()=>{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compra realizada',
        showConfirmButton: false,
        timer: 1500
      })
      localStorage.removeItem("carrito")
      document.getElementById("productosCarrito").innerHTML=" "
      document.getElementById("total").innerHTML=" "
      document.getElementById("iva").innerHTML=" "
      document.getElementById("cupon").innerHTML=" "
      document.getElementById("descuento").innerHTML=" "
      document.getElementById("carritoTotal").innerHTML=" "
})