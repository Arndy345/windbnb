import React, {
	createContext,
	useEffect,
	useState,
} from "react";
import data from "../stays.json";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(data);
	}, []);

	const filterData = (location, guests) => {
		const filtered = data.filter(
			(product) =>
				`${product.city}, ${product.country}` ===
					location && product.maxGuests >= guests
		);
		console.log(filtered);
		if (location.length === 0) {
			setProducts(data);
		} else {
			setProducts(filtered);
		}
	};
	return (
		<ProductContext.Provider
			value={{ products, data, filterData }}
		>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
