import Rating from "../../components/Rating/Rating";

function View() {
  function edit() {
    console.log("edit the pdf");
  }

  return (
    <div className="w-full h-fit flex flex-col items-center mt-12">
      <div className="title flex items-end justify-center w-[816px]">
        <div className="name flex items-end gap-2">
          <h1 className="text-5xl font-bold">Basic Processing Unit</h1>
          <i className="bx bxs-edit text-3xl" onClick={edit}></i>
        </div>
      </div>
      <div className="View w-[816px] h-[1056px] bg-dark-orange my-8"></div>
      <Rating />
    </div>
  );
}

export default View;
