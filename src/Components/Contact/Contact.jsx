import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

import { SiLeetcode, SiLinktree } from "react-icons/si";

function Contact() {
  const [error, setError] = useState();
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [values, setValues] = useState(initialState);

  const submitForm = async (e) => {
    e.preventDefault();
    setError();
    if (!values.name || !values.email || !values.subject || !values.message)
      setError("All fields are necessary");

    // Example POST method implementation:

    // Default options are marked with *
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(values), // body data type must match "Content-Type" header
    });
    try {
      const data = await response.json(); // parses JSON response into native JavaScript objects
      console.log(data);
      setValues(initialState);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="contact">
      <div className="lg:px-10 mx:10 md:p-5 bg-gray-300">
        <div className="md:flex lg:px-5 lg:mx-5 py-14 px-2">
          <div className="md:w-1/2 md:px-5 md:py-5 md:mx-2 px-5">
            <div className="tracking-widest text-left p-4 font-bold text-3xl">
              GET IN TOUCH
            </div>
            <div className="text-justify p-4">
              I love to create useful and attractive web applications, my
              passion for design inspires me to always keep up with the current
              web trends and motivates me to create beautiful websites.
            </div>
            <div className="py-5 my-5 px-4">
              <div className="flex mb-8">
                <div className="px-2">
                  <AiOutlinePhone className="text-2xl" />
                </div>
                <div className="">+91 (9643503355)</div>
              </div>
              <div className="flex mb-8">
                <div className="px-2">
                  <AiOutlineMail className="text-2xl" />
                </div>
                <div className="">
                  <a href="mailto:bhavyasehgal05@gmail.com">
                    bhavyasehgal05@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex mb-8">
                <div className="px-2">
                  <IoLocationOutline className="text-2xl" />
                </div>
                <div className="">Janakpuri, 110058, New Delhi, India</div>
              </div>
              <div className="flex">
                <div className="m-2 border-2 p-1 md:p-3 rounded-full hover:bg-gray-100 border-gray-200">
                  <a href="https://www.linkedin.com/in/bhavya-sehgal-8914661a2/">
                    <AiFillLinkedin className="text-xl md:text-2xl lg:text-3xl" />
                  </a>
                </div>
                <div className="m-2 border-2 p-1 md:p-3 rounded-full hover:bg-gray-100 border-gray-200">
                  <a href="https://github.com/Bhavya-Sehgal">
                    <AiFillGithub className="text-xl md:text-2xl lg:text-3xl" />
                  </a>
                </div>
                <div className="m-2 border-2 p-1 md:p-3 rounded-full hover:bg-gray-100 border-gray-200">
                  <a href="https://leetcode.com/Bhavya-Sehgal/">
                    <SiLeetcode className="text-xl md:text-2xl lg:text-3xl" />
                  </a>
                </div>
                <div className="m-2 border-2 p-1 md:p-3 rounded-full hover:bg-gray-100 border-gray-200">
                  <a href="https://linktr.ee/BhavyaSehgal">
                    <SiLinktree className="text-xl md:text-2xl lg:text-3xl" />
                  </a>
                </div>
                <div className="m-2 border-2 p-1 md:p-3 rounded-full hover:bg-gray-100 border-gray-200">
                  <a href="https://www.instagram.com/bhavyasehgal._/">
                    <AiFillInstagram className="text-xl md:text-2xl lg:text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 xl:px-10">
            <form
              id="contact-form"
              className="bg-[#222] px-10 py-5 text-left shadow-2xl"
            >
              <div className="lg:flex justify-between">
                <div className="lg:w-1/2 lg:pr-5">
                  <label
                    className="text-white block m-2 mb-0 ml-1"
                    htmlFor="name"
                  >
                    Name:
                  </label>
                  <input
                    className="p-2 my-2 w-full rounded-lg"
                    placeholder="Name"
                    id="name"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={(e) =>
                      setValues((prev) => {
                        return { ...prev, name: e.target.value };
                      })
                    }
                  />
                </div>
                <div className="lg:w-1/2 lg:pl-5">
                  <label
                    className="text-white block m-2 mb-0 ml-1"
                    htmlFor="email"
                  >
                    Email:
                  </label>
                  <input
                    className="p-2 my-2 w-full rounded-lg"
                    placeholder="Email"
                    id="email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={(e) =>
                      setValues((prev) => {
                        return { ...prev, email: e.target.value };
                      })
                    }
                  />
                </div>
              </div>

              <label
                className="text-white block m-2 mb-0 ml-1"
                htmlFor="subject"
              >
                Subject:
              </label>
              <input
                className="p-2 my-2 w-full rounded-lg"
                placeholder="Subject"
                id="subject"
                type="text"
                name="subject"
                value={values.subject}
                onChange={(e) =>
                  setValues((prev) => {
                    return { ...prev, subject: e.target.value };
                  })
                }
              />
              <label className="text-white block m-2 mb-0 ml-1" htmlFor="msg">
                Message:
              </label>
              <textarea
                className="p-2 my-2 w-full rounded-lg"
                placeholder="Message"
                id="message"
                rows="4"
                name="message"
                value={values.message}
                onChange={(e) =>
                  setValues((prev) => {
                    return { ...prev, message: e.target.value };
                  })
                }
              />
              <button
                type="submit"
                className="bg-white my-4 p-2 px-5 font-bold md:text-lg text-sm rounded-xl"
                onClick={(e) => submitForm(e)}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        <div className="pb-10 px-10 ">
          <hr className="bg-gray-400 h-[2px]" />
          <div className="flex justify-center mt-5">
            <div className="p-1 md:p-4 pb-0 hover:text-gray-600 text-sm md:text-base font-semibold">
              <a href="#home">Home</a>
            </div>
            <div className="p-1 md:p-4 pb-0 hover:text-gray-600 text-sm md:text-base font-semibold">
              <a href="#about">About</a>
            </div>
            <div className="p-1 md:p-4 pb-0 hover:text-gray-600 text-sm md:text-base font-semibold">
              <a href="#skills">Skills</a>
            </div>
            <div className="p-1 md:p-4 pb-0 hover:text-gray-600 text-sm md:text-base font-semibold">
              <a href="#experience">Experience</a>
            </div>
            <div className="p-1 md:p-4 pb-0 hover:text-gray-600 text-sm md:text-base font-semibold">
              <a href="#portfolio">Portfolio</a>
            </div>
          </div>
          <div className="mt-8">Thankyou for visiting &#9829;</div>
          <div className="mt-2">Copyright &#169; 2022 Bhavya Sehgal</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
