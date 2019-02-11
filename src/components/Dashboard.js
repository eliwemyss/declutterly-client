import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Inventory from './Inventory';

export default class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<Link className="button-container" to="/addInventory">
					<button className="add-inventory-button">Add inventory</button>
				</Link>
				<Inventory />
			</div>
		)
	}
}
