import React from "react";
import PortfolioCard from "./PortfolioCard";
import Link from "next/link";

type Card = {
  image: string;
  title: {
    primary: string;
    secondary: string;
  };
  description: string;
  tags?: string[];
  github?: string;
  demo?: string;
};

const cards: Card[] = [
  {
    image: "/greencart.jpg",
    title: {
      primary: "greenCart",
      secondary: "– API-based",
    },
    description:
      "A Next.js project featuring API-based authentication, built with React Query, Zustand, React Hook Form, and Axios.",
    tags: ["React", "axios", "React Hook Form"],
    github: "https://github.com/Reyhan-rnjbr/greenCart",
    demo: "https://kaso-demo.com",
  },
  {
    image: "/Hamrahman.jpg",
    title: {
      primary: "Hamrah Aval",
      secondary: "- Mobile First",
    },
    description:
      " A mobile-first, bilingual React project developed for Hamrah Aval, using i18next, Tailwind CSS, Zustand, and Framer Motion",
    tags: ["React", "Zustand", "Tailwind CSS"],
    github: "https://github.com/Reyhan-rnjbr/hamrahMan.git",
    demo: "/HamrahMan.mp4",
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16 sm:mt-24 lg:mt-[64px] px-4">
      {/* HEADER */}
      <div className="text-center">
        <h2 className="font-semibold text-[28px] sm:text-[36px] lg:text-[48px] mb-4 sm:mb-[24px]">
          Portfolio
        </h2>
        <p className="text-gray-700 text-[14px] sm:text-[16px] lg:text-[18px] font-medium">
          Check out what I've been working on lately
        </p>
      </div>

      {/* GRID */}
      <div
        className="
          grid grid-cols-1 md:grid-cols-2
          mt-10 sm:mt-[64px]
          gap-4 sm:gap-[24px]
          mx-0 sm:mx-0 lg:mx-[82px]
        "
      >
        {cards.map((item, index) => (
          <PortfolioCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            tags={item.tags}
            github={item.github}
            demo={item.demo}
          />
        ))}
      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-10 sm:mt-[64px] mb-16">
        <Link
          href="/work"
          className="
            border border-gray-300
            rounded-full
            text-gray-700 font-semibold
            px-6 sm:px-[38px]
            py-2 sm:py-[12px]
            text-sm sm:text-base
            hover:border-yellow-400 hover:text-yellow-400
            transition
          "
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
