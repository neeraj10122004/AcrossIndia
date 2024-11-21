import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';
import Icon from '../assets/Icon.svg';

export const Navbar = ({ loc }) => {
  const home = useRef(null);
  const place = useRef(null);
  const attraction = useRef(null);
  const flights = useRef(null);
  const hotels = useRef(null);
  const about = useRef(null);

  // Highlighting the active link
  React.useEffect(() => {
    if (loc === "Home" && home.current) {
      home.current.className = 'rounded-full bg-gray-100 p-3';
    } else if (loc === "Place" && place.current) {
      place.current.className = 'rounded-full bg-gray-100 p-3';
    } else if (loc === "Attraction" && attraction.current) {
      attraction.current.className = 'rounded-full bg-gray-100 p-3';
    } else if (loc === "Flights" && flights.current) {
      flights.current.className = 'rounded-full bg-gray-100 p-3';
    } else if (loc === "Hotels" && hotels.current) {
      hotels.current.className = 'rounded-full bg-gray-100 p-3';
    } else if (loc === "About" && about.current) {
      about.current.className = 'rounded-full bg-gray-100 p-3';
    }
  }, [loc]); // Re-run when `loc` changes

  return (
    <div className="flex items-center justify-between p-10">
      <div className="flex items-center justify-center gap-10">
        <div>
          <img
            className="rounded-full"
            src={Icon}
            alt="icon"
            width="50"
            height="50"
          />
        </div>
        <div ref={home}><Link to="/">Home</Link></div>
        <div ref={place}><Link to="/place">Place</Link></div>
        <div ref={attraction}><Link to="/attraction">Attraction</Link></div>
        <div ref={flights}><Link to="/flights">Flights</Link></div>
        <div ref={hotels}><Link to="/hotels">Hotels</Link></div>
        <div ref={about}><Link to="/about">About</Link></div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <Search />
        <div className="rounded-full p-3 bg-gray-100 text-black"><Link to="/signin">SignIn</Link></div>
        <div className="rounded-full p-3 bg-gray-100 text-black"><Link to="/signup">SignUp</Link></div>
        <div className="rounded-full p-3 bg-gray-100 text-black">Acc</div>
      </div>
    </div>
  );
};
