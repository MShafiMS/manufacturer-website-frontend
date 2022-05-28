import React from "react";
import './Product.css';

const Products = ({ service }) => {
  return (
    <div>
      <div class="card crd w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src={service.img}
            alt="Shoes"
            class="img rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{service.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
