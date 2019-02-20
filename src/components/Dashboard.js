import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './loggedIn';
import ItemCard from './ItemCard';
import { fetchInventory } from '../actions/index';
import NavBar from './NavBar';
import './componentStyles/Dashboard.css';



export class Dashboard extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchInventory(''));
	}
	render() {
		let items = this.props.inventory.map(inventory => (
			<ItemCard {...inventory} key={inventory.id} />
			));
		return(
			<div>
			<NavBar />
			<div className="button-container">
			<Link to="/addInventory">
				<button className="add-inventory-button">+ Add inventory</button>
			</Link>
			</div>
			<div className="item-list">{items}</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	inventory: state.protectedData.inventory
});

export default requiresLogin()(connect(mapStateToProps)(Dashboard))