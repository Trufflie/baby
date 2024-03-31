import React from "react";
import Main from "./Main";
import RSVP from "./RSVP";
import Pictures from "./Pictures";
import Videos from "./Videos";

const Navigate = (props) => {
	const id = props.id;

	switch (id) {
		case "rsvp":
			return (
				<div>
					<RSVP />
				</div>
			);
		case "pictures":
			return (
				<div>
					<Pictures />
				</div>
			);
		case "main":
			return (
				<div>
					<Main />
				</div>
			);
		case "videos":
			return (
				<div>
					<Videos />
				</div>
			);

		default:
			return (
				<div>
					<Main />
				</div>
			);
	}
};

export default Navigate;
