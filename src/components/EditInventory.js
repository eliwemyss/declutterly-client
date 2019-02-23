import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import EditInventoryForm from './EditInventoryForm';
import requiresLogin from './loggedIn';
import { fetchSingleInventoryById } from '../actions/index';

export class EditInventory extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchSingleInventoryById(this.props.match.params.id));
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
	inventoryDetails: state.protectedData.inventoryDetails
});

export default requiresLogin()(connect(mapStateToProps)(EditInventory));
