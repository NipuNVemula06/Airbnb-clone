import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import { useState, useEffect } from "react";

function Header() {
  const [show, handleShow] = useState(false);

  // below code is for header scroll effect
  useEffect(() => {
    const listener = () => {
      if (window.screenY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
      window.addEventListener("scroll", listener);

      return () => window.removeEventListener("scroll", listener);
    };
  }, []);
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md  p-5 md:px-10">
      {/*  */}
      {/* Left Section */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="/Images/logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="Airbnb Logo"
        />
      </div>

      {/* Middle Section */}
      <div
        className="flex items-center md:border-2 rounded-full py-2 
            md:shadow-sm text-gray-600 placeholder-gray-400"
      >
        <input
          className="flex-grow pl-5 bg-transparent outline-none font-medium"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full 
        p-2 cursor-pointer md:mx-2"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline text-lg font-medium cursor-pointer">
          Become a host
        </p>
        <GlobeAltIcon className="h-7" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-7" />
          <UserCircleIcon className="h-7" />
        </div>
      </div>
    </header>
  );
}

export default Header;
