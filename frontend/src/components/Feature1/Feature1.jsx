import React from "react";
import img from "../../assets/feature1img.png";

function Feature1() {
  return (
    <div className="feature1 bg-orange-white w-94vw flex flex-wrap items-center justify-around mx-12 p-16 border-1 border-black -mt-10">
      <img
        src={img}
        alt=""
        className="img1 w-64 h-64 shadow-[1em_1em_black] border-1 border-black"
      />
      <p className="max-w-md text-3xl font-semibold text-start">
        Share your notes and get access to viewing others as well.
      </p>
    </div>
  );
}

export default Feature1;
