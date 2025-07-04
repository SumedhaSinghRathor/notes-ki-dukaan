import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import Filter from "../../components/Filter";
import Thumbnail from "./Thumbnail";
import dummy_data from "../../assets/dummy_data.json";

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

  const filteredDocs = dummy_data.documents.filter((doc) => {
    return doc.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row auto-rows-min gap-8 grow">
        {filteredDocs.map((document) => (
          <Thumbnail key={document.id} data={document} />
        ))}
      </div>
      <div className="more mx-auto rounded-lg my-4 align-center border-2 font-bold border-black px-10 py-2 w-fit hover:bg-dark-orange cursor-pointer">
        Load More
      </div>
    </>
  );
}

export default Home;
