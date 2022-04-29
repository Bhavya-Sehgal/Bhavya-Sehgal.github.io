import React from "react";
import ProjectData from "../../Data/ProjectData";
import "animate.css";

function ProjectsCard() {
  return (
    <div>
      <div className="sm:flex sm:flex-wrap lg:block md:px-10 lg:px-2">
        {ProjectData &&
          ProjectData.map((project, i) =>
            i & 1 ? (
              <div className="lg:my-10 sm:w-1/2 lg:w-full px-5 md:px-5 lg:px-8 lg:flex justify-center items-center ">
                <div className="animate__animated animate__slideInLeft z-20 mt-5 lg:-mr-36 xl:-mr-56 lg:mt-28 lg:w-5/12  lg:drop-shadow-2xl">
                  <img src={project.Image} alt="" className="lg:w-[550px]" />
                </div>
                <div className="animate__animated animate__slideRight lg:w-1/2 text-left bg-[#222] text-white py-6 px-4 lg:pl-8 shadow-black shadow-lg">
                  <div className="lg:w-2/3 ml-auto xl:ml-48 xl:pl-5">
                    <div className=" text-xl md:text-2xl lg:text-3xl font-semibold">
                      {project.Title}
                    </div>
                    <div className=" text-sm md:text-lg lg:text:xl mb-3 font-medium text-[#bcb2b2]">
                      {project.Caption}
                    </div>
                    <div className=" text-sm md:text-base pr-2 text-justify">
                      {project.Description &&
                        project.Description.map((val) => (
                          <div className="py-1">{val}</div>
                        ))}
                    </div>
                    <div className="mt-2">
                      <button className="text-sm md:text-base bg-white p-2 text-[#111] rounded-xl mt-2">
                        <a href={project.Link} className="">
                          Visit Project
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="lg:my-10 sm:w-1/2 lg:w-full px-5 md:px-5 lg:px-8 lg:flex lg:flex-row-reverse justify-center items-center ">
                <div className="animate__animated animate__slideInRight z-20  mt-5 lg:-ml-36 xl:-ml-48 lg:mt-32 lg:w-5/12  lg:drop-shadow-2xl">
                  <img src={project.Image} alt="" className="lg:w-[550px]" />
                </div>
                <div className="animate__animated animate__slideInLeft lg:w-1/2 text-left bg-[#222] text-white py-6 px-4 lg:pl-8 shadow-black shadow-lg">
                  <div className=" text-xl md:text-2xl lg:text-3xl  font-semibold">
                    {project.Title}
                  </div>
                  <div className=" text-sm md:text-lg lg:text:xl mb-3 font-medium text-[#bcb2b2]">
                    {project.Caption}
                  </div>
                  <div className="lg:w-2/3 text-sm md:text-base pr-2 text-justify">
                    {project.Description &&
                      project.Description.map((val) => (
                        <div className="py-1">{val}</div>
                      ))}
                  </div>
                  <div className="mt-2">
                    <button className="text-sm md:text-base bg-white p-2 text-[#111] rounded-xl mt-2">
                      <a href={project.Link} className="">
                        Visit Project
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
}

export default ProjectsCard;
