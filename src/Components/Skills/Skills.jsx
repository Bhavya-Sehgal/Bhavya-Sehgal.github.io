import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { GiPencilBrush } from "react-icons/gi";
import { GoBrowser } from "react-icons/go";
import "./Skills.css";

function Skills() {
  return (
    <div id="skills">
      <div className="bg-[#151515]">
        {/* <div className="start-oval bg-white h-28 md:h-44"></div> */}
        <div className="tracking-widest text-white mt-14 pt-10 lg:pt-24 pb-20 font-serif font-semibold md:text-4xl lg:text-6xl text-3xl">
          SKILLS
        </div>

        <div className="lg:px-20 lg:mx-1">
          <div className="flex flex-wrap z-20">
            <div className=" xl:p-10 w-full lg:w-1/3 text-white px-4 py-5 lg:py-5">
              <div className="bg-[#555] h-full py-5 px-8 lg:px-10 mb-8 lg:mb-10 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500 hover:shadow-2xl">
                <div className="text-xl md:text-5xl lg:text-6xl w-fit m-auto">
                  <GiPencilBrush />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl my-2 py-2">
                  Web Development
                </div>
                <div className="text-sm md:text-lg lg:text-xl text-justify lg:text-center xl:text-justify">
                  HTML, Css, JavaScript, MongoDB, ReactJs, NodeJs, ExpressJS,
                  RestAPI Bootstrap, JQuery, TailwindCss, EJS, SQL, MaterialUI.
                </div>
              </div>
            </div>
            <div className=" xl:p-10 w-full lg:w-1/3 text-white px-4 py-5 lg:py-5">
              <div className="bg-[#222] h-full py-5 px-8 lg:px-10 mb-8 lg:mb-10 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500 hover:shadow-2xl">
                <div className="text-xl md:text-5xl lg:text-6xl w-fit m-auto">
                  <BsCodeSlash />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl my-2 py-2">
                  Programming
                </div>
                <div className="text-sm md:text-lg lg:text-xl text-justify lg:text-center xl:text-justify">
                  C++, C, Python, Data Structures and Algorithms, Object
                  Oriented Programming.
                </div>
              </div>
            </div>
            <div className=" xl:p-10 w-full lg:w-1/3 text-white px-4 py-5 lg:py-5">
              <div className="bg-[#555] h-full py-5 px-8 lg:px-10 mb-8 lg:mb-10 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500 hover:shadow-2xl">
                <div className="text-xl md:text-5xl lg:text-6xl w-fit m-auto">
                  <GoBrowser />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl my-2 py-2">
                  Software/Ide Used
                </div>
                <div className="text-sm md:text-lg lg:text-xl text-justify lg:text-center xl:text-justify">
                  Atom, VsCode, Sublime, Code Blocks, Git/GitHUB, Postman,
                  MS-Office, MS-Excel, MS-PowerPoint.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-40 lg:h-64 z-10 xl:-mt-48 -mt-32"></div>
    </div>
  );
}

export default Skills;
