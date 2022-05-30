import { UserIcon } from "@heroicons/react/solid";
import { signOut } from "firebase/auth";
import React from "react";
import { Nav } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../logo.png";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>{user ? <Link to="/dashboard/myprofile">Dashboard</Link> : <></>}</li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>{user ? <Link to="/myportfolio">My Portfolio</Link> : <></>}</li>
      
    </>
  );
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/">
          <div className="items-center grid-flow-col-2 flex">
            <img className="w-16 h-8 lg:ml-10 bg-black" src={logo} alt="" />
          </div>
        </Link>
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-medium">{menuItems}</ul>
        </div>
        {user ? (<div className="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={'/dashboard/myprofile'} className="justify-between">
                Profile
                <span className="badge badge-primary">Update</span>
              </Link>
            </li>
            <li>
              <Link to={"dashboard/myorders"}>
                My Order
              </Link>
            </li>
            <li>
              <a className="btn btn-error  text-white" onClick={handleSignOut}>Logout</a>
            </li>
          </ul>
        </div>) : (<div className="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <UserIcon></UserIcon>
            </div>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={'/dashboard/myprofile'} className="justify-between">
                Profile
                <span className="badge badge-primary">Update</span>
              </Link>
            </li>
            <li>
            <Nav.Link
            as={Link}
            to="/login"
            className="btn mt-2 btn-primary text-white"
          >
            Login
          </Nav.Link>
            </li>
          </ul>
        </div>)}
      </div>
    </div>
  );
};

export default Navbar;
