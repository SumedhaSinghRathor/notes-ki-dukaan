import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar flex items-center justify-between w-screen bg-black text-white font-medium px-7.5 py-1">
      <div className="flex items-center gap-2 font-medium leading-5">
        <div className="h-12 w-12 text-3xl rounded-xl">
          <img src={logo} className="fill-white" alt="" />
        </div>
        NOTES <br />
        KI DUKAAN
      </div>
      <div>
        <input
          type="search"
          className="text-black bg-dark-orange font-bold w-full rounded-2xl px-8"
          placeholder="Search"
        />
      </div>
      <div className="h-10 w-10 bg-white rounded-4xl"></div>
    </div>
  );
}

export default Navbar;
