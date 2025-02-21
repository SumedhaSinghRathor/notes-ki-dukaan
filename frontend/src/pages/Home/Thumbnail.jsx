import React from "react";

function Thumbnail() {
  return (
    <div className="w-[240px]">
      <div className="thumbnailimg w-[100%] h-[240px] bg-light-orange border-1 border-black"></div>
      <div className="info flex flex-col gap-1">
        <div className="title_bookmark flex justify-between items-center">
          <div className="title font-bold text-[1.4em]">Basic Memory Unit</div>
          <div className="bookmark text-[1.4em]">🔖</div>
        </div>

        <div className="faculty text-[1em]">Anil Kumar Swain</div>
        <div className="tags_rating flex justify-between items-center">
          <div className="tags flex justify-between gap-3">
            <div className="tag_1 bg-light-orange py-2 px-4 rounded-[0.5em] border-1 border-black text-xs">
              COA
            </div>
            <div className="tag_2 bg-light-orange py-2 px-4 rounded-[0.5em] border-1 border-black text-xs">
              HPC
            </div>
          </div>
          <div className="rating flex justify-between gap-[0.5em]">
            <div className="num">4.27</div>
            <div className="star">⭐</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
