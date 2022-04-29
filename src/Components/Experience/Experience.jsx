import React from "react";
import ExperienceData from "../../Data/ExperienceData";

function Experience() {
  return (
    <div id="experience">
      <div className="tracking-widest headings my-3 pt-20 pb-10 font-serif font-semibold md:text-3xl lg:text-5xl text-2xl p-2 ">
        MY EXPERIENCE
      </div>
      <div className="xl:px-20 lg:px-10 lg:pl-10 pl-3 md:pl-5 relative">
        {ExperienceData &&
          ExperienceData.map((exp, i) =>
            i & 1 ? (
              <div className="my-5 mx-auto p-2 w-11/12 lg:flex text-left lg:bg-white bg-gray-200 lg:flex-row-reverse">
                <div className=" animate__backInRight lg:w-1/2 mx:8 lg:mx-5 xl:mx-10 lg:text-left lg:bg-gray-100 lg:p-5 ">
                  <div className="font-bold text-xl md:text-2xl lg:text-3xl">
                    <div className="lg:w-0 lg:h-0 md:w-6 md:h-6 bg-gray-400 rounded-full w-0 h-0 md:ml-[-60px] mt-2 absolute z-20"></div>
                    <div className="px-3 py-2">{exp.Company}</div>
                  </div>
                  <div className="text-justify text-sm md:text-base px-3 py-2">
                    {exp.Description &&
                      exp.Description.map((val, i) => (
                        <div className="py-2">{val}</div>
                      ))}
                  </div>
                </div>
                <div className="animate__animated animate__backInRight lg:z-20  lg:w-1/2 mx:8 lg:mx-5 xl:mx-10 lg:text-right">
                  <div className="font-semibold text-sm md:text-xl lg:text-2xl mt-2 lg:pt-5 lg:mt-0">
                    <div className="px-3">{exp.Position}</div>
                    <div className="inline lg:w-6 lg:h-6 bg-gray-400 rounded-full lg:mt-[-30px] lg:ml-[11px] xl:ml-[32px] absolute z-20"></div>
                  </div>
                  <div className="mt-1 text-sm md:text-md lg:text-xl px-3 pb-2">
                    {exp.StartDate}-{exp.EndDate}
                  </div>
                </div>
              </div>
            ) : (
              <div className="mx-auto p-2 w-11/12 lg:flex text-left lg:bg-white bg-gray-200">
                <div className=" animate__backInLeft lg:w-1/2 mx:8 lg:mx-5 xl:mx-10 lg:text-right lg:bg-gray-100 lg:p-5 ">
                  <div className="font-bold text-xl md:text-2xl lg:text-3xl">
                    <div className="lg:w-0 lg:h-0 md:w-6 md:h-6 bg-gray-400 rounded-full w-0 h-0 md:ml-[-60px] mt-2 absolute z-20"></div>
                    <div className="text-left px-3 py-2">{exp.Company}</div>
                  </div>
                  <div className="text-justify text-sm md:text-base px-3 py-2">
                    {exp.Description &&
                      exp.Description.map((val, i) => (
                        <div className="py-2">{val}</div>
                      ))}
                  </div>
                </div>
                <div className="lg:w-1/2 mx:8 lg:mx-5 xl:mx-10 lg:text-left animate__animated animate__backInRight lg:z-20">
                  <div className="font-semibold text-sm md:text-xl lg:text-2xlmd:text-xl lg:text-2xl mt-2 lg:pt-5 lg:mt-0">
                    <div className="lg:w-6 lg:h-6 bg-gray-400 rounded-full lg:ml-[-32px] xl:ml-[-53px] absolute z-20"></div>
                    <div className="px-3">{exp.Position}</div>
                  </div>
                  <div className="mt-1 text-sm md:text-md lg:text-xl px-3 pb-2 ">
                    {exp.StartDate}-{exp.EndDate}
                  </div>
                </div>
              </div>
            )
          )}

        <div className="md:-ml-2 lg:ml-0 absolute top-0 lg:inset-x-1/2 h-full border-2 w-1 bg-gray-200 z-10" />
      </div>
    </div>
  );
}

export default Experience;
