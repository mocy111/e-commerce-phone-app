import React, { useRef,useEffect } from 'react'

const PayPal = ({total} ) => {


    const paypal = useRef()
    useEffect(() => {
       window.paypal.Buttons({
        createOrder: function(data, actions) {
            // This function sets up the details of the transaction, including the amount and line item details.
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: total
                }
              }]
            });
          },
          onApprove: function(data, actions) {
            // This function captures the funds from the transaction.
            return actions.order.capture().then(function(details) {
              // This function shows a transaction success message to your buyer.
              alert('Transaction completed by ' + details.payer.name.given_name);
            });
          },
          onError: (err) =>{
            console.log("Error!", err);
          }

       }).render(paypal.current)
      
    }, [total])
    return (


        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default PayPal
