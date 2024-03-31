import React from "react";
import { MdOutlineCopyright } from "react-icons/md";
const Footer = () => {
	const time = new Date().getFullYear();
	return (
		<div className="flex text-gray-700 w-screen justify-center bottom-0 fixed">
			<a
				href="mailto:owner@trufflie.com"
				target="_blank"
				rel="noreferrer"
                
                
			>
				Contact Owner</a>
                

			<p className="flex">
				<MdOutlineCopyright /> {time} Trufflie All Rights Reserved.
			</p>
		</div>
	);
};

export default Footer;
