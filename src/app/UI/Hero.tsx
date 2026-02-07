import React from "react";

const Hero = () => {
  return (
    <>
      {/* TOP SECTION */}
      <div className="relative flex justify-center items-center mt-12">
        
        {/* LEFT ICON */}
        <div className="group absolute left-4 sm:left-12 lg:left-32 top-1/3">
          <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
            {/* svg content */}
          </svg>

          <button className="
            hidden 
            group-hover:flex 
            items-center gap-2 
            bg-gray-700 text-white 
            px-3 py-1 
            rounded-full 
            mt-2
          ">
            <img
              src="/avatar.jpg"
              className="w-6 h-6 rounded-full"
              alt=""
            />
            <span className="text-sm font-medium">Reyhane</span>
          </button>
        </div>

        {/* RIGHT ICON */}
        <div className="group absolute right-4 sm:right-12 lg:right-32 top-1/3">
          <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
            {/* svg content */}
          </svg>

          <button className="
            hidden 
            group-hover:flex 
            items-center gap-2 
            bg-gray-700 text-white 
            px-3 py-1 
            rounded-full 
            mt-2
          ">
            <img
              src="/avatar.jpg"
              className="w-6 h-6 rounded-full"
              alt=""
            />
            <span className="text-sm font-medium">Reyhane</span>
          </button>
        </div>

        {/* PROFILE IMAGE */}
        <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden">
          <img
            src="/portfolio2.jpg"
            alt="profile"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* TAGS */}
      <div className="flex flex-wrap justify-center gap-3 mt-6 px-4">
        {["Front-End", "React Developer", "Web Design"].map((item) => (
          <span
            key={item}
            className="px-4 py-1 rounded-full border bg-gray-100 text-gray-700 text-sm sm:text-base"
          >
            {item}
          </span>
        ))}
      </div>

      {/* TEXT CONTENT */}
      <div className="flex flex-col items-center text-center px-4 mt-12">
        <h1 className="font-bold text-3xl sm:text-5xl">
          <span className="text-gray-700">Reyhane </span>Ranjbar
        </h1>

        <p className="text-gray-700 mt-4 max-w-2xl text-sm sm:text-base">
          Whether you’re looking to discuss a new project, seek advice, or
          collaborate, I’m always excited to connect and explore new possibilities.
        </p>

        <a
          href="https://www.linkedin.com/in/reyhane-ranjbar-340b81104"
          target="_blank"
          className="mt-6"
        >
          <button className="
            flex items-center gap-2 
            px-8 py-3 
            rounded-full 
            border 
            bg-white 
            hover:border-yellow-400 
            hover:text-yellow-400
          ">
            <span className="font-semibold">Contact Me</span>
          </button>
        </a>
      </div>
    </>
  );
};

export default Hero;
