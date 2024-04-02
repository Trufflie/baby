import React from 'react';
import Bubbles from './Bubbles';
import RSVPForm from "./RSVPForm"


const RSVP = () => {
  return (
    <div className="overflow-hidden mt-[80px] h-[90vh] items-center justify-center text-center relative">
      

      <div>
        <h1  className=" text-purple-900 text-4xl md:text-7xl">
          Baby Shower Details:{' '}
        </h1>
        <p className=' text-2xl text-blue-800 m-5'>
          We will be hosting a baby shower for our twins. The event will take
          place on Saturday, 18th of May, 2024. Please RSVP by
          filling out the form below.
        </p>

        <RSVPForm />

        <div className=" inset-0">
          <Bubbles />
        </div>
      </div>
    </div>
  );
};

export default RSVP;