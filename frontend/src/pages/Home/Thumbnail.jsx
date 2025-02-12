import React from "react";

function Thumbnail() {
  return (
    <div className="w-[280px]">
      <div className="thumbnailimg w-[100%] h-[280px] bg-light-orange border-1 border-black"></div>
      <div className="info flex flex-col gap-[0.25em]">
        <div className="title_bookmark flex justify-between items-center">
          <div className="title font-bold text-[20.25em]">
            Basic Memory Unit
          </div>
          <div className="bookmark text-[20.25em]">🔖</div>
        </div>

        <div className="faculty text-[10.5em]">Anil Kumar Swain</div>
        <div className="tags_rating flex justify-between items-center">
          <div className="tags flex justify-between gap-3">
            <div className="tag_1 bg-light-orange py-2 px-4 rounded-[0.5em] border-1 border-black">
              COA
            </div>
            <div className="tag_2 bg-light-orange py-2 px-4 rounded-[0.5em] border-1 border-black">
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
    // <div>
    //   <div className="thumbnailimg"></div>
    //   <div className="info">
    //     <div className="title_bookmark">
    //       <div className="title">Basic Memory Unit</div>
    //       <div className="bookmark">
    //         <FontAwesomeIcon icon="fa-regular fa-bookmark" />
    //       </div>
    //     </div>
    //     <div className="faculty"></div>
    //     <div className="tags_rating">
    //       <div className="tag_1"></div>
    //       <div className="tag_2"></div>
    //       <div className="rating">
    //         <div className="num"></div>
    //         <div className="star"></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Thumbnail;
