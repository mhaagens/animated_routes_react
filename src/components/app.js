import React, { Component } from "react";
import { Route, matchPath } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from "./animated_switch";
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
						<TransitionGroup component="main">
							<AnimatedSwitch
								key={location.key}
								location={location}
							>
								<Route exact path="/" component={Home} />
								<Route
									exact
									path="/projects"
									render={props => (
										<Projects {...props} projects={this.state.projects} />
									)}
								/>
								<Route
									path="/projects/:id"
									render={props => (
										<ProjectItem {...props} projects={this.state.projects} />
									)}
								/>
								<Route component={Missed} />
							</AnimatedSwitch>
						</TransitionGroup>
					)}
				/>
			</div>
		);
	}
}
