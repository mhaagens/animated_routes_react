import React, { Component } from "react";

export default class Home extends Component {
	render() {
		return (
			<div className="page home">
				<h1>Let's animate routes with React Router 4 and Animated.</h1>
				<p>Transitions are animated using ReactTransitionGroup and Animated.<br/>
				Get them here;</p>
				<p>
					&rarr; &nbsp; <a href="https://reacttraining.com/react-router/" target="_blank">React Router 4</a><br/>
					&rarr; &nbsp; <a href="https://github.com/reactjs/react-transition-group" target="_blank">React Transition Group</a><br/>
					&rarr; &nbsp; <a href="https://github.com/animatedjs/animated" target="_blank">Animated</a>
				</p>
			</div>
		);
	}
}
