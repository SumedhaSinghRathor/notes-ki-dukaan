import React from "react";
import logo from "../assets/logo.png";

function Test() {
  return (
    <>
      <div className="navbar bg-black text-white flex justify-between items-center px-7.5 py-1 gap-8">
        <div className="logo flex items-center w-fit gap-2 shrink-0">
          <div className="size-12">
            <img src={logo} className="fill-white" alt="" />
          </div>
          <p className="font-medium leading-5 text-lg">
            NOTES KI <br /> DUKAAN
          </p>
        </div>
        <div className="search w-full grow">
          <input
            type="search"
            placeholder="Search"
            className="font-bold text-black rounded-2xl bg-dark-orange px-6 w-full"
          />
        </div>
        <div className="pfp size-10 rounded-lg bg-white shrink-0"></div>
      </div>
    </>
  );
}

export default Test;
