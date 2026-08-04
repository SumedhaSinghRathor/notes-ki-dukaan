import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import ContextContent from "../../context/ContentContext";

function View() {
  const { id } = useParams();
  const { docs } = useContext(ContextContent);

  const doc = docs.find((d) => d.id === Number(id));

  useEffect(() => {
    if (doc?.name) {
      document.title = `${doc.name} - Notes Ki Dukaan`;
    } else {
      document.title = `Loading... - Notes Ki Dukaan`;
    }
  }, [doc]);

  if (!doc) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-2xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-fit flex flex-col items-center p-12">
      <div className="title w-3/4 flex flex-col gap-2">
        <div className="name flex items-end gap-2">
          <h1 className="text-5xl font-bold">{doc.name}</h1>
          <i className="bx bxs-edit text-3xl" />
        </div>

        <div className="flex items-baseline justify-between">
          <p className="text-lg">
            Taught By:{" "}
            <span className="font-bold hover:underline cursor-pointer">
              {doc.faculty}
            </span>
          </p>

          <div className="bg-light-orange py-1 px-2 rounded-full flex justify-center items-center gap-2">
            {doc.ratingAverage}
            <i className="bx bxs-star" />
          </div>
        </div>
      </div>

      <div className="View w-4xl h-264 bg-dark-orange my-8" />

      <Rating />
    </div>
  );
}

export default View;
