"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const handleNavbarClick = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <>
      <nav
        className={`bg-black w-full flex relative justify-between items-center mx-auto px-4 sm:px-8 md:px-16 lg:px-20 h-20 ${
          openNavbar
            ? "border-b-[1px] border-white md:border-none"
            : "border-none"
        }`}
      >
        <div className="inline-flex">
          <Link href="/">
            <div className="text-2xl font-bold">
              <Image
                src="/icons/logo.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
          </Link>
        </div>

        <div className="block sm:hidden">
          {/* Mobile Navigation Button */}
          <button onClick={handleNavbarClick}>
            <Image src={"/icons/menu.svg"} alt="menu" width={35} height={35} />
          </button>
        </div>

        <div
          className={`hidden sm:flex flex-shrink-0 flex-grow-0 justify-start items-center gap-3 px-2 ${
            openNavbar ? "block" : "hidden"
          }`}
        >
          {/* Desktop Navigation */}
          <form
            action="#"
            className="inline-flex items-center gap-2 max-w-full"
          >
            <input
              className="flex items-center flex-grow-0 text-black flex-shrink pl-2 relative w-60 border rounded-xl px-1 py-2"
              type="text"
              name="search"
              placeholder="Start your search"
            />
            <button
              type="submit"
              className="bg-[#db0000] flex items-center justify-center relative h-10 w-10 rounded-xl"
            >
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="block fill-none h-[15px] w-[15px] stroke-current overflow-visible"
                style={{
                  strokeWidth: "5.33333",
                  overflow: "visible",
                }}
              >
                <g fill="none">
                  <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                </g>
              </svg>
            </button>
          </form>

          <h1 className="text-2xl text-white font-bold">Gilang</h1>
        </div>
      </nav>
      {openNavbar && (
        <div className="w-full bg-black flex flex-col gap-3 items-center justify-between sm:hidden py-6 border-b-[1px] border-white">
          {/* Mobile Navigation */}
          <h1 className="text-2xl text-white font-bold hover:bg-[#221F1F]">
            Gilang
          </h1>

          <form
            action="#"
            className="inline-flex items-center gap-2 max-w-full"
          >
            <input
              className="flex items-center flex-grow-0 text-black flex-shrink pl-2 relative w-60 border rounded-xl px-1 py-2"
              type="text"
              name="search"
              placeholder="Start your search"
            />
            <button
              type="submit"
              className="bg-[#db0000] flex items-center justify-center relative h-10 w-10 rounded-xl"
            >
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="block fill-none h-[15px] w-[15px] stroke-current overflow-visible"
                style={{
                  strokeWidth: "5.33333",
                  overflow: "visible",
                }}
              >
                <g fill="none">
                  <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                </g>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Navbar;
