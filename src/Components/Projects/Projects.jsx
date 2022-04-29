import React from "react";
import ProjectsCard from "./ProjectsCard";

function Projects() {
  return (
    <div
      id="portfolio"
      className="bg-[#151515] overflow-x-hidden mt-10 pb-10 relative"
    >
      <div className="tracking-widest headings my-3 pt-20 pb-10 font-serif font-semibold md:text-3xl lg:text-5xl text-2xl p-2 text-white">
        MY LATEST WORK
      </div>
      <ProjectsCard />
    </div>
  );
}

export default Projects;
