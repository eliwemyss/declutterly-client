import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import EditInventoryForm from './EditInventoryForm';
import requiresLogin from './loggedIn';
import { fetchSingleInventoryById } from '../actions/index';
// import './componentStyles/Inventory.css';

export class EditInventory extends React.Component {
	componentDidMount() {
		this.props.dispatach(fetchSingleInventoryById(this.props.match.params.id));
	}

	render() {
		return(
		<div>
			<NavBar />
			<EditInventoryForm 
				inventoryDetails={this.props.inventoryDetails}
				onSubmit={values => this.onSubmit(values)}
				history={this.props.history}
				/>
		</div>
		);
	}
}

const mapStateToProps = state => ({
	inventoryDetails: state.proptectedData.inventoryDetails
});

export default requiresLogin()(connect(mapStateToProps)(EditInventory));
