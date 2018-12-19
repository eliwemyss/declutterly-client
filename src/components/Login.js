import React from 'react';
import './componentStyles/Login.css';

export default class Login extends React.Component{
	constructor(props) {
		super(props)
			this.state = {
				username: '',
				password: ''
			}
			this.handleSubmit = this.handleSubmit.bind(this)
	}

	hanldeInput(event, key) {
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
              		<label>Username</label>
              			<input type="text" placeholder="Username"></input>
              		<label>Password</label>
              			<input type="password" placeholder="password"></input>
              		<button className="loginbtn" type="submit">Submit</button>
            	</form>
			)
	}
}