import React from 'react';
import requiresLogin from './loggedIn';
import NavBar from './NavBar';
import InventoryForm from './InventoryForm';

export function AddInventory(props) {
	console.log(props.history)
	return(
		<div>
			<NavBar />
			<InventoryForm history={props.history} />
		</div>
	)
}

export default requiresLogin()(AddInventory);