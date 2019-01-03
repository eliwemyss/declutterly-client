import React from 'react';
import NavBar from './NavBar';
import Inventory from './Inventory';
import InventoryForm from './InventoryForm';

export default class Dashboard extends React.Component {

render() {
	return (
		<div>
			<InventoryForm />
			<Inventory />
		</div>
	)
}
}
