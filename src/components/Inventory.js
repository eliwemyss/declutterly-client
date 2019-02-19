import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteInventory } from '../actions/index';
import './componentStyles/Inventory.css';


export class Inventory extends React.Component {
		render() {
		return(
		<div className="item-card">
			<div>Item: {this.props.item} </div>
			<div>Description: {this.props.description}</div>
			<div>Location: {this.props.location}</div>
			<div>Category: {this.props.category}</div>
			<div>Decision: {this.props.decision} </div>
			<Link to={`/edit/${this.props.id}`}>
				<button type="submit" className="update button">Update</button>
			</Link>
			<button
				onClick={() => {this.props.dispatch(deleteInventory(this.props.id))}}
			 type="submit" className="delete button">Delete</button>
		</div>
		)
	}
}

const mapStateToProps = state => {
	return {};
}

export default connect(mapStateToProps)(Inventory);