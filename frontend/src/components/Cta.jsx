import React from "react";
import { Link } from "react-router-dom";

function Cta() {
  return (
    <Link
      to="/user"
      className="CTA btn w-fit font-bold bg-black text-dark-orange text-2xl px-10 py-2.5 rounded-full hover:bg-dark-orange hover:text-black transition-colors border-2 border-black"
    >
      Get Started
    </Link>
  );
}

export default Cta;
