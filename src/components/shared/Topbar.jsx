import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import {
  FaBars,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaSquareXTwitter } from "react-icons/fa6";


export default function Topbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "For Rent", link: "/" },
    { title: "For Sale", link: "/" },
    { title: "Sign-in", link: "/sign-in" }
  ];

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };

  return (
    <div className="">
      <div className="bg-white gap-4 block mx-auto p-4 md:flex w-full sm:max-w-5xl justify-between items-center">
        <div className="flex cursor-pointer ml-12">
          <p className="flex flex-col md:flex-row">Follow us on | </p>
          <FaFacebook className="mx-2 text-xl" />
          <FaInstagramSquare className="mx-2 text-xl" />
          <FaSquareXTwitter className="mx-2 text-xl" />
          <FaLinkedin className="mx-2 text-xl" />
        </div>
        <div className="relative mt-4 sm:mt-0 ml-12">
          <HiOutlineSearch
            fontSize={20}
            className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
          />
          <input
            type="text"
            placeholder="Search..."
            className="text-sm focus:outline-none active:outline-none h-10 w-[15rem] border border-gray-300 rounded-sm pl-11 pr-4 bg-amber-50"
          />
        </div>
      </div>
      {/* NavBar */}
      <div className="bg-amber-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center max-w-5xl mx-auto justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="">
                GBE Estates
              </a>
            </div>
            {/* NavLinks */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    className="text-gray-700 transition-all duration-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-sm"
                    href={link.link}
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
            {/* Hamburger links */}
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={handleMenu} 
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open Main Menu</span>
                {open === true ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Styles */}
      { open ? (<div className="md:hidden">
        <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
          { navLinks.map((link, index) => (
            <a key={index} className=" hover:bg-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href={link.link}>{link.title}</a>
          ))}
        </div>
      </div>) : null }
    </div>
  );
}
