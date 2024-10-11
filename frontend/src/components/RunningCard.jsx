import React, { useState, useEffect } from 'react';

const RunningCard = () => {
  const data = [
    {
      title: "Beautiful Sunset",
      description: "A stunning view of the sunset over the mountains.",
      image: "https://via.placeholder.com/400x200/FF5733"
    },
    {
      title: "Forest Path",
      description: "A peaceful path through a dense forest.",
      image: "https://via.placeholder.com/400x200/33FF57"
    },
    {
      title: "Ocean Waves",
      description: "Gentle waves crashing onto a sandy beach.",
      image: "https://via.placeholder.com/400x200/3375FF"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000); // Change content every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [data.length]);

  const { title, description, image } = data[currentIndex];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm transition-transform transform hover:-translate-y-2">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RunningCard;
