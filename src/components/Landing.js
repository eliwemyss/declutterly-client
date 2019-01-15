import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import InfoSection from './Info';

export default function Landing(){
		return(
			<div className="homepage">
				<NavBar />
				<Hero />
				<InfoSection />
			</div>
			)
}