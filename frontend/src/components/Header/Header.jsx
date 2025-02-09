import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="flex w-screen bg-zinc-900 items-center justify-center relative p-2.5">
      <p className="font-semibold text-white">
        Can't find what you're looking for?
      </p>
    </div>
  );
}

export default Header;
