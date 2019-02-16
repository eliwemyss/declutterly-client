import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import InfoSection from './Info';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export function Landing(props){
	if (props.loggedIn){
		return <Redirect to='/dashboard' />
	}

	return(
		<div className="homepage">
			<NavBar />
			<Hero />
			<InfoSection />
		</div>
		)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Landing);