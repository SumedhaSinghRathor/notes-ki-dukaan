import React from "react";
import "./Feature3.css";
import img from "../../assets/feature3img";

function Feature3() {
  return (
    <div className="feature3 bg-orange-white w-94vw flex flex-wrap items-center justify-between mx-[3em] p-[4em] border-1 border-black">
      <div className="img3 w-[16em] h-[16em] shadow-[2em_2em_#131013] border-1 border-black">
        {img}
      </div>
      <p className="max-w-[675px] text-[2em] font-semibold text-start">
        Helps you focus more on your studies than browsing around for study
        materials.
      </p>
    </div>
  );
}

export default Feature3;
