import React from 'react'
import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
const Videos = () => {

const [videoSource, changeSource] = useState("CY0mlImxFQU")
const fullSource = `https://youtu.be/${videoSource}`;
const buttonClasses = "text-white border-2 h-3 lg:h-11 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 mx-auto flex items-center";
const handleClick = (id) => () => {
  if (id === 1) {
    changeSource("CY0mlImxFQU");
  } else {
    changeSource("DgUGyytGkgM");
  }
};

  return (
    
    <div className=" overflow-hidden mt-[80px] h-[70vh] items-center justify-center text-center flex flex-col">
      <div>
         <ReactPlayer
      url={fullSource}
      width="540"
      height="560"
      controls
    />
    
    </div>
    <button onClick={handleClick(1)} className={`my-4 ${buttonClasses}`} >Play video 1</button>
    <button onClick={handleClick(2)} className={buttonClasses} >Play video 2</button>
    </div>
  )
}

export default Videos