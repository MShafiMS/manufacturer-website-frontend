import React from "react";
import './Product.css';

const Products = ({ product}) => {
  const { name, img, description, minimumOrderQuantity, availableQuantity, price } = product;
  return (
    <div>
      <div className="card crd w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={product.img}
            alt="Shoes"
            className="img rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.name}</h2>
          <p><span className="font-bold">Minimum Order:</span>{product.minimumOrderQuantity}</p>
          <p><span className="font-bold">Available:</span>{product.availableQuantity}</p>
          <p><span className="font-bold">Price:</span>${product.price}</p>
          <p><span className="font-bold">Descirption:</span>{product.description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
