import React, {useState} from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import '../index.css'

const Header = ({ onSelectId }) => {


function handleClick(event) {
  const target = event.target.id
  onSelectId(target);

}
  const [nav, setNav] = useState(false);
	const mobileClick = (event) => {const target = event.target.id
  onSelectId(target);
  setNav(!nav);
}
  
  return (
    <div className="relative">
      <div className="md:m-5 fixed top-0 right-0 h-[5vh] w-screen flex items-center justify-end">
      <div
				onClick={mobileClick}
				className="md:hidden z-10 m-5"
			>
				{!nav ? <FaBars /> : <FaTimes />}
			</div>
      <ul className="hidden md:flex">
          
          <li
          className="px-1"
            onClick={handleClick}
            
          >
            <button className='text-white border-2 h-3 lg:h-11 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center' id="home">Home</button>
          </li>
          <li
          className="px-1"
            onClick={handleClick}
            
          >
            <a href="https://www.babylist.com/list/alyssa-decorte-baby-registry" target="_blank" rel="noreferrer">
              <button className='text-white border-2 h-3 lg:h-11 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center' id="registry">Registry</button>
          </a>
          </li>
          <li
          className="px-1"
            onClick={handleClick}
            
          >
            <button className='text-white border-2 h-3 lg:h-11 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center' id="pictures">Pictures</button>
          </li>
          <li
          className="px-1"
            onClick={handleClick}
            
          >
            <button className='text-white border-2 h-3 lg:h-11 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center' id="videos">Videos</button>
          </li>
          <li
          className="px-1"
            onClick={handleClick}
            
          >
            <button className='text-white border-2 h-3 lg:h-11 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center' id="rsvp">RSVP</button>
          </li>
        </ul>
        <ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
				}
			>
				<li id="home" onClick={mobileClick}  className="py-6 text-4xl">
						Home
					</li>
          <a href="https://www.babylist.com/list/alyssa-decorte-baby-registry" target="_blank" rel="noreferrer">
              
          
				<li id="registry" onClick={mobileClick} className="py-6 text-4xl">
						Registry
					</li></a>
				<li id="pictures" onClick={mobileClick} className="py-6 text-4xl">
						Pictures
					</li>
				<li id="videos" onClick={mobileClick} className="py-6 text-4xl">
						Videos
					</li>
				<li id="rsvp" onClick={mobileClick} className="py-6 text-4xl">
						RSVP
					</li>
			</ul>
      </div>
     
    </div>
  );
};
export default Header;