import React, { Component } from "react";
import { Switch, Route, matchPath } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { firstChild } from "../utils/helpers";

import TopBar from "./top_bar";
import Home from "./home";
import Projects from "./projects";
import ProjectItem from "./project_item";
import Missed from "./missed";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: []
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(response => {
				return response.json();
			})
			.then(json => {
				this.setState({
					projects: json.slice(0, 7)
				});
			});
	}
	render() {
		return (
			<div className="wrapper">
				<TopBar />
				<Route
					render={({ location }) => (
						<Switch key={location.key} location={location}>
							<Route
								exact
								path="/"
								render={({ match, ...rest }) => (
									<TransitionGroup component={firstChild}>
										{match && <Home {...rest} />}
									</TransitionGroup>
								)}
							/>
							<Route
								exact
								path="/projects"
								render={({ match, ...rest }) => (
									<TransitionGroup component={firstChild}>
										{match &&
											<Projects
												projects={this.state.projects}
												{...rest}
											/>}
									</TransitionGroup>
								)}
							/>
							<Route
								path="/projects/:id"
								render={({ match, ...rest }) => (
									<TransitionGroup component={firstChild}>
										{match &&
											<ProjectItem
												projects={this.state.projects}
												{...match}
												{...rest}
											/>}
									</TransitionGroup>
								)}
							/>
							<Route
								render={({ match, ...rest }) => (
									<TransitionGroup component={firstChild}>
										{match && <Missed {...rest} />}
									</TransitionGroup>
								)}
							/>
						</Switch>
					)}
				/>
			</div>
		);
	}
}
