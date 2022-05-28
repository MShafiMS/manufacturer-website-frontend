import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div class="navbar bg-base-200">
        <a class="btn btn-ghost normal-case text-xl">Dashboard</a>
      </div>
      <ul class="menu bg-base-200 w-56 p-2">
        <li>
          <a>My Profile</a>
        </li>
        <li>
          <a>My Orders</a>
        </li>
        <li>
          <a>Add Review</a>
        </li>
        <li>
          <a>Manage All Orders</a>
        </li>
        <li>
          <a>Add A Product</a>
        </li>
        <li>
          <a>Manage Products</a>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
