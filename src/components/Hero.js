import React from 'react';
import Login from './Login';
import './componentStyles/Hero.css';

export default class Hero extends React.Component {
	render() {
		return (
				<div className="hero-section">
					<Login />
				</div>
		)
	}
}