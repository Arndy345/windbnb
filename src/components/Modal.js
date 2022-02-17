import React, {
	useContext,
	useState,
} from "react";
import Input from "./Input";
import Location from "./Location";
import { ProductContext } from "./ProductContext";
import { ModalContext } from "./ModalContext";
import { BsSearch } from "react-icons/bs";
import {
	InputGroup,
	FormControl,
	Button,
	Row,
	Col,
} from "react-bootstrap";

const Modal = ({
	setModal,
	modal,
	setPlaces,
	places,
}) => {
	const { filterData } = useContext(
		ProductContext
	);
	const {
		location,
		guests,
		uniqueLocation,
		place,
		dispatchPlace,
	} = useContext(ModalContext);
	const mode = modal ? "modals" : "modals__show";

	const handleSubmit = (event) => {
		event.preventDefault();
		filterData(place.location, guests);
		setModal(false);
	};
	const [age, setAge] = useState(false);

	return (
		<div
			className={`modals  ${
				modal ? "modals__show" : ""
			}`}
		>
			<div className="modal__content">
				<Row
					className="form__wrapper d-flex
					justify-content-center"
				>
					<form action="" onSubmit={handleSubmit}>
						<div
							className="input"
							md={4}
							//  xs={{ span: 12 }}
						>
							<input
								placeholder="Location"
								type="text"
								name=""
								id=""
								value={place.location}
								onClick={() => {
									setPlaces(true);
									setAge(false);
								}}
							/>
						</div>
						<div
							className="input"
							md={4}
							// xs={{ span: 12 }}
						>
							<input
								placeholder="No of guests"
								type="text"
								name=""
								id=""
								value={guests}
								onClick={() => {
									setAge(true);
									setPlaces(false);
								}}
							/>
						</div>

						<Col
							md={4}
							className="button__wrapper"
							// xs={{ order: "last" }}
						>
							<button onClick={handleSubmit}>
								<BsSearch /> search
							</button>
						</Col>
					</form>
				</Row>
				<Row>
					<Col md={{ span: 3, offset: 1 }}>
						<section>
							{places ? (
								<Location
									uniqueLocation={uniqueLocation}
									setPlace={setPlaces}
								/>
							) : (
								""
							)}
						</section>
					</Col>
					<Col
						md={{ span: 3, offset: 1 }}
						xs={{ span: 3 }}
					>
						<section>
							{age ? <Input /> : <div></div>}
						</section>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Modal;
