import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
const GuestSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const increment = (type) => {
    if (type === "adults") {
      setAdults(adults + 1);
    } else if (type === "children") {
      setChildren(children + 1);
    }
  };

  const decrement = (type) => {
    if (type === "adults" && adults > 1) {
      setAdults(adults - 1);
    } else if (type === "children" && children > 0) {
      setChildren(children - 1);
    }
  };

  return (
    <div className="relative">
      {/* Guest Selector Button */}
      <button
        className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md text-gray-700 border border-gray-300 pl-9 w-60"
        onClick={toggleDropdown}
      >
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500">
            <IoPersonSharp />
          </span>
        <span>{`${adults} adult${adults > 1 ? "s" : ""} & ${children} child${
          children > 1 ? "ren" : ""
        }`}</span>
        <span     className="text-left pl-10"> ▼</span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <div className="p-4">
            {/* Adults */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-600">Adults (Age 18+)</p>
                <p className="text-xl font-semibold">{adults}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decrement("adults")}
                  className="text-lg text-gray-600 p-2 bg-gray-200 rounded-md"
                >
                  <AiOutlineMinus />
                </button>
                <button
                  onClick={() => increment("adults")}
                  className="text-lg text-gray-600 p-2 bg-gray-200 rounded-md"
                >
                  <AiOutlinePlus />
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-600">Children (Age 0-17)</p>
                <p className="text-xl font-semibold">{children}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decrement("children")}
                  className="text-lg text-gray-600 p-2 bg-gray-200 rounded-md"
                >
                  <AiOutlineMinus />
                </button>
                <button
                  onClick={() => increment("children")}
                  className="text-lg text-gray-600 p-2 bg-gray-200 rounded-md"
                >
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
          </div>

          {/* Done Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={toggleDropdown}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const FlightSearch = () => {
  const [travelDate, setTravelDate] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleDateChange = (date) => {
    setTravelDate(date);
    setIsDatePickerOpen(false); // Close the calendar after date is selected
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Compare and book flights with ease
      </h1>
      <p className="text-gray-600 mb-6">Discover your next dream destination</p>

      <div className="grid grid-cols-5 gap-4 items-center bg-white p-4 shadow-md rounded-md border border-gray-300">
        <div className="col-span-1 flex items-center space-x-2">
          <span className="text-xl">✈️</span>
          <input
            type="text"
            placeholder="VTZ Visakhapatnam Airport"
            className="w-full border border-gray-300 rounded-md px-2 py-1 focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="col-span-1 flex items-center space-x-2">
          <span className="text-xl">↔️</span>
          <input
            type="text"
            placeholder="Where to?"
            className="w-full border border-gray-300 rounded-md px-2 py-1 focus:ring focus:ring-blue-300"
          />
        </div>
        {/* Travel Date Picker */}
        <div className="col-span-1 relative">
          <input
            type="text"
            placeholder="Select a Travel Date"
            value={travelDate ? travelDate.toLocaleDateString() : ""}
            onClick={() => setIsDatePickerOpen(true)}
            className="w-full border border-gray-300 rounded-md px-2 py-1 pl-9  focus:ring focus:ring-blue-300" // Add pr-10 for padding on right side for icon
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500">
            <FaCalendarAlt />
          </span>
          {isDatePickerOpen && (
            <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <DatePicker
                selected={travelDate}
                onChange={handleDateChange}
                inline
                className="w-full"
              />
            </div>
          )}
        </div>

        {/* Guest Selector */}

        <div className="col-span-1">
          <GuestSelector />
        </div>

        <button className="col-span-1 bg-blue-500 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-600 transition">
          Search
        </button>
      </div>
    </div>
  );
};

export default FlightSearch;
