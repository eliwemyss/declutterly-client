import React from 'react';
import { connect } from 'react-redux';
import './componentStyles/Inventory.css';

export class Inventory extends React.Component {
		render() {
		console.log(this.props.inventory.mainReducer.inventoryDetails)
		return(
		<div className="item-container">
			<div>Item: {this.props.inventory.mainReducer.inventoryDetails.item}</div>
			<div>Description: {this.props.inventory.mainReducer.inventoryDetails.description}</div>
			<div>Location: {this.props.location}</div>
			<div>Decision: {this.props.decision}</div>
			<button type="submit" className="update button">Update</button>
			<button type="submit" className="delete button">Delete</button>
		</div>
		)
	}
}

const mapStateToProps = state => ({
	inventory: state
});

export default connect(mapStateToProps)(Inventory);