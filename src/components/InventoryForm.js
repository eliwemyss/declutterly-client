import React, { Component } from 'react';
import { connect } from 'react-redux';

import './componentStyles/InventoryForm.css';

export class InventoryForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item: '',
			description: '',
			location: '',
			category: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value

		})
		
	}

	handleSubmit(event) {
		event.preventDefault();
		const inventoryObj = {
			item: this.state.item,
			description: this.state.description,
			location: this.state.location,
			category: this.state.category
		};
		this.props.dispatch(inventoryObj);
	}


	render() {
		return(
			<form onSubmit={this.handleSubmit} className="container">
				<label>
					Item:
					<input type="text" name="item" value={this.state.value} onChange={this.handleChange} />
				</label>
				<label>
					Description:
					<input type="text" name="description" value={this.state.value} onChange={this.handleChange} />

				</label>
				<label>
					Location:
					<input type="text" name="location" value={this.state.value} onChange={this.handleChange} />

				</label>
					Category:
					<select type="text" name="category" value={this.state.value} onChange={this.handleChange}>
						<option>Clothes</option>
						<option>Books</option>
						<option>Papers</option>
						<option>Miscellaneous</option>
						<option>Sentimental</option>
					</select>
				<input type="submit" value="Submit" className="button" />
				<input type="reset" value="Cancel" className="button" />
			</form>
			)
	}
}


export default connect()(InventoryForm);
