import React from 'react';

import './componentStyles/Inventory.css'

export default class Inventory extends React.Component {
	render() {
		return(
		<div className="item-container">
	      <h1>Household Inventory</h1>
	        <ul>
	          <li>Item: My favorite t-shirt</li>
	          <li>Description: grey shirt </li>
	          <li>Item Type: Clothing</li>
	        </ul>
    	</div>
		)
	}
}