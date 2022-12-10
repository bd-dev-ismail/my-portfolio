import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import contact from '../../assets/contact.jpg';
import { toast } from 'react-hot-toast';
const Contact = () => {
  //  const form = useRef();
  // console.log(form);
   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm(
         process.env.REACT_APP_SERVICE_KEY,
         process.env.REACT_APP_TEMPLATE_KEY,
         e.target,
         process.env.REACT_APP_PUBLIC_KEY
       )
       .then(
         (result) => {
           console.log(result);
           console.log("mcg sent");
           toast.success("Message Sent Successfully!");
         },
         (error) => {
           console.log(error.text);
         }
       );
   };
    return (
      <div>
        <div className="grid items-center max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Let's talk!
              </h2>
              <div className="dark:text-gray-400">
                For any question me? Please don't hasitate to Contact me!.
              </div>
            </div>
            <img src={contact} alt="" className="p-6 " />
          </div>
          <form
            // ref={form}
            onSubmit={sendEmail}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div>
              <label htmlFor="name" className="text-sm">
                Full name
              </label>
              <input
                name="user_name"
                id="name"
                type="text"
                placeholder=""
                className="w-full input input-bordered p-3 rounded dark:bg-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                name="user_email"
                id="email"
                type="email"
                className="w-full input input-bordered p-3 rounded dark:bg-gray-800"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="3"
                className="w-full textarea textarea-bordered  p-3 rounded dark:bg-gray-800"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-yellow-500 dark:text-gray-900"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
};

export default Contact;