import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../assets/Icon.svg';

export const Nav = () => {
  return (
    <div className="flex items-center justify-between p-2">
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
      </div>
      <div className="flex items-center justify-center gap-5">
        <div><Link to="/">Home</Link></div>
      </div>
    </div>
  );
};