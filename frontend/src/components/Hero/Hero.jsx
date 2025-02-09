import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero w-94vw flex flex-col items-center justify-center gap-[2em] mx-[3em] py-[9em] border-x-1 border-black">
      <div>
        <h1 className="font-heading text-[5em] text-center underline my-[-0.25em]">
          Notes ki Dukaan
        </h1>
        <h2 className="font-heading text-[2em] text-center">
          Only for KIITians
        </h2>
      </div>
      <div className="CTA w-fit font-bold text-[1.5em] px-10 py-2.5 rounded-[20px]">
        Get Started
      </div>
    </div>
  );
}

export default Hero;
