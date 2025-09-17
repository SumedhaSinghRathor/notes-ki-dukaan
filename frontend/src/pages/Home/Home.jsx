import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import Filter from "../../components/Filter";
import Thumbnail from "./Thumbnail";
import dummy_data from "../../assets/dummy_data.json";
import { FilterContext } from "../../context/FilterContext";

function Home() {
  return (
    <>
      <Filter />
      <HomeContent />
    </>
  );
}

export function HomeContent() {
  const { search } = useContext(SearchContext);
  const { filters } = useContext(FilterContext);

  const filteredDocs = dummy_data.documents.filter((doc) => {
    let matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase());
    let matchesYear = !filters.year || doc.year === filters.year;
    let matchesSubject = !filters.subject || doc.subject === filters.subject;
    let matchesTopics =
      filters.topics.length === 0 ||
      filters.topics.every((t) => doc.topics.includes(t));
    let matchesTeacher = !filters.teacher || doc.teacher === filters.teacher;
    let matchesFormat = !filters.format || doc.format === filters.format;

    return (
      matchesSearch &&
      matchesYear &&
      matchesSubject &&
      matchesTopics &&
      matchesTeacher &&
      matchesFormat
    );
  });

  if (filters.sort === "UploadDate") {
    filteredDocs.sort(
      (a, b) => new Date(b.uploadedDate) - new Date(a.uploadedDate)
    );
  } else if (filters.sort === "Rating") {
    filteredDocs.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  }

  return (
    <>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row auto-rows-min gap-8 grow">
        {filteredDocs.map((document) => (
          <Thumbnail key={document.id} data={document} />
        ))}
      </div>
    </>
  );
}

export default Home;
