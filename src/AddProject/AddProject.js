import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Loader from '../Loader/Loader';

const AddProject = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      setIsLoading(true);
      fetch("https://my-portfolio-server-bd-dev-ismail.vercel.app/categories")
        .then((res) => res.json())
        .then((data) => {
          setCategories(data);
          setIsLoading(false);
        });
    }, []);
    const handelAddProject = (data)=> {
        console.log(data);
        fetch("https://my-portfolio-server-bd-dev-ismail.vercel.app/proejcts", {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.acknowledged){
            alert('Proejct Added!')
          }
        })
    }
    
    return (
      <div className="mt-10 mb-20">
        <div>
          <section className="max-w-4xl p-6 mx-auto bg-black rounded-md shadow-md dark:bg-white mt-5">
            <h1 className="text-xl font-bold text-white capitalize dark:text-white">
              Add Project
            </h1>
            <form onSubmit={handleSubmit(handelAddProject)}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="name"
                  >
                    Project Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    id="name"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                  {errors.name && (
                    <span className="mt-3 text-gray-800">
                      name field is required
                    </span>
                  )}
                </div>

                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="image"
                  >
                    Project Image
                  </label>
                  <input
                    {...register("image", { required: true })}
                    id="image"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                  {errors.image && (
                    <span className="mt-3 text-gray-800">
                      image field is required
                    </span>
                  )}
                </div>
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="liveSite"
                  >
                    Live Site Link
                  </label>
                  <input
                    {...register("liveSite", { required: true })}
                    id="liveSite"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                  {errors.liveSite && (
                    <span className="mt-3 text-gray-800">
                      liveSite field is required
                    </span>
                  )}
                </div>
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="clientCode"
                  >
                    Client Link
                  </label>
                  <input
                    {...register("clientCode", { required: true })}
                    id="clientCode"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                  {errors.clientCode && (
                    <span className="mt-3 text-gray-800">
                      clientCode field is required
                    </span>
                  )}
                </div>
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="text"
                  >
                    Server Site Code
                  </label>
                  <input
                    {...register("serverCode")}
                    id="text"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="projectCategory"
                  >
                    Project Category
                  </label>
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <>
                      <select
                        {...register("projectCategoryId", { required: true })}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      >
                        <option>Select</option>
                        {categories?.map((category) => (
                          <option key={category._id} value={category?._id}>
                            {category?.name}
                          </option>
                        ))}
                      </select>
                    </>
                  )}
                </div>
              </div>

              <div>
                <label className="text-white dark:text-gray-200" htmlFor="desc">
                  Project Description
                </label>
                <textarea
                  {...register("desc", { required: true })}
                  id="desc"
                  type="textarea"
                  className="block h-36 w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                ></textarea>
              </div>
              <p className="text-center mt-2 text-white font-semibold">
                Note: Make Sure You Fill-Up Every Filed!
              </p>
              <div className="flex justify-center mt-6">
                <input
                  type="submit"
                  value="Publish Product"
                  className="btn btn-outline text-white"
                />
              </div>
            </form>
          </section>
        </div>
      </div>
    );
};

export default AddProject;