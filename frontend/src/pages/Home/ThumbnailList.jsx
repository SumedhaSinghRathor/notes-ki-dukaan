import { Link } from "react-router-dom";

function ThumbnailList() {
  return (
    <Link
      to="/view"
      className="group flex items-center gap-2 hover:bg-dark-orange/15 rounded"
    >
      <div className="aspect-[4/3] bg-dark-orange h-18 border border-black"></div>
      <div>
        <h1 className="text-lg font-bold group-hover:underline">
          Basic Memory Unit
        </h1>
        <h2 className="text-xs">Taught by Anil Kumar Swain</h2>
      </div>
      <div className="tags flex justify-end gap-2 whitespace-nowrap overflow-clip grow">
        <div className="tag bg-light-orange hover:bg-dark-orange transition-colors py-1 px-2 rounded-lg border-1 border-black text-xs">
          COA
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div className="num">4.27</div>
        <i className="bx bxs-star text-2xl text-dark-orange"></i>
      </div>
      <div className="flex items-center">
        <i className="bx bx-bookmark text-2xl text-dark-orange"></i>
      </div>
    </Link>
  );
}

export default ThumbnailList;
