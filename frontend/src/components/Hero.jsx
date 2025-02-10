import React from "react";
import Cta from "./Cta";

function Hero() {
  return (
    <div className="hero w-94vw flex flex-col items-center justify-center gap-[2em] mx-[3em] py-[8em] border-x-1 border-black">
      <div>
        <h1 className="font-heading text-[5em] text-center underline my-[-0.25em]">
          Notes ki Dukaan
        </h1>
        <h2 className="font-heading text-[2em] text-center text-dark-orange">
          Only for KIITians
        </h2>
      </div>
      <Cta />
    </div>
  );
}

export default Hero;
