"use client";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <button className="    border border-gray-200
    bg-gray-100
    rounded-full
    text-gray-700
    px-4 sm:px-5
    py-1
    text-sm sm:text-base
    mx-auto
    mt-12 sm:mt-16
    mb-4">
        Crafting Experiences That Matter
      </button>
      <div>
        <h2 className="text-[59px] text-sm sm:text-base font-bold text-center text-gray-700">
          Get in
          <span className="text-[59px] font-bold text-center text-black">
            Touch
          </span>
        </h2>
      </div>
      <p className="text-[18px] text-sm sm:text-base font-medium text-gray-700 text-center mt-[24px] mb-[24px]">
        Whether you’re looking to discuss a new project, seek advice, or
        collaborate, I’m always excited to connect and <br />
        explore new possibilities.
      </p>
      <div className="flex justify-center items-center">
        <button className="border border-gray-300 bg-white rounded-full flex items-center gap-[6px] py-[12px] px-[38px] text-gray-700 font-semibold mt-[24px] mb-[24px]">
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
      </div>
      <div className="flex items-center w-full max-w-md mx-auto">
        <div className="flex-1 h-px bg-gray-300" />

        <span className="mx-4 text-sm text-gray-700 font-semibold whitespace-nowrap">
          Or
        </span>

        <div className="flex-1 h-px bg-gray-300" />
      </div>
    </div>
  );
};

export default Contact;
