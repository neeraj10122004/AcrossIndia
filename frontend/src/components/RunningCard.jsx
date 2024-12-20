import React, { useState, useEffect } from 'react';
import sunImage from '../assets/sun.jpg'; 
import forImage from '../assets/For.jpg';
import oceImage from '../assets/oce.jpg';

const RunningCard = () => {
  const data = [
    {
      title: "Beautiful Sunset",
      description: "A stunning view of the sunset over the mountains.",
      image: sunImage
    },
    {
      title: "Forest Path",
      description: "A peaceful path through a dense forest.",
      image: forImage
    },
    {
      title: "Ocean Waves",
      description: "Gentle waves crashing onto a sandy beach.",
      image: oceImage
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000); // Change content every 3 sec
  }, []);

  const { title, description, image } = data[currentIndex];

  return (
    <div className="flex justify-center p-10 items-center h-[70vh]  bg-gray-100">
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm transition-transform transform hover:-translate-y-2">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4 h-48">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RunningCard;
