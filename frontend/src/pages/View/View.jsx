import { useLocation } from "react-router-dom";
import Rating from "../../components/Rating/Rating";

function View() {
  const location = useLocation();
  const { name, faculty, rating } = location.state || {};
  return (
    <div className="w-full h-fit flex flex-col items-center p-12">
      <div className="title w-3/4 flex flex-col gap-2">
        <div className="name flex items-end gap-2">
          <h1 className="text-5xl font-bold">{name}</h1>
          <i className="bx bxs-edit text-3xl" />
        </div>
        <div className="flex items-baseline justify-between">
          <p className="text-lg">
            Taught By:{" "}
            <span className="font-bold hover:underline cursor-pointer">
              {faculty}
            </span>
          </p>
          <div className="bg-light-orange py-1 px-2 rounded-full">{rating}</div>
        </div>
      </div>
      <div className="View w-[816px] h-[1056px] bg-dark-orange my-8" />
      <Rating />
    </div>
  );
}

export default View;
