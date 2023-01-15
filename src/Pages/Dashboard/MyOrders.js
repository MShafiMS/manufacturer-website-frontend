import { signOut } from "firebase/auth";
import { React, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
const Myorders = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [products, setProduct] = useState([]);
  const [loading, setloading] = useState(true);
  const email = user?.email;
  const photo = user?.photoURL;
  const name = user?.displayName;

  useEffect(() => {
    if (user) {
      fetch(`https://manufacturer-website-g1e2.onrender.com/myorder?email=${email}`, {
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

  const deleteItems = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://manufacturer-website-g1e2.onrender.com/order/${id}`,
          {
            method: "DELETE",
          },
          [products]
        )
          .then((response) => response.json())
          .then((data) => {
            const remaining = products.filter((item) => item._id !== id);
            setProduct(remaining);
          });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  };
  return (
    <div className="overflow-x-auto">
      <h1 className="font-bold text-4xl text-secondary text-center my-4">
        My Orders
      </h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th className="text-secondary">User</th>
            <th className="text-secondary">Product Name</th>
            <th className="text-secondary">Quantity</th>
            <th className="text-success">Total</th>
            <th className="text-secondary ">Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => (
            <tr>
              <td>
                <div className="flex items-center space-x-3">
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
              <td className="font-semibold text-xl">{item.quantity}</td>
              <td className="font-semibold text-xl">
                <span className="text-success font-semibold text-xl pl-4">
                  {" "}
                  ${item.total}
                </span>
              </td>
              <th>
                {item.price && !item.paid && (
                  <>
                    <Link
                      to={`/payment/${item._id}`}
                      className="btn mr-2 btn-primary btn-xs"
                    >
                      Pay
                    </Link>

                    {/* <!-- The button to open modal --> */}
                    <button
                    onClick={() => deleteItems(item._id)}
                      for="my-modal-3"
                      class="btn btn-secondary btn-xs modal-button"
                    >
                      Delete
                    </button>
                  </>
                )}
                {item.price && item.paid && (
                  <p className="badge badge-success">
                    Transaction ID: {item?.transactionId}
                  </p>
                )}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Myorders;
