import React, { useEffect, useState } from 'react';
import SingleBestProject from '../Home/DisplayProejct/SingleBestProject';

const All = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=> {
        fetch("http://localhost:5000/projects")
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return (
      <div>
        <h3 className="text-3xl mt-5 text-center font-semibold heading">
          All <span>Proejcts</span>
        </h3>
        <div className="grid grid-cols-1 mt-10 mb-20 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

export default All;