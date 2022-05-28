import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="">
                <label tabIndex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
                <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
                </label>
            </div>
        <a className="text-secondary pl-5 font-semibold text-xl">Dashboard</a>
      </div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="bg-base-100 drawer-content">
          <h2 className="text-2xl font-bold text-accent">
            Welcome to your Dashboard
          </h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="font-medium text-warning menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard/myprofile">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/myorders">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addreview">Add Review</Link>
            </li>
            <li>
              <Link to="/dashboard/manageallorders">Manage All Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addproduct">Add A Product</Link>
            </li>
            <li>
              <Link to="/dashboard/manageproduct">Manage Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
