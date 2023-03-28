import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Loader from "../Loader/Loader";

const ProjectLayout = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setIsLoading(false);
      });
  }, []);
  const item = (
    <>
      <li className="bg-black  text-white border mx-3  hover:border-yellow-300 hover:text-yellow-300 uppercase font-semibold">
        <Link to="/projects">All Projects</Link>
      </li>
      {isLoading && <Loader />}
      {categories?.map((category) => (
        <li
          key={category?._id}
          className="bg-black  text-white border mx-3  hover:border-yellow-300 hover:text-yellow-300 uppercase font-semibold"
        >
          <Link to={`/project/${category?._id}`}>{category?.name}</Link>
        </li>
      ))}
    </>
  );
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Navbar />
          {/* <!-- Navbar --> */}

          <div className="w-full container mx-auto lg:bg-white bg-base-300 navbar lg:mt-10  justify-center">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 lg:hidden">Projects</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">{item}</ul>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          <div className="container mx-auto">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            {item}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
