import React, { useRef } from "react";

function UploadModal({ onClose }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 flex justify-center items-center bg-black/75 backdrop-blur-sm"
    >
      <div className="flex bg-orange-white border-1 border-black w-fit h-fit rounded-2xl gap-8 p-12">
        <div className="file w-60 border-black border-1 rounded-2xl flex flex-col bg-white justify-center items-center">
          <input
            type="file"
            className="w-70 h-full rounded-2xl bg-white border-1 border-black hidden"
          />
          <i className="bx bxs-plus-circle text-orange-white text-6xl"></i>
          <span className="mt-3 flex-wrap hidden">{}</span>
        </div>
        <div className="form flex flex-col gap-4">
          <div className="info flex flex-col gap-2">
            <div className="title">
              <label htmlFor="">
                Title of Document: <br />
                <input
                  type="text"
                  className="bg-white border-1 border-black rounded-lg w-100 px-2 py-1"
                />
              </label>
            </div>
            <div className="faculty">
              <label htmlFor="">
                Faculty: <br />
                <input
                  type="text"
                  className="bg-white border-1 border-black rounded-lg w-100 px-2 py-1"
                />
              </label>
            </div>
            <div className="time flex justify-between">
              <div className="year">
                <label htmlFor="">
                  Year: <br />
                  <input
                    type="year"
                    className="bg-white border-1 border-black rounded-lg w-40 px-2 py-1"
                  />
                </label>
              </div>
              <div className="semester">
                <label htmlFor="">
                  Semester: <br />{" "}
                  <input
                    type="text"
                    className="bg-white border-1 border-black rounded-lg w-40 px-2 py-1"
                  />
                </label>
              </div>
            </div>
            <div className="tags">
              <label htmlFor="">
                Topics: <br />
                <input
                  type="text"
                  className="bg-white border-1 border-black rounded-lg w-100 px-2 py-1"
                />
              </label>
            </div>
            <div className="type flex justify-evenly">
              <div className="handwritten">
                <label htmlFor="" className="flex items-center">
                  <input type="checkbox" /> &ensp; Handwritten
                </label>
              </div>
              <div className="digital">
                <label htmlFor="" className="flex items-center">
                  <input type="checkbox" /> &ensp; Digital
                </label>
              </div>
            </div>
          </div>
          <button className="uploadModal font-bold text-center px-8 py-2 border-1 border-black rounded-lg bg-dark-orange text-black w-100">
            UPLOAD
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadModal;
