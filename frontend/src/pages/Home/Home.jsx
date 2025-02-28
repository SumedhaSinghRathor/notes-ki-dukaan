import React from "react";
import Navbar from "../../components/Navbar";
import HomeDisplay from "./HomeDisplay";
import Footer from "../../components/Footer";
import UploadButton from "../../components/UploadButton";

function Home() {
  return (
    <div>
      <Navbar />
      <HomeDisplay />
      <Footer />
      <UploadButton />
    </div>
  );
}

export default Home;
