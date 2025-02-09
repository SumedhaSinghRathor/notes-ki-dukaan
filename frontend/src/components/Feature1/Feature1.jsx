import React from "react";
import "./Feature1.css";

function Feature1() {
  return (
    <div className="feature1 w-94vw flex flex-wrap items-center justify-between mx-[3em] p-[4em] border-1 border-black">
      <div className="img1 w-[16em] h-[16em] shadow-[10px_10px_#131013] border-1 border-black"></div>
      <p className="max-w-[675px] text-[2em] font-semibold text-start">
        Share your notes and get access to viewing others as well.
      </p>
    </div>
  );
}

export default Feature1;
