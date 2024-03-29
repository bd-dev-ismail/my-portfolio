import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaTelegram, FaTwitterSquare, IconName } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
const Footer = () => {
    return (
      <div className="bg-black">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <span className="ml-2 flex handText text-xl font-bold tracking-wide text-white uppercase">
                  Md{" "}
                  <TypeAnimation
                  className='ml-2 text-yellow-300'
                    sequence={[
                      "Ismail Hossen", // Types 'One'
                      1000, // Waits 1s
                      "Ismail Hossen", // Deletes 'One' and types 'Two'
                      2000, // Waits 2s
                      "Ismail Hossen", // Deletes 'One' and types 'Two'
                      2000, // Waits 2s
                      "Ismail Hossen", // Deletes 'One' and types 'Two'
                      2000, // Waits 2s
                    
                      // Types 'Three' without deleting 'Two'
                      () => {
                        console.log("Done typing!"); // Place optional callbacks anywhere in the array
                      },
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                  />
                </span>
              </a>
              <div className="mt-6 lg:max-w-sm">
                <p className="text-sm handText text-white">
                  Hi there! I am a Mern Stack Developer.Since about last one
                  year I am learning & explore web Development
                </p>
                <p className="mt-4 text-sm handText text-white">
                  My Core Learning in ReacJs, NodeJs, Expressjs, & MongoDB. With
                  technologies & tools like, Bootstrap , Tailwind, daisyUI,
                  Firebase, Netlify, Github, Figma, Npm etc.
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-base font-bold tracking-wide text-white">
                Contacts
              </p>
              <div className="flex">
                <p className="mr-1 text-white">Phone:</p>
                <a
                  href="phone:+880-1833201582"
                  aria-label="Our phone"
                  title="Our phone"
                  className="transition-colors duration-300 text-white hover:text-deep-purple-800"
                >
                  +880-1833201582
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-white">Email:</p>
                <a
                  href="ismailratul7@gmail.com"
                  aria-label="My email"
                  title="My email"
                  className="transition-colors duration-300 text-white hover:text-deep-purple-800"
                >
                  ismailratul7@gmail.com
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-white">Address:</p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Our address"
                  title="Our address"
                  className="transition-colors duration-300 text-white hover:text-deep-purple-800"
                >
                  Chattogram, Bangladesh.
                </a>
              </div>
            </div>
            <div>
              <span className="text-base font-bold tracking-wide text-white">
                Social
              </span>
              <div className="flex items-center mt-1 space-x-3">
                <a
                  href="https://www.linkedin.com/in/ismailratul7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 hover:text-yellow-300"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://twitter.com/bd_dev_ismail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 hover:text-yellow-300"
                >
                  <FaTwitterSquare className="text-2xl" />
                </a>
                <a
                  href="https://www.facebook.com/bd.dev.ismail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 hover:text-yellow-300"
                >
                  <FaFacebookSquare className="text-2xl" />
                </a>
              </div>
              <p className="mt-4 text-sm text-white">
                You Contact me anytime.I am available those social network.Thank
                You!
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
            <p className="text-sm text-white">
              © Copyright 2022 Md Ismail Hossen. All rights reserved.
            </p>
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <li>
                <a
                  href="/project"
                  className="text-sm text-white transition-colors duration-300 hover:text-yellow-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-white transition-colors duration-300 hover:text-yellow-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-sm text-white transition-colors duration-300 hover:text-yellow-300"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Footer;