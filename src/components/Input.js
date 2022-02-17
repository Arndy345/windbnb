import { useContext } from "react";
import { ModalContext } from "./ModalContext";
import { Button } from "react-bootstrap";

const Input = () => {
	const { count, dispatch } =
		useContext(ModalContext);
	const childCountIncrease = () => {
		dispatch({ type: "INCREASE_CHILD" });
	};
	const childCountDecrease = () => {
		dispatch({ type: "DECREASE_CHILD" });
	};
	const adultCountIncrease = () => {
		dispatch({ type: "INCREASE_ADULT" });
	};
	const adultCountDecrease = () => {
		dispatch({ type: "DECREASE_ADULT" });
	};
	return (
		<div className="guests">
			<section>
				<h3>Adult</h3>
				<p>Ages 13 or above</p>
				<Button
					variant="light"
					size="sm"
					onClick={() => {
						adultCountDecrease();
					}}
				>
					-
				</Button>
				<span>{count.adultCount}</span>
				<Button
					variant="light"
					size="sm"
					onClick={() => {
						adultCountIncrease();
					}}
				>
					+
				</Button>
			</section>
			<section>
				<h3>Children</h3>
				<p>Age 2 to 13</p>
				<Button
					variant="light"
					size="sm"
					onClick={() => {
						childCountDecrease();
					}}
				>
					-
				</Button>
				<span>{count.childCount}</span>
				<Button
					variant="light"
					size="sm"
					onClick={() => {
						childCountIncrease();
					}}
				>
					+
				</Button>
			</section>
		</div>
	);
};

export default Input;
