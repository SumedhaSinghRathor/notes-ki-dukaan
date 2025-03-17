import React from "react";
import img1 from "../assets/feature1img.png";
import img2 from "../assets/feature2img.png";
import img3 from "../assets/feature3img.png";

function Feature() {
  const featureContent = [
    {
      img: img1,
      text: "Share your notes and get access to viewing others as well.",
    },
    {
      img: img2,
      text: "Bookmark your notes for easy access later.",
    },
    {
      img: img3,
      text: "Helps you focus more on your studies than browsing around for study materials.",
    },
  ];

  const featureList = featureContent.map((feature, index) => (
    <div
      className={`feature w-94vw flex items-center justify-around mx-12 p-16 border-x-1 border-black ${
        index % 2 === 0
          ? "bg-orange-white"
          : "bg-white border-y-1 flex-row-reverse"
      }`}
    >
      <img
        src={feature.img}
        alt=""
        className="img1 size-64 shadow-[0.75em_0.75em_black] border-1 border-black"
      />
      <p
        className={`max-w-lg text-4xl font-semibold ${
          index % 2 === 0 ? "text-start" : "text-end"
        }`}
      >
        {feature.text}
      </p>
    </div>
  ));

  return <>{featureList}</>;
}

export default Feature;
