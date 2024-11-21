import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { BsHCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    console.log("Logging out..."); // Replace with actual logout logic
    setIsDropdownOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="flex gap-6 h-[13vh] items-center border-b-2 border-white shadow-sm">
        <img src={logo} alt="Logo" className="h-6 w-6 ml-6" />

        {/* Links with hover fix */}
        <Link
          to="/home"
          className="px-4 py-3 rounded-full transition duration-0 border-2 border-transparent hover:border-black hover:bg-black hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/create"
          className="px-4 py-3 rounded-full transition duration-0 border-2 border-transparent hover:border-black hover:bg-black hover:text-white"
        >
          Create
        </Link>
        <button className="border-2 p-3 px-[30%] rounded-full bg-[#E1E1E1] border-[#E1E1E1]">
          Search
        </button>

        <p className="text-[30px]">
          <IoIosNotifications />
        </p>
        <p className="text-[25px]">
          <RiMessage2Fill />
        </p>
        <Link to="/saved" className="text-[25px]">
          <BsHCircleFill />
        </Link>

        {/* Dropdown Trigger */}
        <div className="relative">
          <p
            className="text-[20px] flex items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <FaChevronDown />
          </p>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="absolute top-full right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-md w-40">
              <Link to="/"
                className="px-4 py-2 cursor-pointer text-red-600"
                onClick={handleLogout}
              >
                Log Out
              </Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
