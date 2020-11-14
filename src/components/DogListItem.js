import React from "react";
import useFetch from "./../hooks/useFetch";
import Loader from "./Loader";
import "./styles/DogListItem.css";

const DogListItem = ({ match, history }) => {
	const { loading, data } = useFetch(
		`https://dog.ceo/api/breed/${match.params.bred}/images/random`
	);

	return loading ? (
		<Loader />
	) : (
		<>
			<figure className="dog animate__animated animate__backInDown">
				<h1 className="title">{match.params.bred}</h1>
				<img className="dog-item" src={data} alt={match.params.bred} />
			</figure>

			<button
				className="btn animate__animated animate__fadeInUp"
				onClick={() => history.goBack()}
			>
				Regresar
			</button>
		</>
	);
};

export default DogListItem;
