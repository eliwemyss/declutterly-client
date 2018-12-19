import React from 'react';

import './componentStyles/Registration.css';

export default class Registration extends React.Component{
	constructor(props) {
		super(props)
			this.state = {
				name:'',
				username: '',
				password: ''
			}
			this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleInput(event, key) {
		this.setState({
			[key]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault();
	}
	render() {
		return(
            	<form className="container">
            		<label>Name</label>
              			<input type="text" placeholder="Name"></input>
              		<label>Username</label>
              			<input type="text" placeholder="Username"></input>
              		<label>Password</label>
              			<input type="password" placeholder="password"></input>
              		<button className="registerBtn" type="submit">Submit</button>
            	</form>
			)
	}
}