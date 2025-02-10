import React from "react";

function CreateAcc() {
  return (
    <div className="bg-orange-white w-fit border-1 p-[100px] flex flex-col gap-[32px] rounded-[20px]">
      <div className="flex flex-col gap-[8px]">
        <div className="">
          <label htmlFor="">
            Enter Username: <br />
            <input
              className="bg-white border-1 border-black rounded-[8px] w-[560px] px-[10px] py-[4px]"
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
              className="bg-white border-1 border-black rounded-[8px] w-[240px] p-[4px]"
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
          <label htmlFor="">
            Semester: <br />
            <select
              name=""
              id=""
              className="bg-white border-1 border-black rounded-[8px] w-[240px] p-[4px]"
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
        <button className="font-bold p-[10px] border-1 border-black rounded-[16px] bg-dark-orange text-black w-[560px]">
          CREATE UPLOAD
        </button>
      </div>
    </div>
  );
}

export default CreateAcc;
