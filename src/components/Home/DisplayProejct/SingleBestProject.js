import React from 'react';
import { Link } from 'react-router-dom';


const SingleBestProject = ({project}) => {
    const { image, name, liveSite, clientCode, serverCode, desc, _id } = project;
    return (
      <div className="card card-compact w-full lg:w-96 bg-base-100 border-2 border-yellow-400 hover:border-info shadow-2xl">
        <figure>
          <img src={image} alt="" className="h-64" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            {desc ? desc.slice(0, 100) : ""}{" "}
            {/* <a
              className="text-info underline"
              href={clientCode}
              target="_blank"
              rel="noreferrer"
            >
              More Details
            </a> */}
            {/* <Link className='underline text-blue-600' to={`/projects/${_id}`}>More Details</Link> */}
          </p>
          <div className="card-actions justify-center">
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
    );
};

export default SingleBestProject;