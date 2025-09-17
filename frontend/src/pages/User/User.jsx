import Thumbnail from "../Home/Thumbnail";
import dummy_data from "../../assets/dummy_data.json";
import { useState } from "react";

function User() {
  const [uploads, setUploads] = useState(true);

  return (
    <>
      <div className="banner bg-dark-orange h-36 w-full overflow-hidden">
        <div className="flex items-center gap-4 relative top-8 left-16">
          <div className="pfp size-30 bg-white">
            <i className="bx bxs-user text-black text-9xl" />
          </div>
          <div className="name">
            <h1 className="text-4xl font-bold leading-10">UserName</h1>
            <p>#1 Uploader</p>
          </div>
        </div>
      </div>
      <div className="content w-full justify-between p-8 flex gap-8 max-sm:flex-col">
        <div className="box bg-orange-white w-72 h-fit border border-black p-4 rounded-xl flex flex-col gap-4 shrink-0 mx-auto">
          <p className="text-center font-bold">Streak 🔥 : 0</p>
          <div className="heatmap bg-black p-2 rounded-lg grid grid-cols-7 gap-2">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, index) => (
              <div
                key={index}
                className="text-white flex justify-center items-center font-mono"
              >
                {day}
              </div>
            ))}
            <div className="bg-black col-span-5" />
            {Array.from({ length: 30 }).map((index) => (
              <div className="size-7 bg-white text-black hover:bg-dark-orange active:bg-light-orange">
                {index}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-orange-white rounded-xl border border-black flex-1 overflow-clip">
          <div className="flex font-bold text-xl bg-light-orange border-b-1 border-black">
            <div
              className={`w-1/2 text-center py-0.5 rounded-t-lg ${
                uploads ? "bg-black text-white" : "cursor-pointer"
              }`}
              onClick={() => setUploads(true)}
            >
              My Uploads
            </div>
            <div
              className={`w-1/2 text-center py-0.5 rounded-t-lg ${
                uploads ? "cursor-pointer" : "bg-black text-white"
              }`}
              onClick={() => setUploads(false)}
            >
              Bookmarks
            </div>
          </div>
          <div className="p-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-7 gap-9">
            {(uploads
              ? dummy_data.documents
              : dummy_data.documents.filter((document) => document.bookmarked)
            ).map((document) => (
              <Thumbnail key={document.id} data={document} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
