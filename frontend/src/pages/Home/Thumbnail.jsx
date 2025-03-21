import React from "react";
import { Link } from "react-router-dom";

function Thumbnail() {
  const handleClick = () => console.log("Turn to solid bookmark");

  return (
    <div className="w-3xs flex flex-col gap-1.5">
      <Link className="thumbnailimg w-full h-44 bg-light-orange border-1 border-black"></Link>
      <div className="info flex flex-col gap-1">
        <div className="title_bookmark flex justify-between items-center">
          <Link to="/view" className="title font-bold text-2xl hover:underline">
            Basic Memory Unit
          </Link>
          <i className="bx bx-bookmark text-2xl flex justify-center items-center text-dark-orange"></i>
        </div>

        <div className="faculty text-base hover:underline">
          Anil Kumar Swain
        </div>
        <div className="tags_rating flex justify-between items-center w-full">
          <div className="tags flex justify-between gap-2 whitespace-nowrap overflow-clip">
            <div className="tag bg-light-orange hover:bg-dark-orange transition-colors py-1 px-2 rounded-lg border-1 border-black text-xs">
              COA
            </div>
          </div>
          <div className="rating flex justify-between gap-2 items-center">
            <div className="num">4.27</div>
            <i
              className="bx bxs-star text-2xl text-dark-orange"
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
