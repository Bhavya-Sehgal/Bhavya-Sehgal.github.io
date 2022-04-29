import React from "react";

function ExperienceCard({ exp, left }) {
  return (
    <div
      className={`my-5 mx-auto p-2 w-11/12 lg:flex text-left lg:bg-white bg-gray-200 lg:flex-row${
        !left && "-reverse"
      }`}
    >
      <div
        className={`lg:w-1/2 mx:8 lg:mx-5 xl:mx-10 lg:text${
          !left ? "-left" : "-right"
        } lg:bg-gray-100 lg:p-5`}
      >
        <div className="font-bold text-xl md:text-2xl lg:text-3xl">
          <div className="lg:w-0 lg:h-0 md:w-6 md:h-6 bg-gray-400 rounded-full w-0 h-0 md:ml-[-60px] mt-2 absolute z-20"></div>
          <div>{exp.Company}</div>
        </div>
        <div className="text-justify">
          {exp.Description && exp.Description.map((val, i) => <div>{val}</div>)}
        </div>
      </div>
      <div
        className={`lg:w-1/2 mx:8 lg:mx-5 xl:mx-10 lg:text${
          !left ? "-right" : "-left"
        }`}
      >
        <div className="font-semibold text-sm md:text-xl lg:text-2xl mt-2 pt-5 lg:mt-0">
          <div>{exp.Position}</div>
          <div className="inline lg:w-6 lg:h-6 bg-gray-400 rounded-full lg:mt-[-30px] lg:ml-[11px] xl:ml-[32px] absolute z-20"></div>
        </div>
        <div className="mt-1 text-sm md:text-md lg:text-xl">
          {exp.StartDate}-{exp.EndDate}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
