import React from "react";
import "./UserReviews.css";

const UserReviews = ({ review }) => {
  const { img, name, ratings, description } = review;
  return (
    <div className="">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex justify-between p-3">
            
            <div class="rating">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
            </div>
            <h5 className=" text-white">{ratings}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserReviews;
