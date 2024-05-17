import React from "react";

const Address = (props) => {
    const handleOpenMaps = () => {
        const address = '14961 pinehaven rd. irvine, CA, 92604';
        const mapsUrl = `maps://maps.apple.com/?q=${encodeURIComponent(address)}`;
        const fallbackUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}`;
      
        // Check if the user has a maps app installed
        const hasMapsApp = window.open(mapsUrl, "_blank");
        if (!hasMapsApp) {
          // If the maps app is not installed, open the fallback URL
          window.open(fallbackUrl, "_blank");
        }
      };
	return (
		<div
			id="addressModal"
			className="fixed inset-0 z-10 overflow-y-auto"
			aria-labelledby="addressModalTitle"
			role="dialog"
			aria-modal="true"
			onClick={(event) => {
				if (event.target === event.currentTarget) {
					props.closeModal();
				}
			}}
		>
			<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<div
					className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
					aria-hidden="true"
				></div>
				<span
					className="hidden sm:inline-block sm:align-middle sm:h-screen"
					aria-hidden="true"
				>
					&#8203;
				</span>
				<div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
					<div className="modal-content">
						<div className="">
							<h2>The Shower will be at Bonne Maman's House</h2>
						</div>
						<div className="">
							<p>14961 pinehaven rd. irvine, CA, 92604</p>
						</div>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.6547046758324!2d-117.78455682383428!3d33.692004036665196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdcff18662acf%3A0x5298644027980e4c!2s14961%20Pinehaven%20Rd%2C%20Irvine%2C%20CA%2092604!5e0!3m2!1sen!2sus!4v1715911853421!5m2!1sen!2sus"
							title="map"
							className=" border-0"
							allowfullscreen="true"
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
						<div className="flex justify-center px-3">
							<button
								onClick={props.closeModal}
								className="text-purple-600 hover:text-white border-2 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center border-purple-600"
							>
								Close
							</button>
							<button
								onClick={handleOpenMaps}
								className="text-purple-600 hover:text-white border-2 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center border-purple-600"
							>
								Apple Maps
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Address;
