import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Delete from "./pages/Delete";
import Home from "./pages/Home";
import List from "./pages/List";

function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/list">
					<List />
				</Route>
				<Route path="/delete">
					<Delete />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Router;
