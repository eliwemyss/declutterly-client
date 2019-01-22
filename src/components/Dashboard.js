import React from 'react';
import InventoryForm from './InventoryForm';
import NavBar from './NavBar';
import Inventory from './Inventory';

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state={

		}
	}
	render() {
		return (
			<div>
				<NavBar />
				<InventoryForm />
				<Inventory />
			</div>
		)
	}
}
