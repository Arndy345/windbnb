import React, { useContext } from "react";
import { ModalContext } from "./ModalContext";
import { ProductContext } from "./ProductContext";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Body = () => {
	const { products } = useContext(ProductContext);
	const { place, guests } =
		useContext(ModalContext);
	return (
		<div className="container">
			<div className="row">
				<section className="body__header">
					<h3>Stays in Finland</h3>
					<h4>{`${guests} + stays`}</h4>
				</section>
			</div>
			<div className="row">
				{products.map((item) => (
					<div className="col-sm-4 col-xs-12 image__box">
						<img
							src={item.photo}
							alt={item.type}
							className="image"
						/>
						<div>
							<div className="house__details">
								<p>
									{item.superHost ? (
										<button
											size="sm"
											variant="white "
										>
											Super Host
										</button>
									) : (
										""
									)}

									<span>{item.type}</span>
									<span>{item.beds} beds</span>
								</p>

								<span>{item.rating}</span>
							</div>

							<h4 className="house__title">
								{item.title}
							</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Body;
