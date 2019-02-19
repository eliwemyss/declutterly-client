import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './loggedIn';
import { fetchInventory } from '../actions/index';
import NavBar from './NavBar';
import Inventory from './Inventory';
import './componentStyles/Dashboard.css';



export class Dashboard extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchInventory(''));
	}
	render() {
		console.log(this.props)
		let data = this.props.inventory.protectedData.inventory.map(data =>(
			<Inventory {...data} key={data.id} />
			))
		return (
			<div>
				<NavBar />
			<div>
				<Link className="button-container" to="/addInventory">
					<button className="add-inventory-button">+ Add inventory</button>
				</Link>
			</div>
			<div className="inventory-list">
			{data}

			</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  inventory: state
});

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
