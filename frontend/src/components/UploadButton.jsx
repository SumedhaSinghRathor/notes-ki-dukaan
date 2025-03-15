import React, { useState } from "react";
import UploadModal from "../pages/Upload/UploadModal";

function UploadButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i
        onClick={() => setShowModal(true)}
        className="bx bx-plus text-5xl bg-dark-orange fixed bottom-8 right-5 rounded-4xl cursor-pointer"
      ></i>
      {showModal && <UploadModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default UploadButton;
