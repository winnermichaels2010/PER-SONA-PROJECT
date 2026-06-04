import FullWidthGrid from "../components/grid-pictures";

function Homepage() {
  return (
    <div>
    <div className="relative w-full h-[585px] overflow-hidden shadow-lg">
      {/* Cover Image */}
      <img
        src="https://images.unsplash.com/photo-1776965767257-6b07d891a0a3?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Cover"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 slider-text p-100">
        <h1 className="text-4xl md:text-6xl font-bold">
          My name is Winner
        </h1>
        <p className="mt-4 text-lg md:text-2xl  font-semibold">
          Welcome to my world🚀 of TECH
        </p>
      </div> 
    </div>
    <br />
    <br />
    <h3 className="text-3xl md:text-5xl font-bold text-center">Am a Front-End Web Developer</h3><br />
    <FullWidthGrid/>
    <br />
    <br />
    </div>
  );
}

export default Homepage;