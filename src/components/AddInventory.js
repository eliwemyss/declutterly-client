import React from 'react';
import requiresLogin from './loggedIn';
import NavBar from './NavBar';
import InventoryForm from './InventoryForm';

export function AddInventory(props) {
	return(
		<div className="add-inventory">
			<NavBar />
			<InventoryForm history={props.history} />
		</div>
	)
}

export default requiresLogin()(AddInventory);