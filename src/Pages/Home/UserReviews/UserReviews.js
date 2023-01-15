import React from "react";
import "./UserReviews.css";

const UserReviews = ({ review }) => {
  const { img, name, ratings, description } = review;
  return (
    <div className="">
      <div className="card h-full bg-base-200 w-11/12 mx-auto lg:w-96 rounded-lg border border-neutral">
        <div className="card-body">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex justify-between p-3 rating-sm">
            <h5 className="font-bold">{ratings} <input name="rating-1" class="mask mask-star bg-orange-400"/></h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserReviews;
