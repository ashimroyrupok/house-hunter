import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { BsCartCheck } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const navList = (
    <>
      <Link to="/" className="lg:ml-4">
        Home
      </Link>
      <Link to="/about" className="lg:ml-4">
        About
      </Link>
      <Link to="/contact" className="lg:ml-4">
        Contact
      </Link>
      <Link to="/services" className="lg:ml-4">
        Services
      </Link>
    </>
  );

  return (
    <div className="px-4  pb-3 bg-gray-100 lg:px-12 py-2">
      <div className="flex justify-between items-center">
        <div className="logo">
          <h1 className="font-semibold text-xl">House Hunter</h1>
        </div>

        {/* Desktop menu */}
        <div className="hidden pt-2 lg:block">
          <ul className="lg:flex lg:gap-4">{navList}</ul>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } lg:hidden transition-all duration-500 border border-gray-200 shadow-lg backdrop-blur-sm transform h-full w-[350px] bg-white text-black absolute top-0 left-0`}
        >
          <button
            className="px-4 py-2 text-3xl font-semibold flex absolute right-0 mt-2"
            onClick={() => setOpen(false)}
          >
            <RxCross1 />
          </button>

          <ul className="flex  flex-col p-5 gap-5 text-[18px]">{navList}</ul>
        </div>

        <div className="flex gap-1 pt-2 items-center">
          <Link to="/login">
            <button className="hidden lg:block bg-slate-800 border border-slate-700 hover:bg-transparent hover:text-black duration-500 rounded-md text-white px-5 py-2 lg:ml-4">
              Login
            </button>
          </Link>
          <Link to="/signUp">
            <button className="hidden lg:block border px-6 py-2 border-slate-700 lg:ml-4 hover:bg-slate-800 hover:text-white rounded-md duration-500 ">
              Registration
            </button>
          </Link>
          <IoMdMenu
            className="text-2xl cursor-pointer lg:hidden ml-4"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
