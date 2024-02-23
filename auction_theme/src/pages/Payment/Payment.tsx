import { Elements } from '@stripe/react-stripe-js';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Loader } from '../../Helper';
import { loadStripe } from '@stripe/stripe-js';
import { Modal } from 'react-bootstrap';
import CheckoutForm from './CheckoutForm';

function Payment() {

    const location = useLocation()
    const {apiResult,userStore} = location.state    
    const [show,setShow] = useState(true);


    
    const stripePromise = loadStripe("pk_test_51OksQvILvwyftX9qNG7Do6c9UcetxFabHZXCpJZOVX5qro5RdPL7lUPEp40ejK4tECYRX0E9GEtz6mZsB0uwK9Ne00PrXcnu4J")
    if (apiResult) {
        const options = {
            clientSecret : apiResult.clientSecret
        }
   

  return (
    <div>
        <Elements stripe={stripePromise} options={options} >

    <div className='container m5 p-5' >
        <div className='row' >
    <Modal show={show}>

            <div className=' container' >
                <CheckoutForm></CheckoutForm>
            </div>
        </Modal>

        </div>
    </div>


        </Elements>
    </div>
  )
}


else {
    return (
        <Loader></Loader>
    )
}


}

export default Payment
