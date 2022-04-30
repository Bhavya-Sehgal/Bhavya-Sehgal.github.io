import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FiFolder } from "react-icons/fi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BsLaptop, BsDownload } from "react-icons/bs";
import { SiAudiotechnica } from "react-icons/si";

function SideNavbar() {
  const [show, setshow] = useState(false);

  return (
    <>
      {!show && (
        <RiMenuFill
          className="md:hidden fixed text-2xl z-40 m-10 right-0 text-[#6a6767]"
          onClick={() => setshow(true)}
        />
      )}

      {show && (
        <div className=" right-0 fixed w-[200px] pl-6 h-full bg-[#222] text-white z-20 shadow-2xl">
          <AiOutlineClose
            className="fixed text-2xl z-40 m-10 ml-auto text-gray-400"
            onClick={() => setshow(false)}
          />
          <div className="text-right flex flex-col pt-32 pl-4">
            <div className="py-4 flex">
              <BsFillPersonFill className="text-2xl mx-2" />
              <a href="#about">About</a>
            </div>
            <div className="py-4 flex">
              <SiAudiotechnica className="text-2xl mx-2" />
              <a href="#skills">Skills</a>
            </div>
            <div className="py-4 flex">
              <BsLaptop className="text-2xl mx-2" />
              <a href="#experience">Experience</a>
            </div>
            <div className="py-4 flex">
              <FiFolder className="text-2xl mx-2" />
              <a href="#portfolio">Portfolio</a>
            </div>
            <div className="py-4 flex">
              <MdOutlinePermContactCalendar className="text-2xl mx-2" />
              <a href="#contact">Contact</a>
            </div>
            <div className="py-4 flex">
              <BsDownload className="text-2xl mx-2" />
              <a href="https://drive.google.com/file/d/1BhhjeVqsSfGFLPQkoQQZaxXEZmt2ccdC/view?usp=sharing">
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SideNavbar;
