import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Icon from "../../assets/icon.svg";
import Upper from "../../assets/upper.svg";
import { IoMdSearch } from "react-icons/io";
import Catlog from "../../assets/catlog.svg";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="shadow-md">
      {/* upper navbar */}
      <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 py-1 px-4  flex justify-between items-center select-none">
        {/* <div class="container flex justify-between "> */}

        {/* logo */}
        <div className="w-[200px] ">
          <a href="#" className="flex gap-1">
            <img src={Logo} alt="logo" className="w-[55px]" />
            <div className="font-bold text-3xl sm:text-2xl py-2 text-white">
              CollegeCart
            </div>
          </a>
        </div>
        {/* search bar */}
        <div>
          <div className="group py-2 relative hidden sm:block">
            <input
              type="text"
              placeholder="search"
              className="w-[200px] sm:w-[500px] group-hover:w-[700px] rounded-full transition-all duration-300 border border-gray-600 px-2 py-1 focus:outline-none focus:border-1 focus:border-yellow-900"
            />
            <IoMdSearch className="text-gray-500 group-hover:text-gray-900 absolute top-1/2 -translate-y-1/2 right-3" />
          </div>
        </div>
        {/* right side  */}
        <div className="flex justify-between items-center gap-10 ">
          {/* loaction  */}
          <div
            className="  z-[999] right-0px relative select-none"
            id="dropdownButton  "
          >
            <div
              onClick={toggleDropdown}
              className="border-solid border-gray-300 border-[1px] h-[30px] px-[6px] py-[2px] rounded text-md cursor-pointer flex justify-between w-[200px] bg-white shadow-s"
            >
              Locations
              <img
                src={Upper}
                alt="icon"
                className={`w-5 transition-transform duration-300 transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              id="dropdown"
              className={`rounded border-[1px] border-gray-300 bg-white w-[250px] absolute top-[40px] shadow-md ${
                isDropdownOpen ? "" : "hidden"
              }`}
            >
              <div className="cursor-pointer hover:bg-gray-300 p-2">
                Parul University
              </div>
              <div className="cursor-pointer hover:bg-gray-300 p-2">
                Sumandeep Vidhyapeeth
              </div>
              <div className="cursor-pointer hover:bg-gray-300 p-2">
                Mahraj shivaji Rao university
              </div>
              <div className="cursor-pointer hover:bg-gray-300 p-2">
                Navrachana University
              </div>
              <div className="cursor-pointer hover:bg-gray-300 p-2">
                GSFC University
              </div>
            </div>
          </div>
          {/* login */}
          <div>
            <div className="border-gray-300 border-2px bg-white px-5 py-[4px] p-4 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-gray-200 transform hover:scale-105 select-none">
              <p className="uppercase">login</p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* lower navbar */}
      <div className="py-1 flex gap-[155px]">
        <div className="px-10 flex  items-center gap-[140px] ">
          {/* categories dropdown */}
          <div
            className="  right-0px relative select-none"
            id="dropdownButton  "
          >
            <div className="border-solid border-gray-500 border-[1px] h-[30px] px-[8px] py-[1px] rounded-full text-md cursor-pointer flex justify-between w-[200px] hover:bg-gray-100  bg-white shadow-s">
              <p className="px-3  "> All Catogries</p>
              <img
                src={Catlog}
                alt="catlog"
                className={"w-3 transition-transform duration-300 transform "}
              />
            </div>
            <div
              className={
                "rounded border-[1px] border-gray-300 bg-white w-[250px] absolute top-[40px] shadow-md hidden"
              }
            >
              <div className="cursor-pointer hover:bg-gray-300 p-2">
                Footwear
              </div>
              <div className="cursor-pointer hover:bg-gray-300 p-2">
                Electronics Gadgets
              </div>
              <div className="cursor-pointer hover:bg-gray-300 p-2">Books</div>
              <div className="cursor-pointer hover:bg-gray-300 p-2">
                Sports Items
              </div>
              <div className="cursor-pointer hover:bg-gray-300 p-2">Others</div>
            </div>
          </div>
          {/* other components */}
          <div className="links flex gap-[100px] px-1 cursor-pointer relative select-none">
            {["Home", "About us", "Community", "Help center"].map(
              (item, index) => (
                <a
                  key={index}
                  className={`text-lg font-md capitalize relative overflow-hidden hover:text-gray-600 group `}
                >
                  {item}
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-600 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out "></span>
                </a>
              )
            )}
          </div>
        </div>
        {/* sell component  */}
        <div className="flex justify-between items-center gap-10">
          <div className=" border-solid border-gray-500   border-[1px] px-6 py-[4px] p-4 rounded shadow-md transition-all duration-300 ease-in-out hover:bg-gray-200 transform hover:scale-105 select-none">
            <p className="uppercase">Sell your items </p>
          </div>
          {/* dark mode */}
          <div>
            <DarkMode />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
