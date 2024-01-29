import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navigation = () => {
  const navLinks = [
    {
      id: "catalogues",
      title: "Catalogues",
    },
    {
      id: "blog",
      title: "Blog",
    },
    {
      id: "contact",
      title: "Contact us",
    },
  ];
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <nav className="bg-transparent sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/" className="text-xl ml-4 font-bold text-white">
            TechEx
          </Link>
        </div>
        {/* search bar  */}

        {/* Desktop Navigation */}
        <ul className="list-none sm:flex hidden justify-center items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-bold text-white  cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center mr-4">
          {/* Add other navigation items for desktop */}
          <Link to="/signin" className="text-white ml-4 hidden md:block">
            Login
          </Link>
          <Link to="" className="text-white ml-8">
            <MdOutlineShoppingBag className="font-bold text-3xl" />
          </Link>
          {/* Mobile Navigation */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            {/* Menu icon */}
            {toggle ? (
              <IoClose
                className="w-[28px] text-white h-[28px] ml-4 object-contain"
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <RiMenu4Line
                className="w-[28px] text-white h-[28px] ml-4 object-contain"
                onClick={() => setToggle(!toggle)}
              />
            )}

            {/* Sidebar */}
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                {/* Include the Login component in the sidebar */}
                <Link
                  to="/signin"
                  className="rounded-3xl mx-2 mt-4 hover:bg-slate-500 py-2 px-4 transition-all duration-300 ease-in-out bg-slate-400 font-poppins font-medium cursor-pointer text-[16px]"
                >
                  Login
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
