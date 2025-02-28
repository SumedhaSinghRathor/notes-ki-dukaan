import React from "react";

function Thumbnail() {
  const handleClick = () => console.log("Turn to solid bookmark");

  return (
    <div className="w-3xs flex flex-col gap-1.5">
      <div className="thumbnailimg w-full h-44 bg-light-orange border-1 border-black"></div>
      <div className="info flex flex-col gap-1">
        <div className="title_bookmark flex justify-between items-center">
          <div className="title font-bold text-2xl">Basic Memory Unit</div>
          <i className="bx bx-bookmark text-2xl flex justify-center items-center text-dark-orange"></i>
        </div>

        <div className="faculty text-base">Anil Kumar Swain</div>
        <div className="tags_rating flex justify-between items-center">
          <div className="tags flex justify-between gap-3">
            <div className="tag_1 bg-light-orange py-2 px-4 rounded-lg border-1 border-black text-xs">
              COA
            </div>
            <div className="tag_2 bg-light-orange py-2 px-4 rounded-lg border-1 border-black text-xs">
              HPC
            </div>
          </div>
          <div className="rating flex justify-between gap-2 items-center">
            <div className="num leading-1">4.27</div>
            <i
              className="bx bxs-star text-2xl text-yellow-300"
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
