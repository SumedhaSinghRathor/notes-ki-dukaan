import React from "react";
import Rating from "../../components/Rating/Rating";

function View() {
  return (
    <div className="w-full h-fit flex flex-col items-center mt-12">
      <h1 className="text-5xl font-bold">Basic Processing Unit</h1>
      <div className="pdf w-[816px] h-[1056px] bg-dark-orange my-8"></div>
      <Rating />
    </div>
  );
}

export default View;
