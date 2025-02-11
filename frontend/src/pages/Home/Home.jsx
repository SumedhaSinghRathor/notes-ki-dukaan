import React from "react";
import Thumbnail from "./Thumbnail";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <div className="flex flex-wrap justify-around p-[1.6em]">
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
      <Footer className="fixed bottom-0" />
      <p>This is from the Yashu branch</p>
    </div>
  );
}

export default Home;
