import React from 'react';

const TitleCard = () => {
  return (
    <div className="flex justify-center items-center p-10 h-[70vh] bg-gray-100">
      <div className="bg-transparent rounded-lg w-[60vw] text-center">
        <h1 className="text-5xl font-bold text-gray-800">AcrossIndia</h1>
        <p className="text-gray-600 mt-4">
          by <span className="font-semibold">Santosh</span> and <span className="font-semibold">Neeraj</span>
        </p>
      </div>
    </div>
  );
};

export default TitleCard;
