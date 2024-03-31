import React from "react";
import '../index.css'
// import { useState } from "react";
const Header = ({ onSelectId }) => {

// const [active, setActive] = useState("home")
function handleClick(event) {
  const target = event.target.id
  onSelectId(target);

}
  return (
    <div className="relative">
      <div className="fixed top-0 right-0 h-[5vh] w-screen flex items-center justify-end">
      <ul className="flex">
          <li
            onClick={handleClick}
            
          >
            <button className='text-white border-2 h-3 lg:h-11 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center' id="home">Home</button>
          </li>
          <li
            onClick={handleClick}
            
          >
            <button className='text-white border-2 h-3 lg:h-11 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center' id="pictures">Pictures</button>
          </li>
          <li
            onClick={handleClick}
            
          >
            <button className='text-white border-2 h-3 lg:h-11 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center' id="videos">Videos</button>
          </li>
          <li
            onClick={handleClick}
            
          >
            <button className='text-white border-2 h-3 lg:h-11 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center' id="rsvp">RSVP</button>
          </li>
        </ul>
      </div>
     
    </div>
  );
};
export default Header;