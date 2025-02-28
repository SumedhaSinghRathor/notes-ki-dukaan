import React from "react";
import img from "../../assets/feature3img.png";

function Feature3() {
  return (
    <div className="feature3 bg-orange-white w-94vw flex flex-wrap items-center justify-around mx-12 p-16 border-x-1 border-t-1 border-black">
      <img
        src={img}
        alt=""
        className="img3  w-64 h-64 shadow-[1em_1em_black] border-1 border-black"
      />
      <p className="max-w-md text-3xl font-semibold text-start">
        Helps you focus more on your studies than browsing around for study
        materials.
      </p>
    </div>
  );
}

export default Feature3;
