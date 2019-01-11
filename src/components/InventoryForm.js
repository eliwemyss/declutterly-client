import React, { Component } from 'react';
import './componentStyles/InventoryForm.css';

export default class InventoryForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item: '',
			description: '',
			category: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			item: event.target.value,
			description: event.target.value,
			category: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.history.push('/dashboard')
	}


	render() {
		return(
			<form onSubmit={this.handleSubmit} className="container">
				<label>
					Item:
					<input type="text" name="item" value={this.state.item} onChange={this.handleChange} />
				</label>
				<label>
					Description:
					<input type="text" name="item" value={this.state.description} onChange={this.handleChange} />

				</label>
				<label>
					Category:
					<input type="text" name="item" value={this.state.category} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
				<input type="reset" value="Cancel" />
			</form>
			)
	}
}