import React from "react";

function Footer() {
  return (
    <div className="flex w-screen fixed-0 bottom-0 bg-black items-center justify-between py-2.5 px-7.5">
      <span className="text-white text-sm">
        Made by{" "}
        <u>
          <a
            href="https://www.linkedin.com/in/sumedha-singh-rathor-93874726a/"
            target="_black"
          >
            Sumedha
          </a>
        </u>{" "}
        +{" "}
        <u>
          <a
            href="https://www.linkedin.com/in/yashi-garg-9845a4259/"
            target="_blank"
          >
            Yashi
          </a>
        </u>
      </span>
      <span className="text-xl">
        <a
          href="https://github.com/SumedhaSinghRathor/notes-ki-dukaan"
          target="_blank"
          title=""
        >
          🧡
        </a>
      </span>
    </div>
  );
}

export default Footer;
