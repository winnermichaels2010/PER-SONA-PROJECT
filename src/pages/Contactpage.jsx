
// import {
//   FaPhone,
//   FaEnvelope,
//   FaWhatsapp,
//   FaGithub,
//   FaLinkedin,
// } from "react-icons/fa";

// function Userpage(){
//     return (
//         <div className="p-58.5 justify-center items-center bg-blue-200 text-center px-6">
//             <p className="text-4xl md:text-6xl font-bold">The Website is for Everyone. <br />
//            <strong className="mt-4 text-lg md:text-2xl">And Tell Others About me</strong></p>
//         </div>
//     )
// }

// export default Userpage

import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contactpage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-4 md:p-12">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-3">
          Contact Me
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Have a project in mind or want to work together? Feel free to reach
          out.
        </p>

        <div className="grid md:grid-cols-2 gap-3">
          <a
            href="mailto:winnermichael2010@gmail.com"
            className="flex items-center gap-4 p-5 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <FaEnvelope className="text-3xl text-red-500" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">winnermichael2010@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+2349168103341"
            className="flex items-center gap-4 p-5 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <FaPhone className="text-3xl text-green-500" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+234 916 810 3341</p>
            </div>
          </a>

          <a
            href="https://wa.me/2349168103341"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <FaWhatsapp className="text-3xl text-green-600" />
            <div>
              <h3 className="font-semibold">WhatsApp</h3>
              <p className="text-gray-600">Chat with me</p>
            </div>
          </a>

          <a
            href="https://github.com/winnermichaels2010"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <FaGithub className="text-3xl" />
            <div>
              <h3 className="font-semibold">GitHub</h3>
              <p className="text-gray-600">View my projects</p>
            </div>
          </a>
        </div>

        
      </div>
    </section>
  );
};

export default Contactpage;