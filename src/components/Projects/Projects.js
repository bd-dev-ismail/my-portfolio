import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBestProject from '../Home/DisplayProejct/SingleBestProject';

const Projects = () => {
    const projects = useLoaderData();
    return (
      <div>
        {/* <h3 className="text-3xl font-semibold heading">
          My Best <span>Proejcts</span>
        </h3> */}
        <div className="grid grid-cols-1 my-20 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <SingleBestProject
              key={project._id}
              project={project}
            ></SingleBestProject>
          ))}
        </div>
      </div>
    );
};

export default Projects;