// import profile from "../assets/profile.jpeg"


// function Aboutpage(){
//     return (
        
        
//         <div  className="flex items-center justify-center  flex-col text-gray-700 text-center shadow-xl shadow-lg p-10 min-h-screen w-full h-full text-wrap ">
//             <div  className=" bg-blue-800 text-center shadow-xl shadow-lg p-5 rounded-xl text-gray-200">
//                 <img src={profile} alt="profile" className="flex items-center justify-center w-60 rounded-full h-60 " /><h1 className="text-2xl font-bold text-center">Winner Sopuruchi <br />Michael</h1>
//             </div>
            

//             <p className="text-xl mt-4 text-lg text-gray-600">
//                 Frontend Web Developer | React Developer | Lifelong Learner
//             </p>
        
//             <br />
// <div  className="text-xl md:text-2xl lg:text-xl">
//             Hi,<br /> Am <strong>Winner Michael</strong>, a passionate Web Developer who enjoys building modern, responsive, and user-friendly websites. I love turning ideas into real-world digital experiences using technologies such as HTML, CSS, JavaScript, React, Tailwind CSS, and other modern web development tools.<p/>

//             <br />

//             <p>My journey in web development started with a curiosity about how websites work, and it has grown into a strong passion for creating clean, functional, and visually appealing applications. I am constantly learning new technologies and improving my skills to stay updated with the ever-evolving tech industry.</p>

//             <br />

//             <p>I enjoy solving problems, learning new concepts, and working on projects that challenge me to grow as a developer. My goal is to build impactful solutions that help people and businesses achieve their objectives online.</p>

//             <br />

//             <p>When I'm not coding, I spend time exploring new technologies, improving my development skills, and working on personal projects that expand my creativity and experience.</p>

//             <p>Thank you for visiting my portfolio. Feel free to explore my projects and get in touch with me.</p></div>
//         </div>
//     )
// }

// export default Aboutpage

import profile from "../assets/profile.jpeg";

function Aboutpage() {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="bg-blue-800 py-10 flex flex-col items-center">
            <img
              src={profile}
              alt="profile"
              className="w-44 h-44 rounded-full border-4 border-white object-cover shadow-lg"
            />

            <h1 className="mt-5 text-3xl font-bold text-white text-center">
              Winner Sopuruchi <br />
              Michael
            </h1>

            <p className="mt-2 text-blue-100 text-center">
              Frontend Web Developer | React Developer | Lifelong Learner
            </p>
          </div>

          {/* About Content */}
          <div className="p-8 md:p-12 text-gray-700 leading-8">

            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              About Me
            </h2>

            <p className="mb-6">
              Hi, I'm <strong>Winner Michael</strong>, a passionate Web
              Developer who enjoys building modern, responsive, and
              user-friendly websites. I love turning ideas into real-world
              digital experiences using technologies such as HTML, CSS,
              JavaScript, React, Tailwind CSS, and other modern web
              development tools.
            </p>

            <p className="mb-6">
              My journey in web development started with a curiosity about how
              websites work, and it has grown into a strong passion for
              creating clean, functional, and visually appealing applications.
              I am constantly learning new technologies and improving my skills
              to stay updated with the ever-evolving tech industry.
            </p>

            <p className="mb-6">
              I enjoy solving problems, learning new concepts, and working on
              projects that challenge me to grow as a developer. My goal is to
              build impactful solutions that help people and businesses achieve
              their objectives online.
            </p>

            <p className="mb-6">
              When I'm not coding, I spend time exploring new technologies,
              improving my development skills, and working on personal projects
              that expand my creativity and experience.
            </p>

            <p>
              Thank you for visiting my portfolio. Feel free to explore my
              projects and get in touch with me.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutpage;