import React from "react";
import { MdOutlineCopyright } from "react-icons/md";
const Footer = ({ onSelectId }) => {
	

	function handleClick(event) {
		onSelectId(event.target.id);
		
	}
	const time = new Date().getFullYear();
	return (
		<div className="h-[5vh] flex text-gray-700 w-screen justify-center bottom-0 fixed">
			<a
				href="mailto:owner@trufflie.com"
				target="_blank"
				rel="noreferrer"
			>
				Contact Owner
			</a>

			<p className="flex px-4">
				<MdOutlineCopyright /> {time} Trufflie All Rights Reserved.
				<button
					onClick={handleClick}
					className="px-4 h-2"
					id="about"
				>
					about this site
				</button>
			</p>
			
		</div>
	);
};

export default Footer;
