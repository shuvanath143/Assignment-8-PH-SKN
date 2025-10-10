import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleOnApps = (e) => {
    e.preventDefault();
    window.open("/AppStore", "_blank");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link to="/">Home</Link>
            {/* <li>
              <a>Home</a>
            </li> */}
            <li>
              <a>Apps</a>
            </li>
            <li>
              <a>Installation</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src={logo} alt="hiiii" className="h-8" />
          <span className="font-bold text-[#632EE3]">HERO.IO</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/Root">Home</Link>
          </li>
          <li>
            <Link to="/AppStore" onClick={handleOnApps}>
              Apps
            </Link>
          </li>
          <li>
            <a>Installation</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={`https://github.com/shuvanath143`} className="btn">
          Contribution
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
