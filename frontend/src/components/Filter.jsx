import { useContext, useMemo, useState } from "react";
import Search from "../components/Search";
import ContextContent from "../context/ContentContext";

function Filter() {
  const { filters } = useContext(ContextContent);

  const years = Object.keys(filters);

  const [open, setOpen] = useState(true);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const subjects = useMemo(() => {
    if (!selectedYear) return {};

    return filters[selectedYear];
  }, [filters, selectedYear]);

  const subjectKeys = Object.keys(subjects);

  const topicsArr = selectedSubject ? subjects[selectedSubject] || [] : [];

  const handleTopicClick = (topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    );
  };

  const Submit = (e) => {
    e.preventDefault();

    const payload = {
      year: selectedYear,
      subject: selectedSubject,
      topics: selectedTopics,
      teacher: selectedTeacher,
      format: selectedFormat,
      sort: selectedSort,
    };

    console.log(payload);
  };

  return (
    <form className="p-4 flex flex-col gap-2" onSubmit={Submit}>
      <div className="p-2 bg-light-orange/40 rounded">
        <div
          className="flex items-center justify-between cursor-pointer font-bold"
          onClick={() => setOpen(!open)}
        >
          <span>Sort & Filter</span>

          <i
            className={`bx text-2xl ${
              open ? "bxs-minus-circle" : "bxs-plus-circle"
            }`}
          />
        </div>

        <div className={`p-2 ${open ? "block" : "hidden"}`}>
          <div className="flex items-center gap-10 my-2">
            <h3 className="text-lg font-semibold min-w-24">Years</h3>

            <select
              className="bg-white py-1 px-2 focus:outline-none rounded border border-black w-40"
              value={selectedYear}
              onChange={(e) => {
                setSelectedYear(e.target.value);
                setSelectedSubject(null);
                setSelectedTopics([]);
              }}
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          <hr />

          {/* SUBJECTS */}
          {selectedYear && (
            <div className="my-2 flex flex-col gap-2">
              <div className="tags flex items-start gap-10">
                <h3 className="text-lg font-semibold min-w-24">Subjects</h3>

                <div className="flex gap-2 flex-wrap">
                  {subjectKeys.map((subject) => (
                    <div
                      key={subject}
                      className={`flex items-center gap-1 py-1 px-2 text-sm rounded-full border border-black cursor-pointer transition ${
                        selectedSubject === subject
                          ? "bg-black text-dark-orange"
                          : "bg-white"
                      }`}
                      onClick={() => {
                        setSelectedSubject(
                          selectedSubject === subject ? null : subject,
                        );

                        setSelectedTopics([]);
                      }}
                    >
                      {subject}
                    </div>
                  ))}
                </div>
              </div>

              {/* TOPICS */}
              <div
                className={`text-xs flex flex-wrap gap-2 ${
                  selectedSubject ? "" : "hidden"
                }`}
              >
                {topicsArr.map((topic, idx) => (
                  <div
                    key={idx}
                    className={`py-1 px-2 border border-black rounded-xl flex items-center gap-1 w-fit cursor-pointer transition ${
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
          )}

          <hr />

          {/* TEACHER */}
          <div className="tags flex items-center gap-10 my-2">
            <h3 className="text-lg font-semibold min-w-24">Teacher</h3>

            <div className="w-full">
              <Search onSelect={setSelectedTeacher} />
            </div>
          </div>

          <hr />

          {/* FORMAT + SORT */}
          <div className="flex justify-between my-2 gap-10 flex-wrap">
            {/* FORMAT */}
            <div className="tags flex items-center gap-6">
              <h3 className="text-lg font-semibold">Format</h3>

              <label className="flex items-center gap-2 accent-dark-orange">
                <input
                  type="radio"
                  name="format"
                  value="Handwritten"
                  checked={selectedFormat === "Handwritten"}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                />
                Handwritten
              </label>

              <label className="flex items-center gap-2 accent-dark-orange">
                <input
                  type="radio"
                  name="format"
                  value="Digital"
                  checked={selectedFormat === "Digital"}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                />
                Digital
              </label>
            </div>

            {/* SORT */}
            <div className="tags flex items-center gap-6">
              <h3 className="text-lg font-semibold">Sort</h3>

              <label className="flex items-center gap-2 accent-dark-orange">
                <input
                  type="radio"
                  name="sort"
                  value="UploadDate"
                  checked={selectedSort === "UploadDate"}
                  onChange={(e) => setSelectedSort(e.target.value)}
                />
                Upload Date
              </label>

              <label className="flex items-center gap-2 accent-dark-orange">
                <input
                  type="radio"
                  name="sort"
                  value="Rating"
                  checked={selectedSort === "Rating"}
                  onChange={(e) => setSelectedSort(e.target.value)}
                />
                Rating
              </label>
            </div>
          </div>

          <hr />

          <button
            type="submit"
            className="border border-black py-1 px-2 rounded-lg bg-dark-orange font-bold mt-2 active:bg-black active:text-dark-orange"
          >
            Filter
          </button>
        </div>
      </div>
    </form>
  );
}

export default Filter;
