import React, { useContext } from "react";
import header from "../images/header.png";
import { ModalContext } from "./ModalContext";
import {
	Button,
	ButtonGroup,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

function Header({ setPlace }) {
	const { place, guests } =
		useContext(ModalContext);
	return (
		<div className="header d-flex  justify-content-center">
			<section className="col-sm-12 col-md-6">
				<img src={header} alt="header" />
				<span>windbnb</span>
			</section>
			<section className="col-md-6 d-flex   justify-content-end">
				<ButtonGroup className="btn-header">
					<Button
						variant="green"
						onClick={setPlace}
					>
						{place.location ||
							"Helsinki, Finland"}
					</Button>
					<Button
						variant="green"
						onClick={setPlace}
					>
						{guests
							? `${guests} guests`
							: "guests"}
					</Button>
					<Button
						variant="green"
						onClick={setPlace}
					>
						<BsSearch />
					</Button>
				</ButtonGroup>
			</section>
		</div>
	);
}

export default Header;
