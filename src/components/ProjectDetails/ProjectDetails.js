import React from 'react';
import { useEffect } from 'react';
import { FaCaretSquareRight } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import ProjectDetailBanner from './ProjectDetailBanner';

const ProjectDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const { img1, img2, img3, name, liveSite, clientCode, serverCode, desc  ,features} =
      data;
       useEffect(() => {
         // 👇️ scroll to top on page load
         window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
       }, []);
    return (
      <div className="container mx-auto">
        <div className="w-full lg:w-[50%] mx-auto border-2 mt-5  border-yellow-500 p-2 shadow-2xl rounded-lg">
          <h3 className="text-3xl text-start py-2 font-bold">
            Project Name: <span>{name}</span>{" "}
          </h3>
          <p className="text-2xl py-2 text-start font-semibold">
            Description: <span className="text-sm font-normal">{desc}</span>{" "}
          </p>
          <div>
            <h3 className="text-3xl py-2 text-start font-semibold">
              Projects Features:{" "}
            </h3>
            <ul className="w-full lg:w-96 mx-auto">
              <div className="">
                {features.map((ele, idx) => (
                  <li key={idx} className="flex py-2 items-start">
                    {" "}
                    {/* <FaCaretSquareRight /> */}
                    {idx + 1}. {ele}
                  </li>
                ))}
              </div>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl py-2 text-start font-semibold">
              Technologies:{" "}
              <span className="text-sm">
                #ReactJs, #NodeJs, #ExpressJs, #MongoDB, #Tailwind, #Firebase,
                #NPM
              </span>
            </h3>
          </div>
          <div>
            <div className="card-actions justify-center my-3">
              <a href={liveSite} target="_blank" rel="noreferrer">
                <button className="btn btn-info text-white btn-sm">
                  Live Site
                </button>
              </a>
              <a href={clientCode} target="_blank" rel="noreferrer">
                <button className="btn btn-warning btn-sm">Client Code</button>
              </a>
              <a href={serverCode} target="_blank" rel="noreferrer">
                <button className="btn btn-accent btn-sm">Server Code</button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl mt-5 text-center font-semibold">
            Some Images Of Site
          </h3>
          <ProjectDetailBanner img1={img1} img2={img2} img3={img3} />
        </div>
      </div>
    );
};

export default ProjectDetails;