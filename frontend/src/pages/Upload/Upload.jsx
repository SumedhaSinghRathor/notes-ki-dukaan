import React from "react";
import Navbar from "../../components/Navbar";
import UploadDialog from "./UploadDialog";
import Footer from "../../components/Footer";

function Upload() {
  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center">
      <Navbar />
      <UploadDialog />
      <Footer className="fixed bottom-0" />
    </div>
  );
}

export default Upload;
