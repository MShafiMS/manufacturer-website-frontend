import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const ManageOrders = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [products, setProduct] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    if (user) {
      fetch(`https://manufacturer-website-g1e2.onrender.com/order`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/login");
          }
          return res.json();
        })

        .then((data) => {
          setProduct(data);
          setloading(false);
        });
    }
  }, [products]);
  return (
    <div className="overflow-x-auto">
      <h1 className="font-bold text-4xl text-secondary text-center my-4">
        Manage Orders
      </h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th className="text-secondary">User</th>
            <th className="text-secondary">Product Name</th>
            <th className="text-success">Total</th>
            <th className="text-secondary">Quantity</th>
            <th className="text-secondary ">Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => (
            <tr>
              <td>
                <div className="">
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm opacity-50">{item.email}</div>
                  </div>
                </div>
              </td>
              <td className="font-semibold font-xl">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{item.productName}</div>
                      <div className="text-sm opacity-50">Price Per Unit: {item.price}</div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-semibold text-xl">
                <span className="text-success font-semibold text-xl pl-4">
                  {" "}
                  ${item.total}
                </span>
              </td>
              <td className="font-semibold text-xl">{item.quantity}</td>
              <td>
                {item.paid && (
                  <button className="btn btn-success fw-bold">Pending</button>
                )}
                {!item.paid && (
                  <button className="btn btn-dark text-white fw-bold">
                    Unpaid
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
