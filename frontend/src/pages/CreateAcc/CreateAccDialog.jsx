function CreateAcc() {
  return (
    <div className="w-full h-full bg-amber-300 flex justify-center">
      <div className="bg-orange-white w-fit border-1 p-12 flex flex-col gap-8 rounded-2xl">
        <div className="flex flex-col gap-1">
          <div className="">
            <label htmlFor="">
              Enter Username: <br />
              <input
                className="bg-white border-1 border-black rounded-lg w-80 px-4 py-1"
                type="text"
                placeholder="Username"
              />
            </label>
          </div>
          <div className="flex justify-between">
            <label htmlFor="">
              Year: <br />
              <select
                name=""
                id=""
                className="bg-white border-1 border-black rounded-lg w-36 p-1"
              >
                <option value="">1st</option>
                <option value="">2nd</option>
                <option value="">3rd</option>
                <option value="">4th</option>
              </select>
            </label>
            <label htmlFor="">
              Semester: <br />
              <select
                name=""
                id=""
                className="bg-white border-1 border-black rounded-lg w-36 p-1"
              >
                <option value="">1st</option>
                <option value="">2nd</option>
                <option value="">3rd</option>
                <option value="">4th</option>
                <option value="">5th</option>
                <option value="">6th</option>
                <option value="">7th</option>
                <option value="">8th</option>
              </select>
            </label>
          </div>
        </div>
        <div>
          <button className="font-bold text-center p-2 border-1 border-black rounded-xl bg-dark-orange text-black w-80">
            CREATE UPLOAD
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateAcc;
