import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const [reload, setReload] = useState(false);
  const { purchaseId } = useParams();
  const quantities = useRef("");
  const quantities2 = useRef("");
  const addresss = useRef("");
  const phoneNo = useRef("");
  const buttondisable = useRef();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${purchaseId}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [purchaseId]);

  const increase = () => {
    quantities.current.value = parseInt(quantities.current.value) + 1;
    quantities2.current.value = parseInt(quantities2.current.value) + 1;

    if (
      isNaN(quantities.current.value) ||
      quantities.current.value < products.minimumOrderQuantity ||
      quantities.current.value > products.availableQuantity
    ) {
      toast.error("Sorry!! This is not limited value");
      buttondisable.current.disabled = true;
    } else {
      buttondisable.current.disabled = false;
    }
  };

  const descrease = () => {
    quantities.current.value = parseInt(quantities.current.value) - 1;
    quantities2.current.value = parseInt(quantities2.current.value) - 1;
    if (
      isNaN(quantities.current.value) ||
      quantities.current.value < products.minimumOrderQuantity ||
      quantities.current.value > products.availableQuantity
    ) {
      toast.error("Sorry!! This is not limited value");
      buttondisable.current.disabled = true;
    } else {
      buttondisable.current.disabled = false;
    }
  };

  return (
    <div>
      <div className="card-body w-96 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">User Name</span>
          </label>
          <input
            type="text"
            className="input  input-bordered input-secondary max-w-xs"
            value={user.displayName}
            readOnly
            autoFocus
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">User Email</span>
          </label>
          <input
            type="text"
            className="input input-bordered input-secondary max-w-xs"
            value={user.email}
            readOnly
            autoFocus
          />
        </div>
      </div>
      <div className="card my-8 w-96 mx-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={products?.img} alt="Shoes" className="img rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary">{products?.name}</h2>
          <p>
            <span className="font-bold">Minimum Order:</span>
            {products?.minimumOrderQuantity}
          </p>
          <p>
            <span className="font-bold">Available:</span>
            {products?.availableQuantity}
          </p>
          <p>
            <span className="font-bold">Price:</span>${products?.price}
          </p>
          <p>
            <span className="font-bold">Descirption:</span>{" "}
            {products?.description}
          </p>
          <div className="card-actions">
            <p className="text-white font-bold">Product Purchase Quantity</p>
            <div className="mx-auto">
              <button
                onClick={descrease}
                className="btn text-white font-bold btn-secondary"
              >
                -
              </button>
              <input
                className="input m-2 input-bordered input-secondary text-center w-14 max-w-xs"
                ref={quantities}
                value={products.minimumOrderQuantity}
                type="text"
              />
              <button
                onClick={increase}
                className="btn text-white font-bold btn-secondary"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card flex-shrink-0 mx-auto w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
            <h1 className="font-bold text-3xl text-secondary">Purchase Form</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
            type="text"
            className="input input-bordered input-secondary max-w-xs"
            value={user.displayName}
            readOnly
            autoFocus
          />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            type="text"
            className="input input-bordered input-secondary max-w-xs"
            value={user.email}
            readOnly
            autoFocus
          />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Products Name</span>
            </label>
            <input
            type="text"
            className="input input-bordered input-secondary max-w-xs"
            value={products?.name}
            readOnly
            autoFocus
          />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Products Price</span>
            </label>
            <input
            type="text"
            className="input input-bordered input-secondary max-w-xs"
            value={products?.price}
            readOnly
            autoFocus
          />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Products Quantity</span>
            </label>
            <input
            type="text"
            className="input input-bordered input-secondary max-w-xs"
            ref={quantities2}
                value={products.minimumOrderQuantity}
            readOnly
            autoFocus
          />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter Address</span>
            </label>
            <input
              ref={addresss} type="text"  placeholder="Enter Address"
            className="input input-bordered input-secondary max-w-xs"
          />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter Phone Number</span>
            </label>
            <input
             ref={phoneNo} type="text" placeholder="Enter Phone Number"
            className="input input-bordered input-secondary max-w-xs"
          />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secondary">Complete Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
