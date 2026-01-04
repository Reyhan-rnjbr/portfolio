import React from "react";
import PortfolioCard from "./PortfolioCard";
import Link from "next/link";
type Cards = {
  image: string;
  title: {
    primary: string;
    secondary: string;
  };
  description: string;
  tags?: string[];
  href: string;
};

const Cards: Cards[] = [
  {
    image: "/card1.jpg",
    title: {
      primary: "KASO",
      secondary: "– YC Combinator Platform",
    },
    description:
      "Kaso YC (formerly ElKaso) is an online B2B platform that facilitates order processing and communication between restaurants and suppliers.",
    tags: ["KASO", "Foodtech", "YC Combinator"],
    href: "",
  },

  {
    image: "/card1.jpg",
    title: {
      primary: "KASO",
      secondary: "– YC Combinator Platform",
    },
    description:
      "Kaso YC (formerly ElKaso) is an online B2B platform that facilitates order processing and communication between restaurants and suppliers.",
    tags: ["KASO", "Foodtech", "YC Combinator"],
    href: "",
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-6xl mx-auto  mt-[64px] ">
     <div className="text-center">
       <h2 className="font-semibold text-[48px] mb-[24px] ">Portfolio</h2>
      <p className="text-gray-700 text-[18px] font-medium">
        Check out what we've been working on lately
      </p>
     </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-[64px] gap-[24px] mx-[82px]">
        {Cards.map((item) => (
          <Link key={item.href} href={item.href} className="block">
            <PortfolioCard
              image={item.image}
              title={item.title}
              description={item.description}
              tags={item.tags}
            />
          </Link>
        ))}
      </div>
      <div className="flex  justify-center mt-[64px] mb-[64px]">
        <Link
          href=""
          className="border border-gray-300 rounded-full text-gray-700 font-semibold px-[38px] py-[12px]"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
