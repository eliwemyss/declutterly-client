import React from 'react';
import { connect } from 'react-redux';
import './componentStyles/Inventory.css';

export class Inventory extends React.Component {
	constructor(props) {
		super(props);
		this.state ={

		}
	}
		render() {
		return(
		<div className="item container">
			<div>Item: {this.props.item}</div>
			<div>Description: {this.props.description}</div>
			<div>Location: {this.props.location}</div>
			<div>Category: {this.props.category}</div>
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