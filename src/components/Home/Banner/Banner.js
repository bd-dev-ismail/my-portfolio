import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
      <div>
        {/* <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div> */}
        <div className="relative bg-black">
          <div className="absolute inset-x-0 bottom-0">
            <svg
              viewBox="0 0 224 12"
              fill="currentColor"
              className="w-full -mb-1 text-white"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
            </svg>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
              <h2 className="mb-3 font-sans text-3xl lg:text-5xl text-center font-bold tracking-tight text-slate-400    heading">
                I'm Md Ismail <span className="text-yellow-300">Hossen</span>
              </h2>
              <h3 className="mb-6 flex justify-center items-center font-sans text-2xl font-bold tracking-tight text-slate-400  sm:text-3xl sm:leading-none heading">
                I'm a
                <span className="text-yellow-300 ml-2">
                  <TypeAnimation
                    sequence={[
                      "Front-End Developer", // Types 'One'
                      1000, // Waits 1s
                      "React Developer", // Deletes 'One' and types 'Two'
                      2000, // Waits 2s
                      "Mern Stack Developer",
                      2000,
                      "Back-End Developer",
                      2000,
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
              </h3>
              <p className="mb-7 text-base text-indigo-100 md:text-lg">
                I'm a React developer with a passion for learning. I help your
                business and individuals by developing websites. I build
                websites to make you successful in the long term.
              </p>
              <div className='text-center'>
                <button className="btn mb-10 lg:mb-16">Download Resume</button>
              </div>

              <a
                href="#best-project"
                aria-label="Scroll down"
                className="flex items-center  justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;