import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Registration from './Registration';

function RegistrationPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/dashboard" />
	}
	return (
		<Registration />
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);