import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../assets/banner.jpg';
const About = () => {
    return (
      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between lg:flex-row-reverse">
            <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
              <div className="max-w-xl mb-6">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider badge badge-info bg-color-a uppercase rounded-full text-white ">
                    Mern Stack
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Who am I ?
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                 
                  I am a Fron-End React Developer.Recently I have completed
                  react and node js. I am expertise in Html5, Css3,
                  Javascript(ES6), Bootstrap5,
                  TailwindCSS, React JS, Next JS, Node JS, Express JS, Mongo DB,
                  Firebase. More than 12+ Project I am done with a course for learning Web Development.
                </p>
              </div>
              <div className="flex flex-col items-center md:flex-row">
                <Link
                  to="/contact"
                  aria-label=""
                  className="inline-flex items-center btn btn-warning"
                >
                  Contact Me <FaArrowRight className="ml-3" />
                </Link>
              </div>
            </div>
            <div className="relative lg:w-1/2">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={img}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;