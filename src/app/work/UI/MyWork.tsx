import Link from "next/link";
import React from "react";
const projects = [
  {
    image: "/flowris.jpg",
    github: "https://github.com/Reyhan-rnjbr/flowrisw-next.git",
    live: "",
  },

  {
    image: "/rentalCars.jpg",
    github: "https://github.com/Reyhan-rnjbr/rentalcar",
    live: "",
  },

  {
    image: "/Tabs.jpg",
    github: "https://github.com/Reyhan-rnjbr/aboutTabs",
    live: "",
  },

  {
    image: "/cafeMenu.jpg",
    github: "https://github.com/Reyhan-rnjbr/cafeMenu",
    live: "",
  },

  {
    image: "/component.jpg",
    github: "https://github.com/Reyhan-rnjbr/component.git",
    live: "",
  },

  {
    image: "/Gogreen.jpg",
    github: "https://github.com/Reyhan-rnjbr/go-green1",
    live: "",
  },

  {
    image: "/realState.jpg",
    github: "https://github.com/Reyhan-rnjbr/realState",
    live: "",
  },

  {
    image: "/argo.jpg",
    github: "https://github.com/Reyhan-rnjbr/argo2",
    live: "",
  },

  {
    image: "/khanban.jpg",
    github: " https://github.com/Reyhan-rnjbr/khanba.git",
    live: "",
  },

  {
    image: "/Ave.jpg",
    github: "https://github.com/Reyhan-rnjbr/Ave",
    live: "",
  },

  {
    image: "/countries.jpg",
    github: "https://github.com/Reyhan-rnjbr/countries.git",
    live: "",
  },
];

const MyWork = () => {
  return (
    <div className="flex flex-col  header-bg">
      <div className="flex flex-wrap gap-3 justify-center mt-20 px-4">
        <button className="border border-gray-200 bg-white rounded-full text-gray-700 px-4 py-1 text-sm sm:text-base font-medium">
          Front-End
        </button>
        <button className="border border-gray-200 bg-white rounded-full text-gray-700 px-4 py-1 text-sm sm:text-base font-medium">
          React Developer
        </button>
        <button className="border border-gray-200 bg-white rounded-full text-gray-700 px-4 py-1 text-sm sm:text-base font-medium">
          Web Design
        </button>
      </div>

      <h2 className="font-bold text-gray-700 text-center mt-6 text-[32px] sm:text-[44px] lg:text-[59px]">
        My <span className="text-black">Work</span>
      </h2>

      <p className="text-gray-700 font-medium text-center mt-4 px-4 text-sm sm:text-base lg:text-[18px]">
        Whether you’re looking to discuss a new project, seek advice, or
        collaborate, I’m always excited to connect and
        <br />
        explore new possibilities.
      </p>
      <div className="flex justify-center items-center">
        <a href="https://www.linkedin.com/in/reyhane-ranjbar-340b81104?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
          <button className="border border-gray-300 bg-white rounded-full flex items-center gap-2 py-3 px-8 text-gray-700 font-semibold mt-6 mb-20  hover:border-yellow-400 hover:text-yellow-400">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42187 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043V17.043Z"
              fill="#667085"
            />
          </svg>
          Contact Me
        </button>
        </a>
      </div>
      <div
        className=" grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  gap-4
  px-4
  sm:px-10
  lg:px-[176px]
  mb-20"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-[12px]"
          >
            {/* تصویر پروژه */}
            <img
              src={project.image}
              alt=""
              className="object-cover aspect-[1/1] w-full h-full bg-gray-100"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-[12px]">
              {/* Live Demo */}
              <Link
                href={project.live}
                target="_blank"
                className="px-[16px] py-[8px] bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition"
              >
                Live Demo
              </Link>

              {/* GitHub */}
              <Link
                href={project.github}
                target="_blank"
                className="px-[16px] py-[8px] bg-black text-white rounded-full text-sm font-medium border border-white hover:bg-gray-800 transition"
              >
                GitHub
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
