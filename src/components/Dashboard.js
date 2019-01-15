import React from 'react';
import InventoryForm from './InventoryForm';
import NavBar from './NavBar';

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
			</div>
		)
	}
}
