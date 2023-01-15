import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

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
        <a className="text-secondary pl-5 font-semibold text-2xl">Dashboard</a>
      </div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="bg-base-100 drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="font-medium text-warning menu p-4 gap-3 bg-base-200 ">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink to="/dashboard/myprofile">My Profile</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myorders">My Orders</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addreview">Add Review</NavLink>
            </li>
            {admin && <li>
              <NavLink to="/dashboard/users">Users</NavLink>
            </li>}
            
            {admin && <li>
              <NavLink to="/dashboard/manageallorders">Manage All Orders</NavLink>
            </li>}
            
            {admin && <li>
              <NavLink to="/dashboard/addproduct">Add A Product</NavLink>
            </li>}
            
            {admin && <li>
            <NavLink to="/dashboard/manageproduct">Manage Products</NavLink>
            </li>}
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
