import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Alphabet from "./../components/Alphabet";
import Dogs from "./../components/Dogs";
import DogListItem from "./../components/DogListItem";

const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/dogs" component={Alphabet} />
					<Route exact path="/dogs/:letter" component={Dogs} />
					<Route
						exact
						path="/dogs/:letter/:bred"
						component={DogListItem}
					/>
					<Redirect to="/dogs" />
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
