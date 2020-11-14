import React from "react";
import { Link } from "react-router-dom";
import "./styles/Dogs.css";

const Alphabet = () => {
	const alphabet = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"ñ",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];

	return (
		<div className="container">
			<h1 className="title">Elige la raza del perro con una letra</h1>
			<ul className="grid">
				{alphabet.map((item) => (
					<figure
						key={item}
						className="animate__animated animate__fadeIn"
					>
						<img
							src={process.env.PUBLIC_URL + "/images/dog.jpg"}
							alt="dog"
						/>
						<li className="grid-item">
							<Link to={`/dogs/${item}`}>{item}</Link>
						</li>
					</figure>
				))}
			</ul>
		</div>
	);
};

export default Alphabet;
