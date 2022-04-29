/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MdHome } from "react-icons/md";

function Navbar() {
  return (
    <div className="hidden md:flex text-white justify-end py-4 mx-32">
      <div className="ml-auto flex">
        <div className="px-5 py-2">
          <a href="#about">About</a>
        </div>
        <div className="px-5 py-2">
          <a href="#skills">Skills</a>
        </div>
        <div className="px-5 py-2">
          <a href="#experience">Experience</a>
        </div>
        <div className="px-5 py-2">
          <a href="#portfolio">Portfolio</a>
        </div>
        <div className="px-5 py-2">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
