import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { BasicCard } from "../components/BasicCard";
import RunningCard from "../components/RunningCard";
import TitleCard from "../components/TitleCard";
import { Footer } from "../components/Footer";
import img1 from "../assets/01.jpg"
import img2 from "../assets/02.jpg"
import img3 from "../assets/03.jpg"
import img4 from "../assets/04.jpg"
import img5 from "../assets/05.jpg"
import img6 from "../assets/06.jpg"
import img7 from "../assets/07.jpg"
import img8 from "../assets/08.jpg"
import img9 from "../assets/09.jpg"
import img10 from "../assets/10.jpg"

export const Home = () => {
  // Define items with title, description, and image for adventure places in India
  const items = [
    {
      title: "Leh-Ladakh",
      description: "A paradise for adventure seekers with trekking, biking, and high-altitude exploration.",
      image: img1 // Replace with a real image of Leh-Ladakh
    },
    {
      title: "Rishikesh",
      description: "Famous for white-water rafting and spiritual adventures along the Ganges.",
      image: img2 // Replace with a real image of Rishikesh
    },
    {
      title: "Manali",
      description: "A popular hill station for skiing, paragliding, and trekking.",
      image: img3, // Replace with a real image of Manali
    },
    {
      title: "Goa",
      description: "Known for its beautiful beaches, water sports, and vibrant nightlife.",
      image: img4, // Replace with a real image of Goa
    },
    {
      title: "Spiti Valley",
      description: "A remote and rugged valley known for its monasteries and treks.",
      image: img5, // Replace with a real image of Spiti Valley
    },
    {
      title: "Jog WaterFalls",
      description: "Jog Falls is a waterfall on the Sharavati river and It is the second highest plunge waterfall in India",
      image: img6, // Replace with a real image of Uttarakhand trekking
    },
    {
      title: "Andaman Islands",
      description: "A beautiful tropical archipelago known for scuba diving, snorkeling, and pristine beaches.",
      image: img7, // Replace with a real image of Andaman
    },
    {
      title: "Mysore",
      description: "A perfect place for adventure seekers, from paragliding to trekking in the hills around.",
      image: img8, // Replace with a real image of Mysore
    },
    {
      title: "Kedarkantha",
      description: "A beautiful trekking destination in Uttarakhand with scenic views and a rewarding summit.",
      image: img9, // Replace with a real image of Kedarkantha
    },
    {
      title: "Coorg",
      description: "A beautiful hill station with coffee plantations, trekking spots, and adventure activities.",
      image: img10, // Replace with a real image of Coorg
    },
  ];

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

  // Get visible items based on startIndex
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
            className="rounded-full px-4 py-2 bg-gray-100 text-black hover:bg-gray-300"
          >
            &lt;
          </button>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-semibold mb-6">Adventure Places in India</h2>
            <div className="flex gap-10 overflow-x-auto">
              {visibleItems.map((item, index) => (
                <BasicCard key={index} title={item.title} description={item.description} image={item.image} />
              ))}
            </div>
          </div>
          <button
            onClick={handleNext}
            className="rounded-full px-4 py-2 bg-gray-100 text-black hover:bg-gray-300"
          >
            &gt;
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};


