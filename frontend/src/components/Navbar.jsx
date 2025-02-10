import React from "react";

function Navbar() {
  return (
    <div className="navbar flex items-center justify-between w-screen bg-black text-white font-medium px-[50px] py-[5px]">
      <div className="flex items-center gap-[10px]">
        <div className="h-[50px] w-[50px] bg-white rounded-[5px]"></div>
        NOTES <br />
        KI DUKAAN
      </div>
      <div className="text-black bg-dark-orange text-center font-bold w-[900px] rounded-[20px]">
        SEARCH BAR
      </div>
      <div className="h-[50px] w-[50px] bg-white rounded-[10px]"></div>
    </div>
  );
}

export default Navbar;
