import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaAppStore, FaGithub } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";

const Navbar = () => {

  const location = useLocation();
  const [active, setActive] = useState("home");

  useEffect(() => {
    if (location.pathname === "/") setActive("home");
    else if (location.pathname === "/AllApps") setActive("apps");
    else if (location.pathname === "/Installation") setActive("install");
  }, [location]);

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
            <li>
              <Link to="/" className={`${active === "home" ? "bg-[#632EE3] text-white" : "text-gray-700"}`}>
                <IoHomeOutline />Home
              </Link>
            </li>
            <li>
              <Link to="/AllApps"className={`${active === "apps" ? "bg-[#632EE3] text-white" : ""}`}>
                <FaAppStore />Apps
              </Link>
            </li>
            <li>
              <Link to="/Installation" className={`${active === "install" ? "bg-[#632EE3] text-white" : ""}`}>
                <MdInstallDesktop />Installation
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex justify-center items-center gap-2">
          <img src={logo} alt="logo" className="h-8" />
          <span className="font-bold text-[#632EE3]">HERO.IO</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className={`${active === "home" ? "bg-[#632EE3] text-white" : ""}`}>
              <IoHomeOutline />
              <span className="text-base font-medium">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/AllApps" className={`${active === "apps" ? "bg-[#632EE3] text-white" : ""}`}>
              <FaAppStore />
              <span className="text-base font-medium">Apps</span>
            </Link>
          </li>
          <li>
            <Link to="/Installation" className={`${active === "install" ? "bg-[#632EE3] text-white" : ""}`}>
            <MdInstallDesktop />
            <span className="text-base font-medium">Installation</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={`https://github.com/shuvanath143`} className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
          <FaGithub />
          <span className="text-xs sm:text-base font-medium text-white">Contribution</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
