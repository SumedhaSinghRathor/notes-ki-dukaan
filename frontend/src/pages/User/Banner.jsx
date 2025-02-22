import React from "react";

function Banner() {
  return (
    <div className="banner fixed top-0 left-0 -z-10 w-full h-52 bg-red-500">
      <div className="pfp absolute w-40 h-40 bg-light-orange -bottom-8 left-10"></div>
      <div className="text absolute left-54 text-white bottom-2">
        <span className="font-bold text-4xl">Soumya Gupta</span>
        <br />
        <span>#1 Top Uploader / #1 Most Rated Uploader</span>
      </div>
    </div>
  );
}

export default Banner;
