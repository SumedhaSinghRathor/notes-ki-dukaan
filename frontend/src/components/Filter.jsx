import { useState } from "react";
import Search from "./Search";

function Filter() {
  const [toggle, setToggle] = useState(false);
  const [year, setYear] = useState("1st");
  const firstYearSubjects = [
    "Physics",
    "DE & LA",
    "SLS",
    "EVS",
    "Chemistry",
    "B.Etc",
    "English",
    "Comm Lab",
  ];
  const secondYearSubjects = [
    "P&S",
    "IND 4.0",
    "DS",
    "DSD",
    "AFL",
    "DSS",
    "OS",
    "OOPS",
    "DBMS",
    "COA",
  ];
  const thirdYearSubjects = ["EE", "DAA", "SE", "CN", "ML", "AI", "UHV"];
  const fourthYearSubjects = [
    "I",
    "don't",
    "know",
    "the",
    "subjects",
    "of",
    "this",
    "year",
  ];
  const getSubjectsForYear = () => {
    switch (year) {
      case "1st":
        return firstYearSubjects;
      case "2nd":
        return secondYearSubjects;
      case "3rd":
        return thirdYearSubjects;
      case "4th":
        return fourthYearSubjects;
      default:
        return [];
    }
  };

  const [tag, setTag] = useState(null);

  return (
    <section className="p-4 flex flex-col gap-2">
      <div className="p-2 bg-light-orange/40 rounded">
        <div
          className="flex items-center justify-between cursor-pointer font-bold"
          onClick={() => setToggle(!toggle)}
        >
          <span>Sort & Filter</span>
          <i
            className={`bx text-2xl ${
              toggle ? "bxs-minus-circle" : "bxs-plus-circle"
            }`}
          />
        </div>
        <div className={`${toggle ? "" : "hidden"}`}>
          <div className="p-2">
            <div className="flex items-center gap-10 my-2">
              <h3 className="text-lg font-semibold">Years</h3>
              <div className="">
                <select
                  className="bg-white py-1 px-2 focus:outline-none rounded border border-black w-30"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">4th</option>
                </select>
              </div>
            </div>
            <hr />
            <div className="tags flex items-center gap-10 my-2">
              <h3 className="text-lg font-semibold">Subjects</h3>
              <div className="flex gap-2 flex-wrap">
                {getSubjectsForYear().map((subject) => (
                  <div
                    key={subject}
                    className={`flex items-center gap-1 py-1 px-2 text-sm rounded-full border border-black cursor-pointer ${
                      tag === subject ? "bg-black text-dark-orange" : "bg-white"
                    }`}
                    onClick={() => setTag(tag === subject ? null : subject)}
                  >
                    {tag === subject && <i className="bx bx-check text-xl" />}
                    {subject}
                  </div>
                ))}
              </div>
            </div>
            <hr />
            <div className="tags flex items-center gap-10 my-2">
              <h3 className="text-lg font-semibold">Teacher</h3>
              <Search />
            </div>
            <hr />
            <div className="tags flex items-center gap-10 my-2">
              <h3 className="text-lg font-semibold">Format</h3>
              <label className="flex items-center gap-2 accent-dark-orange">
                <input type="radio" name="format" value="Handwritten" />
                Handwritten
              </label>
              <label className="flex items-center gap-2 accent-dark-orange">
                <input type="radio" name="format" value="Digital" /> Digital
              </label>
            </div>
            <hr />
            <div className="tags flex items-center gap-10 my-2">
              <h3 className="text-lg font-semibold">Sort</h3>
              <label className="flex items-center gap-2 accent-dark-orange">
                <input type="radio" name="format" value="Handwritten" />
                Name
              </label>
              <label className="flex items-center gap-2 accent-dark-orange">
                <input type="radio" name="format" value="Digital" /> Upload Date
              </label>
            </div>
            <hr />
          </div>
          <button
            className="border border-black py-1 px-2 rounded-lg bg-dark-orange font-bold m-2 active:bg-black active:text-dark-orange"
            onClick={() => setToggle(false)}
          >
            Filter
          </button>
        </div>
      </div>
    </section>
  );
}

export default Filter;
