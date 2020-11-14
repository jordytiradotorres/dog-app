import React from "react";
import { Link } from "react-router-dom";
import "./styles/Dogs.css";

const DogsList = ({ dog, match }) => {
	return (
		<>
			<figure className="animate__animated animate__fadeIn">
				<img
					src={process.env.PUBLIC_URL + "/images/dog.jpg"}
					alt="dog"
				/>
				<li className="grid-item">
					<Link to={`/dogs/${match.params.letter}/${dog}`}>
						{dog}
					</Link>
				</li>
			</figure>
		</>
	);
};

export default DogsList;
