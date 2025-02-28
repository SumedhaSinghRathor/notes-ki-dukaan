import React from "react";
import Navbar from "../../components/Navbar";
import CreateAccDialog from "./CreateAccDialog";
import Footer from "../../components/Footer";

function CreateAcc() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-between">
      <Navbar />
      <CreateAccDialog />
      <Footer />
    </div>
  );
}

export default CreateAcc;
