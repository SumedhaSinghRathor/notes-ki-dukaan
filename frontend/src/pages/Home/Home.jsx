import Thumbnail from "./Thumbnail";
import ContextContent from "../../context/ContentContext";
import { useContext } from "react";
import Filter from "../../components/Filter";

function Home({ search }) {
  const { docs } = useContext(ContextContent);
  const filteredDocs = docs.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Filter />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredDocs.map((document) => (
          <Thumbnail key={document.id} data={document} search={search} />
        ))}
      </div>
    </>
  );
}

export default Home;
