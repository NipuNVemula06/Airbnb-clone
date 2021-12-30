import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({ placeholder }) {
  const [show, handleShow] = useState(false); //for header scroll
  const [searchInput, setSearchInput] = useState(""); //search input
  const [startDate, setStartDate] = useState(new Date()); //for date range
  const [endDate, setEndDate] = useState(new Date()); //for date range
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  // range for the date picker
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  //onchange function for date range picker
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(), //string representation that we can use in the url
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  // below code is for header scroll effect
  const transitionHeader = () => {
    if (window.scrollY > 70) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionHeader);
    return () => window.removeEventListener("scroll", transitionHeader);
  }, []);

  return (
    <header
      className={`fixed w-screen top-0 z-50 grid grid-cols-3 ${
        show && "bg-white shadow-lg "
      }  p-5 md:px-10 transition duration-150 ease-in-out `}
    >
      {/* Left Section */}
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
        <Image
          loading="lazy"
          src="/Images/logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="Airbnb Logo"
        />
      </div>

      {/* Middle Section */}
      <div
        className={`flex items-center md:border-2 rounded-full shadow-xl py-2 
               md:shadow-sm text-gray-600  placeholder-gray-400 ${
                 show ? "" : "border-gray-400"
               }`}
      >
        <input
          className="flex-grow pl-5 bg-transparent outline-none font-medium truncate"
          type="text"
          placeholder={placeholder || "Start your search"}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
        <div
          className={`flex items-center space-x-2 border-2 ${
            show ? "" : "border-gray-400"
          }  p-2 rounded-full`}
        >
          <MenuIcon className="h-7" />
          <UserCircleIcon className="h-7" />
        </div>
      </div>

      {/* Date range picker */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-6 p-5 text-lg  rounded-xl bg-white shadow-2xl font-medium">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold ">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          {/* div>button*2 shortcut */}
          <div className="flex text-xl">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow text-red-400 hover:text-white hover:bg-red-400 rounded-lg
                     p-2 active:scale-90 transition duration-140"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
