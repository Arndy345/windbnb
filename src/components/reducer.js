export const reducer = (state, action) => {
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
