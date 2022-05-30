import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-bootstrap";

const Add = () => {
  const [user] = useAuthState(auth);
  const edu = useRef("");
  const locations = useRef("");
  const phone = useRef("");
  const linkin = useRef("");
  const [reload, setReload] = useState(false);
  const [product, setProduct] = useState([]);
  const [loading1, setloading1] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/myprofile/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setloading1(false);
      });
  }, [product]);

  const addItem = (event) => {
    event.preventDefault();
    const educations = edu.current.value;
    const locationss = locations.current.value;
    const phoneno = phone.current.value;
    const linkins = linkin.current.value;

    // add item's object
    const additems = {
      email: user?.email,
      education: educations,
      locations: locationss,
      phoneNumber: phoneno,
      linkedIn: linkins,
    };

    //add item with conditional statement
    if (educations || locationss || phoneno || linkins)
      fetch(
        `http://localhost:5000/myprofile/${user?.email}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(additems),
        },
        [reload]
      )
        .then((response) => response.json())

        .then((data) => {
          toast.success("successfully Updated!!!");
          event.target.reset();
          setReload(!reload);
        });
    else {
      toast.error("Please enter at least one input field");
    }
  };

  return (
    <div className="container">
      <div className="card-body">
        <h1 className="font-bold mx-auto text-3xl text-secondary">
          Update Your Profile
        </h1>
        <Form id='formm' onSubmit={addItem} className="mx-auto">
          <div className="form-control mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Education</span>
              </label>
              <input
                ref={edu}
                type="text"
                defaultValue={product?.education}
                className="input input-bordered input-secondary w-80 max-w-xs"
              />
            </div>
          </div>
          <div className="form-control mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                ref={locations}
                type="text"
                defaultValue={product?.location}
                className="input input-bordered input-secondary w-80 max-w-xs"
              />
            </div>
          </div>
          <div className="form-control mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                ref={phone}
                type="text"
                defaultValue={product?.phoneNumber}
                className="input input-bordered input-secondary w-80 max-w-xs"
              />
            </div>
          </div>
          <div className="form-control mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkedIn Link</span>
              </label>
              <input
                ref={linkin}
                type="text"
                defaultValue={product?.linkedIn}
                className="input input-bordered input-secondary w-80 max-w-xs"
              />
            </div>
            <button
              id="btnn"
              className="btn btn-secondary mt-4 text-white fw-bold w-100"
            >
              Update
            </button>
          </div>
        </Form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Add;
