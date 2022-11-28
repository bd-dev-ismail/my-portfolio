import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SingleBestProject from './SingleBestProject';

const DisPlayProject = () => {
  const [projects, setProjects] = useState([]);
  fetch('bestProjects.json')
  .then(res => res.json())
  .then(data => setProjects(data));
  console.log(projects);
    return (
      <div id='best-project' className="my-20 container mx-auto">
        <div className="text-center">
          <h3 className="text-3xl font-semibold heading">
            My Best <span>Proejcts</span>
          </h3>
          <p className="my-2">
            There are some Full Stack Proejct, which create with Reactjs,
            NodeJs, ExpressJs With MongoDB. <br /> Each Proejct Details bellow
            in Project Description Section.
          </p>
        </div>
        <div className='grid grid-cols-1 my-20 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {projects.map((project) => (
            <SingleBestProject
              key={project._id}
              project={project}
            ></SingleBestProject>
          ))}
        </div>
        <div className='text-center'>
          <Link to="/projects">
          <button className='btn  btn-warning text-white'>
            All Projects
            </button></Link>
        </div>
      </div>
    );
};

export default DisPlayProject;