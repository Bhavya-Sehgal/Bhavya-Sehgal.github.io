import React from "react";
import "./About.css";
import ProfileImg from "../../Images/Profile-Image.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

function About() {
  return (
    <div id="about" className="about-section -mt-8 h-96 relative">
      <div className="tracking-widest headings my-3 pt-32 pb-10 md:pb-20 font-serif font-semibold md:text-4xl lg:text-6xl text-3xl p-2 ">
        ABOUT
      </div>

      <div className="hidden lg:block w-[80%] xl:w-2/3 mx-auto px-10">
        <div className="px-2 flex content-between">
          <div className="text-left w-1/2 flex flex-col content-between">
            <div className="bg-gray-300 p-5">
              <div className="font-semibold text-gray-500 mb-4">Position</div>
              <div className="text-lg font-semibold">
                Full Stack Developer &
              </div>
              <div className="text-md font-semibold">
                Open-Source Enthusiast
              </div>
              <div className="text-md mt-2">Computer Science Engineer</div>
            </div>
            <div className="bg-gray-300 p-5 pt-9 mt-auto">
              <div className="font-semibold text-gray-500 mb-4">
                Information
              </div>
              <div className="font-semibold mb-3 text-sm">
                <div>I design & code beautifully simple things,</div>
                <div>And I love what I do. </div>
              </div>
              <div className="">
                <span className="font-semibold text-slate-800">
                  Nationality:
                </span>{" "}
                Indian
              </div>
              <div className="">
                <span className="font-semibold text-slate-800">Age:</span> 20
              </div>
              <div className="">
                <span className="font-semibold text-slate-800">Gender:</span>{" "}
                Female
              </div>
              <div className="mb-5">
                <span className="font-semibold text-slate-800">Status:</span>{" "}
                Looking for internship
              </div>
              <div className="flex">
                <div>
                  <IoLocationOutline className="text-xl mr-3 mb-3" />
                </div>
                <div>Janakpuri, New Delhi-110058</div>
              </div>
              <div className="flex">
                <div>
                  <AiOutlinePhone className="text-xl mr-3 mb-3" />
                </div>
                <div>(+91) 9643503355</div>
              </div>
              <div className="flex">
                <div>
                  <AiOutlineMail className="text-xl mr-3" />
                </div>
                <div>
                  <a href="mailto:bhavyasehgal05@gmail.com">
                    bhavyasehgal05@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute"
            style={{ left: "calc(50% - 16rem)", top: "calc(50% - 7.5rem)" }}
          >
            <img
              src={ProfileImg}
              alt=""
              className="rounded-full w-[31rem] border-[3rem] "
            />
          </div>
          <div className="text-right w-1/2">
            <div className=" bg-gray-300 p-5 pb-8">
              <div className="font-semibold text-gray-500 mb-4">Education</div>
              <div className="text-md font-semibold">
                BTECH Computer Science, MSIT
              </div>
              <div className="text-sm font-normal">(2019-2023)</div>
              <div className="text-md mb-2">9.481 CGPA</div>
              <div className="text-md font-semibold">
                Snr. Secondary Education, HRMS
              </div>
              <div className="text-sm font-normal">(2018-2019)</div>
              <div className="text-md mb-2">95.25%, CBSE</div>
              <div className="text-md font-semibold">
                Secondary Education, HRMS
              </div>
              <div className="text-sm font-normal">(2017-2018)</div>
              <div className="text-md">10 CGPA, CBSE</div>
            </div>
            <div className=" bg-gray-300 p-5 mt-10">
              <div className="font-semibold text-gray-500 mb-4">Links</div>
              <div className="text-md">
                <a href="https://www.linkedin.com/in/bhavya-sehgal-8914661a2/">
                  Linkedin
                </a>
              </div>
              <div className="text-md">
                <a href="https://github.com/Bhavya-Sehgal">Github</a>
              </div>
              <div className="text-md">
                <a href="https://leetcode.com/Bhavya-Sehgal/">Leetcode</a>
              </div>
              <div className="text-md">
                <a href="https://linktr.ee/BhavyaSehgal">LinkTree</a>
              </div>
              <div className="text-md">
                <a href="https://www.instagram.com/bhavyasehgal._/">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden md:flex w-3/4 md:w-2/3 mx-auto px-10 md:px-2">
        <div className="md:w-1/2 w-full">
          <img src={ProfileImg} alt="" className="md:w-[80%]  w-[50%] m-auto" />
        </div>
        <div className="text-justify w-full md:w-1/2 py-10 px-20 md:p-0 md:p-5 m-auto">
          <div className="font-bold text-lg md:text-xl tracking-widest">
            BHAVYA SEHGAL
          </div>
          <div className="text-sm md:text-lg text-gray-600 font-semibold mb-4">
            Software Developer
          </div>
          <div className="text-sm">
            I'm Bhavya Sehgal, pre-final year Engineering student and Open
            Source enthusiast. I enjoy taking complex problems and turning them
            into simple and beautiful interface designs.
          </div>
          <div className="text-sm mt-2">
            I am reliable, hard-working with strong attention to detail, and
            eager to learn about new technologies. I am able to work well both
            on my own initiative and as a team player.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
