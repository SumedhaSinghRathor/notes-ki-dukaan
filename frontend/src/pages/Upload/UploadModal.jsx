import { useRef, useState } from "react";
import dummy_data from "../../assets/dummy_data.json";

function UploadModal({ onClose }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const yearKeys = dummy_data.years.map((yearObj) => Object.keys(yearObj)[0]);
  const [selectedYear, setSelectedYear] = useState(yearKeys[0]);
  const selectedYearObj = dummy_data.years.find(
    (yearObj) => Object.keys(yearObj)[0] === selectedYear
  );
  const subjectsArr = selectedYearObj ? selectedYearObj[selectedYear] : [];
  const subjectKeys = subjectsArr.map(
    (subjectObj) => Object.keys(subjectObj)[0]
  );

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No Selected File");

  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");

  const handleKeyDown = (e) => {
    const code = e.keyCode || e.which;
    const newTag = tag.trim();

    if ((code !== 13 && code !== 188) || tag.length === 0) {
      return;
    }

    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }

    setTimeout(() => {
      setTag("");
    }, 0);
  };

  const deleteTag = (index) => {
    const dupTags = [...tags];
    dupTags.splice(index, 1);
    setTags(dupTags);
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 flex justify-center items-center bg-black/75 backdrop-blur-sm"
    >
      <form className="flex bg-orange-white border border-black min-w-3xl max-w-4xl h-fit rounded-2xl gap-8 p-12 items-center">
        <div
          className="file w-60 min-h-84 border-black border rounded-2xl flex flex-col bg-white justify-center items-center cursor-pointer overflow-clip"
          onClick={() => document.querySelector(".input-field").click()}
        >
          <input
            type="file"
            className="input-field hidden"
            required
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);

              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />
          {image ? (
            <img src={image} className="w-full h-auto" alt="filename" />
          ) : (
            <i className="bx bxs-plus-circle text-orange-white text-6xl" />
          )}
          <span className="mt-3 flex-wrap text-center">{fileName}</span>
        </div>
        <div className="form flex flex-col gap-4">
          <div className="info flex flex-col gap-2">
            <div className="title">
              <label htmlFor="">
                Title of Document: <br />
                <input
                  type="text"
                  required
                  className="bg-white border border-black rounded-lg w-full px-2 py-1 focus:outline-none"
                />
              </label>
            </div>
            <div className="faculty flex justify-between">
              <label htmlFor="">
                Faculty: <br />
                <input
                  type="text"
                  required
                  className="bg-white border border-black rounded-lg w-48 px-2 py-1 focus:outline-none"
                />
              </label>
              <label htmlFor="">
                Branch: <br />
                <select className="bg-white w-48 border border-black rounded-lg px-2 py-1.5 focus:outline-none">
                  <option>CSE</option>
                  <option>IT</option>
                  <option>CSCE</option>
                  <option>CSSE</option>
                </select>
              </label>
            </div>
            <div className="time flex justify-between">
              <label htmlFor="">
                Year: <br />
                <select
                  className="bg-white border border-black rounded-lg w-48 px-2 py-1.5 focus:outline-none"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  {yearKeys.map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </select>
              </label>
              <div className="subject">
                <label htmlFor="">
                  Subject: <br />
                  <select className="bg-white border border-black rounded-lg w-48 px-2 py-1.5 focus:outline-none">
                    {subjectKeys.map((subject) => (
                      <option key={subject}>{subject}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            <div className="tags">
              <label htmlFor="">
                Topics: <br />
                <div className="tag-container bg-white border border-black rounded-lg min-w-100 max-w-120 flex flex-wrap items-center gap-1 p-1">
                  {tags.map((tag, index) => (
                    <div className="tag bg-black text-dark-orange py-0.5 rounded-full px-2 flex items-center gap-1">
                      <span className="name">{tag}</span>
                      <i
                        className="bx bx-x text-lg cursor-pointer"
                        onClick={() => deleteTag(index)}
                      />
                    </div>
                  ))}
                  <input
                    type="text"
                    id="tag-input"
                    placeholder="Press the enter key to add a tag"
                    value={tag}
                    maxLength={50}
                    onChange={(e) => setTag(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="px-2 py-1 focus:outline-none grow"
                  />
                </div>
              </label>
            </div>
            <div className="type flex justify-evenly">
              <div className="handwritten">
                <label htmlFor="" className="flex items-center">
                  <input
                    type="radio"
                    name="format"
                    className="accent-dark-orange"
                  />
                  &ensp; Handwritten
                </label>
              </div>
              <div className="digital">
                <label htmlFor="" className="flex items-center">
                  <input
                    type="radio"
                    name="format"
                    className="accent-dark-orange"
                  />
                  &ensp; Digital
                </label>
              </div>
            </div>
          </div>
          <button
            id="uploadModal"
            className="uploadModal font-bold text-center px-8 py-2 border border-black rounded-lg bg-dark-orange text-black w-full cursor-pointer active:bg-black active:text-dark-orange"
          >
            UPLOAD
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadModal;
