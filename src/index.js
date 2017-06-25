import "./styles/app.scss";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";

const renderApp = Component =>
	render(
		<Router>
			<Component />
		</Router>,
		document.getElementById("root")
	);

renderApp(App);

if (module.hot) module.hot.accept("./components/app", () => renderApp(App));
