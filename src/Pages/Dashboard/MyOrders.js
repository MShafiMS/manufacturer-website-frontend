import { React, useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
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
      fetch(`https://aqueous-cove-16160.herokuapp.com/myorder?email=${email}`, {
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
    const proceed = window.confirm("Are you sure to delete this order?");
    if (proceed) {
      fetch(
        `https://aqueous-cove-16160.herokuapp.com/order/${id}`,
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
    }
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
            <th className="text-secondary">
              Product Name / <span className="text-success"> Price</span>
            </th>
            <th className="text-secondary">Quantity</th>
            <th className="text-secondary">Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => (
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user?.photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm opacity-50">{item.email}</div>
                  </div>
                </div>
              </td>
              <td className="font-semibold font-xl">
                {item.productName}
                <span className="text-success font-semibold text-xl pl-4">
                  {" "}
                  {item.price}
                </span>
              </td>
              <td className="font-semibold text-xl">{item.quantity}</td>
              <th>
                {item.price && !item.paid && (
                  <>
                    <Link
                      to={`/dashboard/payment/${item._id}`}
                      className="btn mr-2 btn-primary btn-xs"
                    >
                      Pay
                    </Link>

                    {/* <!-- The button to open modal --> */}
                    <label
                      for="my-modal-3"
                      class="btn btn-secondary btn-xs modal-button"
                    >
                      Delete
                    </label>

                    {/* <!-- Put this part before </body> tag --> */}
                    <input
                      type="checkbox"
                      id="my-modal-3"
                      class="modal-toggle"
                    />
                    <div class="modal">
                      <div class="modal-box relative w-80">
                        <h3 class="text-lg font-bold">
                          Delete Order?
                        </h3>
                        <p class="py-4">
                        Are you sure to delete this order?
                        </p>
                        <button
                          onClick={() => deleteItems(item._id)}
                          className="btn btn-secondary btn-sm ml-32"
                        >
                          Delete
                        </button>
                        <label
                          for="my-modal-3"
                          class="btn btn-sm absolute ml-2 right-3"
                        >
                          Cancle
                        </label>
                      </div>
                    </div>
                  </>
                )}
                {item.price && item.paid && (
                  <p>Transaction ID: {item?.transactionId}</p>
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
