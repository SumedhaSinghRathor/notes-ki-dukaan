import React from "react";
import Thumbnail from "./Thumbnail";
import ThumbnailList from "./ThumbnailList";

function Home() {
  const list = false;
  return (
    <div>
      <div className="w-full h-fit p-10">
        {list ? (
          <div>
            {Array.from({ length: 9 }).map((_, index) => (
              <ThumbnailList key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row auto-rows-min gap-12">
            {Array.from({ length: 9 }).map((_) => (
              <Thumbnail />
            ))}
          </div>
        )}
      </div>
      <div className="more mx-auto rounded-lg my-4 align-center border-2 font-bold border-black px-10 py-2 w-fit hover:bg-dark-orange cursor-pointer">
        Load More
      </div>
    </div>
  );
}

export default Home;
