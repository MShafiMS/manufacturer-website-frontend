import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {
    const [user] = useAuthState(auth);
    const namevalue = useRef('');
    const navigate = useNavigate();
    const imgvalue = useRef('');
    const descriptionvalue = useRef('');
    const pricevalue = useRef('');
    const minimumorderQuantity = useRef('');
    const availablequantity = useRef('');
    const [reload, setReload] = useState(false);
    const addItem = event => {
        event.preventDefault();
        const name = namevalue.current.value;
        const img = imgvalue.current.value;
        const description = descriptionvalue.current.value;
        const price = pricevalue.current.value;
        const minOrderQuantity = minimumorderQuantity.current.value;
        const availableQuantiti = availablequantity.current.value;

        // add item's object
        const additems = {
            name: name,
            img: img,
            description: description,
            minimumOrderQuantity: parseInt(minOrderQuantity),
            availableQuantity: parseInt(availableQuantiti),
            price: parseInt(price),

        }

        //add item with conditional statement
        if (name && img && description && price && minOrderQuantity && availableQuantiti) {
            fetch('https://aqueous-cove-16160.herokuapp.com/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(additems),
            }, [reload])
                .then(response => response.json())


                .then(data => {
                    toast('item successfully added!!!');
                    event.target.reset();
                    setReload(!reload);
                })

        }
        else {
            toast('Please enter the all input field')
        }
    }
    return (
        <div>
            
<div className="card-body">
        <h1 className="font-bold mx-auto text-3xl text-secondary">Add New Product</h1>
        <Form id="formm" onSubmit={addItem} className="mx-auto">
          <div className="form-control mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                 ref={namevalue} 
                type="text"
                placeholder="Enter Name"
                className="input input-bordered input-secondary w-80 max-w-xs"
              />
            </div>
          </div>
          <div className="form-control mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input
                ref={imgvalue}
                type="text"
                placeholder="Enter Image Link"
                className="input input-bordered input-secondary w-80 max-w-xs"
              />
            </div>
          </div>
          <div className="form-control mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Description</span>
              </label>
              <input
                ref={descriptionvalue}
                type="text"
                placeholder="Enter Product Description"
                className="input input-bordered input-secondary w-80 max-w-xs"
              />
            </div>
          </div>
          <div className="form-control mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Minimum Order Quantity</span>
              </label>
              <input
                ref={minimumorderQuantity}
                type="text"
                placeholder="Enter Minimum Order Quantity"
                className="input input-bordered input-secondary w-80 max-w-xs"
              />
            </div>
          <div className="form-control mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                ref={availablequantity}
                type="text"
                placeholder="Enter Available Quantity"
                className="input input-bordered input-secondary w-80 max-w-xs"
              />
            </div>
          </div>
          <div className="form-control mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Price</span>
              </label>
              <input
                ref={pricevalue}
                type="text"
                placeholder="Enter Product Price"
                className="input input-bordered input-secondary w-80 max-w-xs"
              />
            </div>
            <button
              id="btnn"
              className="btn btn-secondary mt-4 text-white fw-bold w-100"
            >
              Add Product
            </button>
          </div>
          </div>
        </Form>
        <ToastContainer></ToastContainer>
      </div>
        </div>
    );
};

export default AddProduct;

