import React from "react";

const ProAvatar = ({ product, deleteItem }) => {
  const {
    _id,
    name,
    img,
    description,
    minimumOrderQuantity,
    availableQuantity,
    price,
  } = product;

  const deleteItems = (id) => {
    const proceed = window.confirm("Are you sure to delete this item?");
    if (proceed) {
      fetch(`http://localhost:5000/allproducts/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          deleteItem(_id);
        });
    }
  };
  return (
    <div className="">
      <div className="card-body items-center text-center">
        <div id="card-img" className="card crd bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="img rounded-xl" />
          </figure>

          <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p><span className="font-bold">Available:</span>{availableQuantity}</p>
          <p><span className="font-bold">Price:</span>${price}</p>
          <p><span className="font-bold">Descirption:</span>{description}</p>
          <div className="card-actions">
          <button
          onClick={() => deleteItems(_id)}
          className="btn btn-primary rounded-pill pt-2 pb-2 ps-4 pe-4"
        >
          Delete
        </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProAvatar;


