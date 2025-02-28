import React from "react";
import img from "../../assets/feature2img.png";

function Feature2() {
  return (
    <div className="feature2 w-94vw flex flex-wrap items-center justify-around mx-12 p-16 border-x-1 border-black">
      <p className="max-w-md text-3xl font-semibold text-end">
        Bookmark your notes for easy access later.
      </p>
      <img
        src={img}
        alt=""
        className="img2 w-64 h-64 shadow-[1em_1em_black] border-1 border-black"
      />
    </div>
  );
}

export default Feature2;
