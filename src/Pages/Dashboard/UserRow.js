import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch, index }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://manufacturer-website-g1e2.onrender.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <tr>
      <td>{index+1}</td>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button onClick={makeAdmin} className="btn btn-primary btn-xs">
            Make Admin
          </button>
        ):(
          <button className="btn btn-secondary btn-xs">
           Admin
        </button> 
        )}
      </td>
    </tr>
  );
};

export default UserRow;
