import React from 'react';
import {connect} from 'react-redux';
import Inventory from './Inventory';
import InventoryForm from './InventoryForm';

class InventoryList extends React.Component {
	constructor(props) {
		super(props);
	}
}

render() {
	let inventory = this.props.inventory.map(inventory => {
		return (
		<Inventory
			key={inventory.id}
			id={inventory.id}
			item={inventory.item}
			description={inventory.description}
			category={inventory.category}
			/>
		)
	})
	console.log(this.props)
}

const mapStateToProps = state => ({
	inventory: state
})

export default connect(mapStateToProps)(InventoryList);