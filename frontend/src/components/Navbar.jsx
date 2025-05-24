import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Test() {
  console.log(window.location);
  return (
    <>
      <ul className="navbar bg-black text-white flex justify-between items-center px-7.5 py-1 gap-8">
        <Link to="/home" className="shrink-0">
          <li className="logo flex items-center w-fit gap-2">
            <div className="size-12">
              <img src={logo} className="fill-white" alt="" />
            </div>
            <p className="font-medium leading-5 text-lg">
              NOTES KI <br /> DUKAAN
            </p>
          </li>
        </Link>
        <li className="search w-full grow">
          <input
            type="search"
            placeholder="Search"
            className="font-bold focus:outline-none text-black rounded-2xl bg-dark-orange px-6 w-full"
          />
        </li>
        <Link to="/user">
          <li className="pfp size-10 rounded-lg bg-white shrink-0"></li>
        </Link>
      </ul>
    </>
  );
}

export default Test;
