import React, { useEffect, useState } from "react";
import UserReviews from "../UserReviews";

const UserRvw = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("https://manufacturer-website-g1e2.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setloading(false);
      });
  }, [reviews]);

  return (
    <div className="mb-8 mx-auto">
      <h1 className="font-bold uppercase text-center text-5xl mt-5 mb-4">Reviews</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-8">
        {reviews.map((review) => (
          <UserReviews review={review} key={review._id}></UserReviews>
        ))}
      </div>
    </div>
  );
};

export default UserRvw;
