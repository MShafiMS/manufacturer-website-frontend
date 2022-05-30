import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4qFtAWBcVKoML1Liks1zt6j8BTzKIRcTwuaICoFoHN6e0lMnrL5okc3to4HTfPWXqTfYkHPdd9Gl21CL6TPZUw00YW6agaEZ');

const Payment = () => {
    const { id } = useParams();
    const [myorder, setProducts] = useState([]);
    useEffect(() => {

        fetch(`https://aqueous-cove-16160.herokuapp.com/myorder/${id}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);

            });
    }, [id]);


    return (
        <div className=''>
            <div class="card w-50 mx-auto max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {myorder.name}</p>
                    <h2 class="card-title">Please Pay for {myorder.productName}</h2>
                    <p>Please pay: ${myorder.price}</p>
                </div>
            </div>
            <div class="card mx-auto mb-8 flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm myorder={myorder} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;