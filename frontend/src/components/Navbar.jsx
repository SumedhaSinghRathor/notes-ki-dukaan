import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar flex items-center justify-between w-screen bg-black text-white font-medium px-[50px] py-[5px]">
      <div className="flex items-center gap-[0.5em] font-medium leading-5">
        <div className="h-[50px] w-[50px] text-[2em] rounded-[0.25em]">
          <img src={logo} className="fill-white" alt="" />
        </div>
        NOTES <br />
        KI DUKAAN
      </div>
      <div>
        <input
          type="search"
          className="text-black bg-dark-orange font-bold w-[900px] rounded-[20px] px-[2em]"
          placeholder="Search"
        />
      </div>
      <div className="h-[50px] w-[50px] bg-white rounded-[2em]"></div>
    </div>
  );
}

export default Navbar;
