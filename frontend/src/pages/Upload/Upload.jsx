import React from "react";

function Upload() {
  return (
    <div className="flex bg-orange-white border-1 border-black w-fit h-fit">
      <div className="file">
        <label htmlFor="">
          {" "}
          Upload a file:
          <input type="file" />
        </label>
      </div>
      <div className="form">
        <div className="info">
          <div className="title">
            <label htmlFor="">
              Title of Document: <br /> <input type="text" />
            </label>
          </div>
          <div className="faculty">
            <label htmlFor="">
              Faculty: <br />
              <input type="text" />
            </label>
          </div>
          <div className="time">
            <div className="year">
              <label htmlFor="">
                Year: <br />
                <input type="year" />
              </label>
            </div>
            <div className="semester">
              <label htmlFor="">
                Semester: <br /> <input type="text" />
              </label>
            </div>
          </div>
          <div className="tags">
            <label htmlFor="">
              Topics: <input type="text" />
            </label>
          </div>
          <div className="type">
            <div className="handwritten">
              <label htmlFor="">
                <input type="checkbox" /> Handwritten
              </label>
            </div>
            <div className="digital">
              <label htmlFor="">
                <input type="checkbox" /> Digital
              </label>
            </div>
          </div>
        </div>
        <div className="upload">UPLOAD</div>
      </div>
    </div>
  );
}

export default Upload;
