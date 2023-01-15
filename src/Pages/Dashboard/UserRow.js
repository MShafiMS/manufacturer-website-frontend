import React, { useState } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import { toast, ToastContainer } from "react-toastify";
import primaryAxios from "../../Api/primaryAxios";

const UserRow = ({ user, refetch, index }) => {
  const { email, role } = user;
  const [loading, setLoading] = useState(false);
  const makeAdmin = () => {
    setLoading(true);
    primaryAxios.put(`/user/admin/${email}`).then((res) => {
      console.log(res);
      if (res.status === 403) {
        toast.error("Failed to make admin");
      }
      if (res?.data?.modifiedCount > 0) {
        refetch();
        setLoading(false);
        toast.success(`${email} is now an admin!`);
      }
    });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button onClick={makeAdmin} className="btn btn-primary btn-xs">
            Make Admin
            {loading && <CgSpinnerTwo className="ml-1 animate-spin" />}
          </button>
        ) : (
          <button className="btn btn-secondary btn-xs">Admin</button>
        )}
      </td>
      <ToastContainer />
    </tr>
  );
};

export default UserRow;
