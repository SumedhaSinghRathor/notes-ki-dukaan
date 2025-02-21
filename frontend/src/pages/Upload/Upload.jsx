import React from "react";

function Upload() {
  return (
    <div className="flex bg-orange-white border-1 border-black w-fit h-fit rounded-[1em] gap-[2em] p-[3em]">
      <div className="file">
        <input
          type="file"
          className="w-[20em] h-full rounded-[1em] bg-white border-1 border-black"
        />
      </div>
      <div className="form flex flex-col gap-[1em]">
        <div className="info flex flex-col gap-[0.5em]">
          <div className="title">
            <label htmlFor="">
              Title of Document: <br />
              <input
                type="text"
                className="bg-white border-1 border-black rounded-[0.5em] w-[25em] px-[0.5em] py-[0.25em]"
              />
            </label>
          </div>
          <div className="faculty">
            <label htmlFor="">
              Faculty: <br />
              <input
                type="text"
                className="bg-white border-1 border-black rounded-[0.5em] w-[25em] px-[0.5em] py-[0.25em]"
              />
            </label>
          </div>
          <div className="time flex justify-between">
            <div className="year">
              <label htmlFor="">
                Year: <br />
                <input
                  type="year"
                  className="bg-white border-1 border-black rounded-[0.5em] w-[10em] px-[0.5em] py-[0.25em]"
                />
              </label>
            </div>
            <div className="semester">
              <label htmlFor="">
                Semester: <br />{" "}
                <input
                  type="text"
                  className="bg-white border-1 border-black rounded-[0.5em] w-[10em] px-[0.5em] py-[0.25em]"
                />
              </label>
            </div>
          </div>
          <div className="tags">
            <label htmlFor="">
              Topics: <br />
              <input
                type="text"
                className="bg-white border-1 border-black rounded-[0.5em] w-[25em] px-[0.5em] py-[0.25em]"
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
        <button className="upload font-bold text-center px-[2em] py-[0.5em] border-1 border-black rounded-[0.5em] bg-dark-orange text-black w-[25em]">
          UPLOAD
        </button>
      </div>
    </div>
  );
}

export default Upload;
