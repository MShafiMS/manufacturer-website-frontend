import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Review = () => {
  const namevalue = useRef("");
  const imgvalue = useRef("");
  const ratingvalue = useRef("");
  const descriptionvalue = useRef("");
  const [reload, setReload] = useState(false);

  const addItem = (event) => {
    event.preventDefault();
    const name = namevalue.current.value;
    const img = imgvalue.current.value;
    const description = descriptionvalue.current.value;
    const rating = ratingvalue.current.value;

    // add item's object
    const additems = {
      name: name,
      img: img,
      ratings: parseFloat(rating),
      description: description,
    };

    //add item with conditional statement
    if (rating && description) {
      fetch(
        "https://aqueous-cove-16160.herokuapp.com/reviews",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(additems),
        },
        [reload]
      )
        .then((response) => response.json())
        .then((data) => {
          toast("Review successfully added!!!");
          event.target.reset();
          setReload(!reload);
        });
    } else {
      toast.error("Please fill up the important input field");
    }
  };

  return (
    <div>
      <div className="card-body">
        <h1 className="font-bold mx-auto text-3xl text-secondary">Add New Reviews</h1>
        <Form id="formm" onSubmit={addItem} className="mx-auto">
          <div className="form-control mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
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
                <span className="label-text">User Image</span>
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
                <span className="label-text">Ratings</span>
              </label>
              <input
                ref={ratingvalue}
                type="text"
                placeholder="Enter Ratings"
                className="input input-bordered input-secondary w-80 max-w-xs"
              />
            </div>
          </div>
          <div className="form-control mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                ref={descriptionvalue}
                type="text"
                placeholder="Enter Description"
                className="input input-bordered input-secondary w-80 max-w-xs"
              />
            </div>
            <button
              id="btnn"
              className="btn btn-secondary mt-4 text-white fw-bold w-100"
            >
              Add Reviews
            </button>
          </div>
        </Form>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Review;
