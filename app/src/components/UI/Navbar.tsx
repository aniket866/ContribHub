"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    "Programs",
    "Organizations",
    "Achievements",
    "Community",
  ];

  return (
    <>
      <header className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
        <div className="flex items-center gap-3 rounded-full bg-[#FFFFFF]/90 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl">

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-black text-white transition-transform duration-300 group-hover:rotate-6">
              C
            </div>

            <span className="hidden whitespace-nowrap text-sm font-black tracking-tight text-zinc-900 md:block">
              OpenRank
            </span>
          </Link>

          <div className="hidden h-5 w-px bg-zinc-200 md:block" />

          {/* Desktop Nav */}
          <nav className="hidden items-center md:flex">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="
                  rounded-full
                  px-3
                  py-1.5
                  text-sm
                  font-medium
                  text-zinc-600
                  transition-all
                  duration-200
                  hover:bg-black
                  hover:text-white
                "
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden h-5 w-px bg-zinc-200 md:block" />

          {/* Actions */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              className="
                rounded-full
                px-3
                py-1.5
                text-sm
                font-medium
                text-zinc-700
                transition
                hover:bg-zinc-100
              "
            >
              Login
            </button>

            <button
              className="
                rounded-full
                bg-black
                px-4
                py-1.5
                text-sm
                font-medium
                text-white
                transition-transform
                hover:scale-105
              "
            >
              Get Started
            </button>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-1 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed left-1/2 top-20 z-40 w-[90%] max-w-sm -translate-x-1/2 rounded-3xl bg-[#FDFBF7] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)] md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-zinc-700
                  hover:bg-zinc-100
                "
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            ))}

            <div className="mt-2 h-px bg-zinc-200" />

            <button className="rounded-xl px-4 py-3 text-left text-sm font-medium text-zinc-700 hover:bg-zinc-100">
              Login
            </button>

            <button className="rounded-xl bg-black px-4 py-3 text-sm font-medium text-white">
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
}