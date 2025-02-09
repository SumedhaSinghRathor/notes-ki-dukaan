import React from "react";

function Footer() {
  return (
    <div className="flex w-screen bg-zinc-900 items-center justify-between relative py-2.5 px-7.5 text-[1.2em]">
      <span className="text-white">
        Made by{" "}
        <a
          href="https://www.linkedin.com/in/sumedha-singh-rathor-93874726a/"
          target="_black"
        >
          Sumedha
        </a>{" "}
        +{" "}
        <a
          href="https://www.linkedin.com/in/yashi-garg-9845a4259/"
          target="_blank"
        >
          Yashi
        </a>
      </span>
      <span>🧡</span>
    </div>
  );
}

export default Footer;
