import React, { useContext } from "react";
import data from "../stays.json";
import { ModalContext } from "./ModalContext";

const Location = ({ setPlace }) => {
	const { dispatchPlace, uniqueLocation } =
		useContext(ModalContext);
	const setLocation = (item) => {
		dispatchPlace({
			type: "LOCATION",
			payload: item,
		});
		setPlace(false);
	};
	return (
		<div className="location">
			{uniqueLocation.map((item) => (
				<span
					onClick={() => setLocation(item)}
					className="location__text"
				>
					{item}
					<br />
				</span>
			))}
		</div>
	);
};

export default Location;
