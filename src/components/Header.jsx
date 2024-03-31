import React from "react";
import { useState } from "react";
import '../index.css'
const Header = ({ onSelectId }) => {

const [selectedId, setSelectedId] = useState(null);

function handleClick(event) {
		setSelectedId(event.target.id);
		console.log(selectedId);
	}
  return (
    <div className="relative">
      <div className="fixed top-0 right-0 h-[80px] w-screen flex items-center justify-end">
      <ul className="flex">
          <li
            onClick={handleClick}
            className={`p-2 ${selectedId === 'home' ? 'active' : ''}`}
          >
            <button id="home">Home</button>
          </li>
          <li
            onClick={handleClick}
            className={`p-2 ${selectedId === 'pictures' ? 'active' : ''}`}
          >
            <button id="pictures">Pictures</button>
          </li>
          <li
            onClick={handleClick}
            className={`p-2 ${selectedId === 'videos' ? 'active' : ''}`}
          >
            <button id="videos">Videos</button>
          </li>
          <li
            onClick={handleClick}
            className={`p-2 ${selectedId === 'rsvp' ? 'active' : ''}`}
          >
            <button id="rsvp">RSVP</button>
          </li>
        </ul>
      </div>
      {onSelectId && onSelectId(selectedId)}
    </div>
  );
};
export default Header;