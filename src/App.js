import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { useState } from "react";
import Modal from "./components/Modal";
import data from "./stays.json";
import Location from "./components/Location";
import ProductContextProvider from "./components/ProductContext";
import ModalContextProvider from "./components/ModalContext";

function App() {
	const [modal, setModal] = useState(false);
	const setPlace = () => {
		setModal(true);
		setPlaces(true);
	};
	const [places, setPlaces] = useState(false);

	return (
		<div className="App container">
			<ProductContextProvider>
				<ModalContextProvider>
					<Header setPlace={setPlace} />
					{modal ? (
						<Modal
							setModal={setModal}
							modal={modal}
							setPlaces={setPlaces}
							places={places}
						/>
					) : (
						""
					)}
					<Body data={data} />
				</ModalContextProvider>
			</ProductContextProvider>
		</div>
	);
}

export default App;
