import React from "react";
import Thumbnail from "../Home/Thumbnail";

function User() {
  return (
    <>
      <div className="banner bg-dark-orange h-32 overflow-hidden">
        <div className="flex items-center gap-4 relative top-8 left-16">
          <div className="pfp size-30 bg-white"></div>
          <div className="name">
            <h1 className="text-4xl font-bold leading-10">UserName</h1>
            <p>#1 Uploader</p>
          </div>
        </div>
      </div>
      <div className="content w-full justify-between p-8 flex gap-8">
        <div className="box bg-orange-white w-72 border-1 border-black p-4 rounded-xl flex flex-col gap-4 shrink-0">
          <div className="">
            Semester / Date Joined <br />
            Rank : <b>1</b> <br />
            Total Uploads: <b>75</b>
          </div>
          <div className="heatmap bg-black p-2 rounded-lg flex flex-wrap gap-1">
            {Array.from({ length: 12 * 17 }).map((_) => (
              <div className="size-4 bg-white" />
            ))}
          </div>
        </div>
        <div className="bg-orange-white rounded-xl border-1 border-black flex-1 overflow-clip">
          <div className="flex font-bold text-xl bg-light-orange border-b-1 border-black">
            <div className="w-1/2 text-center py-0.5">My Uploads</div>
            <div className="w-1/2 text-center rounded-t-xl py-0.5 bg-black text-white">
              Bookmarks
            </div>
          </div>
          <div className="flex p-4 gap-4 overflow-scroll no-scrollbar flex-wrap">
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
