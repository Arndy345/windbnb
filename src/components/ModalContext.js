import React, {
	createContext,
	useContext,
	useState,
	useReducer,
} from "react";
import { ProductContext } from "./ProductContext";

export const ModalContext = createContext();
const reducer = (state, action) => {
	switch (action.type) {
		case "INCREASE_CHILD":
			return {
				...state,
				childCount: state.childCount + 1,
			};
		case "DECREASE_CHILD":
			return {
				...state,
				childCount:
					state.childCount > 0
						? state.childCount - 1
						: 0,
			};
		case "INCREASE_ADULT":
			return {
				...state,
				adultCount: state.adultCount + 1,
			};
		case "DECREASE_ADULT":
			return {
				...state,
				adultCount:
					state.adultCount > 0
						? state.adultCount - 1
						: 0,
			};
		default:
			return { ...state };
	}
};

export const placeReducer = (state, action) => {
	switch (action.type) {
		case "LOCATION":
			return {
				...state,
				location: action.payload,
			};

		default:
			return { ...state };
	}
};

const ModalContextProvider = (props) => {
	const { data } = useContext(ProductContext);
	const [count, dispatch] = useReducer(reducer, {
		childCount: 0,
		adultCount: 0,
	});

	const [place, dispatchPlace] = useReducer(
		placeReducer,
		{ location: "" }
	);

	const setUniqueLocation = data.map(
		(location) =>
			`${location.city}, ${location.country}`
	);

	//sunderstand this piece of code later

	const uniqueLocation = [
		...new Set(setUniqueLocation),
	];
	const [location, setLocation] = useState(
		uniqueLocation[0]
	);
	const guests =
		count.adultCount + count.childCount;

	return (
		<ModalContext.Provider
			value={{
				count,
				dispatch,
				place,
				dispatchPlace,
				location,
				guests,
				uniqueLocation,
			}}
		>
			{props.children}
		</ModalContext.Provider>
	);
};
export default ModalContextProvider;
