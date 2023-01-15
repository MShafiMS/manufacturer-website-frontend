import React from "react";
import { Link } from "react-router-dom";
const Products = ({ product }) => {
  const {
    _id
  } = product;
  return (
    <div>
      <div className="card bg-base-200 lg:w-full w-11/12 mx-auto hover:-translate-y-3 border-neutral rounded-lg  shadow-xl  border-[0.5px] hover:shadow-2xl transition-all duration-300 h-full">
        <figure>
          <img
            src={product.img}
            alt="Shoes"
            className="img h-48 bg-white px-24"
          />
        </figure>
        <div className="card-body grid content-between px-4 gap-2 text-left">
          <h2 className="text-xl font-bold">
            {product?.name.length > 22 ? (
              <>{product.name.slice(0, 22)}...</>
            ) : (
              <>{product.name}</>
            )}
          </h2>
          <div>{product.description.slice(0, 130)}</div>
          <div className="flex justify-between">
            <div>Available: {product.availableQuantity}</div>
            <div>Minimum Order: {product.minimumOrderQuantity}</div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="text-2xl">
              Price:<span className="font-bold">${product.price}</span>
            </div>
            <Link
              to={`/products/${_id}`}
              className="btn btn-primary btn-sm mt-2"
            >
              Purchase
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
