import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { BasicCard } from '../components/BasicCard'
import RunningCard from '../components/RunningCard'
import TitleCard from '../components/TitleCard'

export const Home = () => {
  const items = Array.from({ length: 17 }, (_, index) => index + 1); // Example list of items
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
        <Navbar loc="Home"/>
        <div className='flex p-10 '>
          <RunningCard/>
          <TitleCard/>
        </div>
        <div className="flex justify-between items-center p-10">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Previous
        </button>
        <div className="flex gap-10">
          {visibleItems.map((item, index) => (
            <BasicCard title={index} />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>


        
    </div>
    </>
  )
}
