import React from "react";
import useFetch from "./../hooks/useFetch";

import DogsList from "./DogsList";
import "./styles/Dogs.css";
import Loader from "./Loader";

const Dogs = ({ match }) => {
	const { loading, data } = useFetch("https://dog.ceo/api/breeds/list/all");

	let dog = [];
	for (let d in data) {
		if (d.startsWith(match.params.letter)) {
			dog.push(d);
		}
	}

	return (
		<div className="container">
			<h1 className="title">
				Raza de perros con la letra {match.params.letter}
			</h1>

			{loading && <Loader />}
			<ul className="grid">
				{dog.map((dog) => (
					<DogsList key={dog} dog={dog} match={match} />
				))}
			</ul>

			{dog.length === 0 && !loading && (
				<p className="empty animate__animated animate__backInDown">
					No se encontraron Razas con esta letra
				</p>
			)}
		</div>
	);
};

export default Dogs;
