import React from "react";
import HeaderImg from "../../Images/header_img.png";
import Navbar from "../Navbar/Navbar";
import { BsArrowRight } from "react-icons/bs";

function Header() {
  return (
    <div
      id="home"
      className="h-screen bg-no-repeat bg-cover mb-1"
      style={{ backgroundImage: `url(${HeaderImg})` }}
    >
      <div>
        <Navbar />
      </div>
      <div className="h-screen text-white justify-center md:justify-end flex items-center bg-black/[.5] ">
        <div className="md:pl-24 lg:w-2/3 md:w-3/4 lg:pb-64 pb-32 font-mono ">
          <div className="tracking-widest md:mx-4 md:text-3xl xl:text-6xl text-2xl pb-2 font-semibold ">
            Bhavya Sehgal
          </div>
          <div className="tracking-widest md:mx-4 font-semibold md:text-2xl xl:text-4xl text-xl	p-2">
            Full Stack Software Developer
          </div>
          <div className="hidden md:flex md:mx-4 mt-4 justify-center">
            <div className="tracking-widest text-xl">
              <a href="https://drive.google.com/file/d/1a9pOM23GE1AzyXyBb7rXUHusUHJE2-X8/view?usp=sharing">
                Resume
              </a>
            </div>
            <div className="mt-1 ml-1">
              <BsArrowRight className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
