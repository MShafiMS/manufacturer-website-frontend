import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
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
      fetch(`http://localhost:5000/order`, {
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
    <div>
      <h1 className="font-bold text-4xl text-secondary text-center my-4">Manage Orders</h1>
      <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="text-secondary">User</th>
            <th className="text-secondary">Product Name / Price</th>
            <th className="text-secondary">Quantity</th>
            <th className="text-secondary">Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => (
            <div className=" ro font-bold">
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">{item.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.productName}

                    <span className="badge badge-accent ml-4">
                      ${item.price}
                    </span>
                  </td>
                  <td>{item.quantity}</td>
                  <td>
                    {item.paid && (
                      <button className="btn btn-dark fw-bold">Pending</button>
                    )}
                    {!item.paid && (
                      <button className="btn btn-dark fw-bold">Unpaid</button>
                    )}
                  </td>
                </tr>
              </tbody>
            </div>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ManageOrders;
