import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Hero from './Hero';
import InfoSection from './Info';


export function Landing(props){
	if (props.loggedIn){
		return <Redirect to='/dashboard' />
	}

	return(
		<div className="homepage">
			<Hero />
			<InfoSection />
		</div>
		)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Landing);