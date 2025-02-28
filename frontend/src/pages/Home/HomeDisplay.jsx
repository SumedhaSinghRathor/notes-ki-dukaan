import React from "react";
import Thumbnail from "./Thumbnail";

function HomeDisplay() {
  const handleClick = () => console.log("Load More PDFs");

  return (
    <div>
      <div className="w-full h-fit p-10 grid grid-cols-4 grid-flow-row auto-rows-min gap-12">
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
      <div
        className="more mx-auto rounded-lg my-2 align-center border-2 font-bold border-black px-10 py-2 w-fit hover:bg-dark-orange cursor-pointer"
        onClick={handleClick}
      >
        Load More
      </div>
    </div>
  );
}

export default HomeDisplay;
