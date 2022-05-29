import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/myprofile/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setloading(false);
            })

    }, [product])
  return (
    <div>
      <h2 className="text-4xl my-4 text-center font-bold text-secondary">
        My Profile
      </h2>
      <div className="card w-96 mx-auto">
        <div className="card-body">
          <div className="avatar mx-auto">
            <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL} />
            </div>
          </div>
          <h2 className="card-title mt-2 mx-auto">{user.displayName}</h2>
          <p className="mx-auto">{user.email}</p>
          <div className="card-actions justify-end">
            <div className="mx-auto">
              {product.education ? (
                <p className="text-center">Education : {product.education}</p>
              ) : (
                <p className="text-center">Education: Please Set Your Education</p>
              )}
              {product.location ? (
                <p className="text-center">Location : {product.location}</p>
              ) : (
                <p className="text-center">Location: Please Set Your Location</p>
              )}
              {product.phoneNumber ? (
                <p className="text-center">Phone Number : {product.phoneNumber}</p>
              ) : (
                <p className="text-center">Phone: Please Set Your Phone Number</p>
              )}
              {product.linkedIn ? (
                <a className="text-center ml-20 font-semibold text-accent text-xl" href={product.linkedIn}>LinkedIn Profile</a>
              ) : (
                <p className="text-center">LinkedIn Link: Please Set Your LinkedIn Link</p>
              )}
              <Link id="btnn" to="/dashboard/update" className="btn btn-secondary text-white mx-20 mt-2">
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
