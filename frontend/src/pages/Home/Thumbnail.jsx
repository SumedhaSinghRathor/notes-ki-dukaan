import { useState } from "react";
import { Link } from "react-router-dom";

function Thumbnail({ data }) {
  const [bookmark, setBookmark] = useState(data.bookmarked || false);

  function bookmarked() {
    setBookmark(!bookmark);

    alert(
      bookmark
        ? `${data.name} has been removed from your bookmarks`
        : `${data.name} has been added to your bookmarks`
    );
  }

  return (
    <div className="group w-3xs flex flex-col gap-1.5 mx-auto">
      <Link to="/view">
        <div className="thumbnailimg w-full h-44 bg-light-orange border border-black" />
      </Link>
      <div className="info flex flex-col gap-1">
        <div className="title_bookmark flex justify-between items-center">
          <div className="title font-bold text-xl line-clamp-1 group-hover:underline">
            {data.name || "Basic Memory Unit"}
          </div>
          <i
            className={`bx text-2xl flex justify-center items-center text-dark-orange ${
              bookmark ? "bxs-bookmark" : "bx-bookmark"
            }`}
            onClick={bookmarked}
          />
        </div>

        <div className="faculty w-fit hover:underline">
          {data.faculty || "Anil Kumar Swain"}
        </div>
        <div className="tags_rating flex justify-between items-center w-full">
          <div className="tags flex justify-between gap-2 whitespace-nowrap overflow-clip">
            <div className="tag bg-light-orange hover:bg-dark-orange transition-colors py-1 px-2 rounded-lg border border-black text-xs">
              {data.subject || "COA"}
            </div>
          </div>
          <div className="rating flex justify-between gap-1 items-center">
            <div className="num">{data.ratingAverage || 4.27}</div>
            <i className="bx bxs-star text-2xl text-dark-orange" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
