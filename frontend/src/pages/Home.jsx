import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { BasicCard } from "../components/BasicCard";
import RunningCard from "../components/RunningCard";
import TitleCard from "../components/TitleCard";
import { Footer } from "../components/Footer";

export const Home = () => {
  const items = Array.from({ length: 17 }, (_, index) => `Item ${index + 1}`); // Example list of items
  const [startIndex, setStartIndex] = useState(0);
  const visibleItemsCount = 5;

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + visibleItemsCount) % items.length);
  };

  const handlePrevious = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - visibleItemsCount + items.length) % items.length
    );
  };

  const visibleItems = [
    ...items.slice(startIndex, startIndex + visibleItemsCount),
    ...(startIndex + visibleItemsCount > items.length
      ? items.slice(0, (startIndex + visibleItemsCount) % items.length)
      : []),
  ];

  return (
    <>
      <div>
        <Navbar loc="Home" />
        <div className="flex p-10">
          <RunningCard />
          <TitleCard />
        </div>
        <div className="flex justify-between items-center p-10 gap-5">
          <button
            onClick={handlePrevious}
            className=" rounded-full px-4 py-2 bg-gray-100 text-black hover:bg-gray-300"
          >
            &lt;
          </button>
          <div className="flex gap-10">
            {visibleItems.map((item, index) => (
              <BasicCard key={index} title={item} />
            ))}
          </div>
          <button
            onClick={handleNext}
            className=" rounded-full px-4 py-2 bg-gray-100 text-black hover:bg-gray-300"
          >
            &gt;
          </button>
        </div>
        <Footer/>
      </div>
    </>
  );
};

