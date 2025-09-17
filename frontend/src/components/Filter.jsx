import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import dummy_data from "../assets/dummy_data.json";
import Search from "../components/Search";
import { FilterContext } from "../context/FilterContext";

function Filter() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const { setFilters } = useContext(FilterContext);

  const teacher = useCallback((name) => {
    console.log("Selected teacher: ", name);
  }, []);

  const yearKeys = dummy_data.years.map((yearObj) => Object.keys(yearObj)[0]);
  const [selectedYear, setSelectedYear] = useState(yearKeys[0]);
  const selectedYearObj = dummy_data.years.find(
    (yearObj) => Object.keys(yearObj)[0] === selectedYear
  );
  const subjectsArr = selectedYearObj ? selectedYearObj[selectedYear] : [];
  const subjectKeys = subjectsArr.map(
    (subjectObj) => Object.keys(subjectObj)[0]
  );
  const [selectedTag, setSelectedTag] = useState(null);
  const topicsArr = selectedTag
    ? subjectsArr.find(
        (subjectObj) => Object.keys(subjectObj)[0] === selectedTag
      )?.[selectedTag] || []
    : [];
  const [selectedTopics, setSelectedTopics] = useState([]);
  const handleTopicClick = (topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  function Submit(e) {
    e.preventDefault();
    setFilters({
      year: selectedYear,
      subject: selectedTag,
      topics: selectedTopics,
      teacher: null,
      format:
        document.querySelector("input[name='format']:checked")?.value || null,
      sort: document.querySelector("input[name='sort']:checked")?.value || null,
    });
    const params = new URLSearchParams();
    if (selectedYear) params.set("year", selectedYear);
    if (selectedTag) params.set("subject", selectedTag);
    if (selectedTopics.length > 0) params.set("topics", selectedTopics);
    navigate(`/home?${params.toString()}`);
    setToggle(false);
  }

  return (
    <form className="p-4 flex flex-col gap-2">
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
        <div className={`p-2 ${toggle ? "" : "hidden"}`}>
          <div className="flex items-center gap-10 my-2">
            <h3 className="text-lg font-semibold">Years</h3>
            <div>
              <select
                className="bg-white py-1 px-2 focus:outline-none rounded border border-black w-30"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {yearKeys.map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <hr />
          <div className="my-2 flex flex-col gap-2">
            <div className="tags flex items-center gap-10">
              <h3 className="text-lg font-semibold">Subjects</h3>
              <div className="flex gap-2 flex-wrap">
                {subjectKeys.map((subject) => (
                  <div
                    key={subject}
                    className={`flex items-center gap-1 py-1 px-2 text-sm rounded-full border border-black cursor-pointer ${
                      selectedTag === subject
                        ? "bg-black text-dark-orange"
                        : "bg-white"
                    }`}
                    onClick={() =>
                      setSelectedTag(selectedTag === subject ? null : subject)
                    }
                  >
                    {subject}
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`w-4xl text-xs flex flex-wrap gap-2 ${
                selectedTag ? "" : "hidden"
              }`}
            >
              {topicsArr.map((topic, idx) => (
                <div
                  key={idx}
                  className={`py-1 px-2 border border-black rounded-xl flex items-center gap-1 w-fit cursor-pointer ${
                    selectedTopics.includes(topic)
                      ? "bg-black text-dark-orange"
                      : "bg-white"
                  }`}
                  onClick={() => handleTopicClick(topic)}
                >
                  {selectedTopics.includes(topic) && (
                    <i className="bx bx-check text-lg" />
                  )}
                  {topic}
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="tags flex items-center gap-10 my-2">
            <h3 className="text-lg font-semibold">Teacher</h3>
            <Search onSelect={teacher} />
          </div>
          <hr />
          <div className="flex justify-between my-2">
            <div className="tags flex items-center gap-10">
              <h3 className="text-lg font-semibold">Format</h3>
              <label className="flex items-center gap-2 accent-dark-orange">
                <input type="radio" name="format" value="Handwritten" />
                Handwritten
              </label>
              <label className="flex items-center gap-2 accent-dark-orange">
                <input type="radio" name="format" value="Digital" /> Digital
              </label>
            </div>
            <div className="tags flex items-center gap-10">
              <h3 className="text-lg font-semibold">Sort</h3>
              <label className="flex items-center gap-2 accent-dark-orange">
                <input type="radio" name="sort" value="UploadDate" /> Upload
                Date
              </label>
              <label className="flex items-center gap-2 accent-dark-orange">
                <input type="radio" name="sort" value="Rating" /> Rating
              </label>
            </div>
          </div>
          <hr />
          <button
            className="border border-black py-1 px-2 rounded-lg bg-dark-orange font-bold mt-2 active:bg-black active:text-dark-orange"
            onClick={Submit}
          >
            Filter
          </button>
        </div>
      </div>
    </form>
  );
}

export default Filter;
