import React from "react";

const Journey = () => {
  return (
    <div
      className="
        flex flex-col lg:flex-row
        justify-center items-start
        gap-6 lg:gap-[64px]
        mt-16 sm:mt-24 lg:mt-[162px]
        px-4
      "
    >
      {/* TITLE */}
      <h2
        className="
          text-[28px] sm:text-[32px] lg:text-[38px]
          font-bold
          whitespace-nowrap
        "
      >
        My{" "}
        <span className="text-gray-700 text-[28px] sm:text-[32px] lg:text-[38px] font-bold">
          Journey
        </span>
      </h2>

      {/* TEXT */}
      <div className="flex">
        <p
          className="
            text-gray-700
            text-[14px] sm:text-[15px] lg:text-[16.4px]
            leading-[160%] lg:leading-[144%]
            max-w-[650px]
          "
        >
          I’m a passionate and detail-oriented front-end developer with hands-on
          experience in building and customizing websites using HTML, CSS,
          JavaScript, React, and TypeScript. I’ve successfully completed a
          project-based front-end development program, where I gained practical
          experience through real-world projects— many of which are showcased on
          my GitHub. I’m also familiar with WordPress customization and
          continuously seek opportunities to expand my skills. Highly adaptable
          and eager to learn, I thrive in dynamic environments that challenge me
          to grow and collaborate effectively within a team.
          <br />
          <br />
          with experience in building interactive user interfaces and documenting tasks. Proficient in React.js, Next.js, and Tailwind CSS for creating fast and scalable applications. Strong collaboration skills with backend teams to solve UI/UX challenges and improve user experience. Optimized website performance.
          <br />
          <br />
           In
          recent years, I’ve helped startups achieve milestones, I’m passionate about creating impactful
          digital experiences that drive success.
        </p>
      </div>
    </div>
  );
};

export default Journey;
