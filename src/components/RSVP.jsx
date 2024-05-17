import React, {useState} from "react";
import Bubbles from "./Bubbles";
import RSVPForm from "./RSVPForm";
import Address from "./Address";

const RSVP = () => {
  const [showModal, setShowModal] = useState(false);

  function closeModal(){
    setShowModal(false);
  }
  function openModal(event){
    
    setShowModal(true)
    
  }
	return (
		<div  className="overflow-hidden mt-[80px] h-[90vh] items-center justify-center text-center relative">
			<div>
				<h1 className=" text-purple-900 text-4xl md:text-7xl">
					Baby Shower Details:{" "}
				</h1>
        
        {showModal? 
        <Address
        closeModal={closeModal}
        /> : null }
        


				<p className=" md:text-2xl text-blue-800 m-3">
					The baby shower will take place on Sunday, the 2nd of June, 2024.{" "}
				</p>
				<p className=" md:text-2xl text-blue-800 m-3">
					Please RSVP by filling out the form below.
				</p>
        <div className="flex ">
        <button onClick={openModal} className="text-white border-2 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center">Click for Address</button>
        </div>

				<RSVPForm />

				<div className=" inset-0">
					<Bubbles />
				</div>
			</div>
		</div>
	);
};

export default RSVP;
