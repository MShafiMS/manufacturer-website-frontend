import React from "react";
import "./UserReviews.css";

const UserReviews = ({ review }) => {
  const { img, name, ratings, description } = review;
  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex justify-between p-3">
            
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <h5 className="">{ratings}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserReviews;
