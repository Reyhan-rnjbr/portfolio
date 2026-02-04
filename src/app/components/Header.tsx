"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative px-4 sm:px-6 lg:mx-[82px] mt-6">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <p className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold">
          Rey.Ranjbar
        </p>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 px-10 py-4 bg-white/60 backdrop-blur-md rounded-full shadow-md">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/work">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* DESKTOP BUTTON */}
        <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-white border rounded-full shadow-sm">
          Get in Touch
        </button>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mt-4 rounded-2xl bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6">
            <li onClick={() => setOpen(false)}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="/work">Portfolio</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
