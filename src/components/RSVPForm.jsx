import React from "react";
const RSVPForm = () => {
	return (
		<div className=" h-[40vh] items-center justify-center text-center flex flex-col">
			<form
				name="RSVP"
				data-netlify="true"
				action="https://script.google.com/macros/s/AKfycbxEn1r0lP--v2XeXzkyM_XoZ-i_hZTtOoUb4m_mxIiwfjsixIH6EOuhT_g7LGyv1sJ8/exec"
				method="post"
				className="flex flex-col max-w-[600px]"
				netlify
			>
				<input
					className="my-2 p-2 bg-[ccd6f6]"
					type="text"
					placeholder="Name"
					name="name"
					required
				/>
				<input
					className="my-2 p-2 bg-[ccd6f6]"
					type="phone"
					placeholder="Phone"
					name="phone"
					required
				/>
				<input
					className="my-2 p-2 bg-[ccd6f6]"
					type="email"
					placeholder="Email"
					name="email"
					required
				/>

				<select
					className="my-2"
					id="rsvp"
					name="rsvp"
					required
				>
					<option value="">-- Can you attend? --</option>
					<option value="yes">Yes, I will attend</option>
					<option value="no">No, I cannot attend</option>
				</select>

				<select
					className="my-2"
					id="guests"
					name="guests"
					defaultValue={""}
					required
				>
					<option
						value=""
						disabled
					>
						-- How many guests? --
					</option>
					<option value="0">none</option>
					<option value="+1">+1 Guest</option>
					<option value="+2">+2 Guests</option>
				</select>

				<button className="text-white border-2 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center">
					RSVP
				</button>
			</form>
		</div>
	);
};
export default RSVPForm;
