import React from 'react';
import InfoSection from './Info';
import Login from './Login';

export default function Landing(){
		return(
			<div className="homepage">
				<Login />
				<InfoSection />
			</div>
			)
}