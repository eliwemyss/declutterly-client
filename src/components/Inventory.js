import React from 'react';
import { connect } from 'react-redux';
import './componentStyles/Inventory.css';
import { fetchInventory } from '../actions/index';


export class Inventory extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchInventory(''));
	}
		render() {
		console.log(this.props.inventory.mainReducer.inventoryDetails)
		return(
		<div className="item-container">
			<div>Item: {this.props.item}</div>
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