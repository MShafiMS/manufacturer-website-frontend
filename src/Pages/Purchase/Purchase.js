import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const [reload, setReload] = useState(false);
  const { purchaseId } = useParams();
  const quantities = useRef("");
  const quantities2 = useRef("");
  const addresss = useRef("");
  const phoneNo = useRef("");
  const buttondisable = useRef();
  const { data: products, isLoading } = useQuery(["productsid"], () =>
    fetch(
      `https://manufacturer-website-g1e2.onrender.com/products/${purchaseId}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const submitForm = (event) => {
    event.preventDefault();
    const addresses = addresss.current.value;
    const phoneNumbers = phoneNo.current.value;
    const quantiti = quantities2.current.value;
    const totalPrice = products.price * parseInt(quantiti);

    const order = {
      img: products.img,
      name: user?.displayName,
      email: user?.email,
      productName: products?.name,
      price: products?.price,
      quantity: parseInt(quantiti),
      address: addresses,
      total: totalPrice,
      phoneNumber: phoneNumbers,
    };
    fetch(
      "https://manufacturer-website-g1e2.onrender.com/order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      },
      [reload]
    )
      .then((response) => response.json())
      .then((data) => {
        toast.success("order is successful!!!");
        event.target.reset();
        setReload(!reload);
      });
  };

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
      toast.success("success");
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

  const quantiti = quantities2.current.value;
  const totalPrice = products.price * parseInt(quantiti);
  return (
    <div>
      <div className="card-body mx-auto">
        <h1 className="font-bold text-info text-2xl">
          {user.displayName}
        </h1>
        <h1 className="font-semibold text-xl">{user.email}</h1>
      </div>
      <div className="flex p-8 w-11/12 rounded-lg items-start flex-col lg:flex-row mb-8 mx-auto bg-base-200 border-neutral border shadow-xl">
        <div className="w-full">
          <img src={products?.img} alt="Shoes" className="border border-neutral rounded-xl" />
        </div>
        <div className="w-full">
          <h2 className="text-xl font-bold text-info">{products?.name}</h2>
          <p className="text-lg">
            <span className="font-bold">Minimum Order : </span>
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
          <div>
            <p className="lg:text-left text-center md:text-left text-info font-bold">
              Purchase Quantity
            </p>
            <div className="lg:text-left md:text-left text-center">
              <button
                onClick={descrease}
                className="btn text-white font-bold btn-info"
              >
                -
              </button>
              <input
                className="input m-2 input-bordered input-info text-center w-14 max-w-xs"
                ref={quantities}
                value={products.minimumOrderQuantity}
                type="text"
              />
              <button
                onClick={increase}
                className="btn text-white font-bold btn-info"
              >
                +
              </button>

              <label
                for="my-modal-3"
                class="btn lg:ml-4 md:ml-4 btn-wide text-white font-bold btn-info modal-button"
              >
                Place Order
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-info btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex-shrink-0 mx-auto w-full max-w-sm bg-base-100">
            <div className="card-body">
              <h1 className="font-bold text-3xl text-info">
                Purchase Form
              </h1>
              <Form onSubmit={submitForm}>
                <div className="form-control">
                  <figure className="px-10 hidden pt-10">
                    <img
                      src={products?.img}
                      alt="Shoes"
                      className="img rounded-xl"
                    />
                  </figure>
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered input-info max-w-xs"
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
                    className="input input-bordered input-info max-w-xs"
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
                    className="input input-bordered input-info max-w-xs"
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
                    className="input input-bordered input-info max-w-xs"
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
                    className="input input-bordered input-info max-w-xs"
                    ref={quantities2}
                    value={products.minimumOrderQuantity}
                    readOnly
                    autoFocus
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Total</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered input-info max-w-xs"
                    value={totalPrice}
                    readOnly
                    autoFocus
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Enter Address</span>
                  </label>
                  <input
                    ref={addresss}
                    type="text"
                    required
                    placeholder="Enter Address"
                    className="input input-bordered input-info max-w-xs"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Enter Phone Number</span>
                  </label>
                  <input
                    ref={phoneNo}
                    required
                    type="text"
                    placeholder="Enter Phone Number"
                    className="input input-bordered input-info max-w-xs"
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    ref={buttondisable}
                    className="btn btn-info text-white"
                  >
                    Purchase
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Purchase;
