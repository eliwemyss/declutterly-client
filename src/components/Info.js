import React from 'react';
import './componentStyles/Info.css';

export default class InfoSection extends React.Component {

	render() {
		return (
			<div className="information table">
				<div className="col-3">
					<div className="infoText">Keep track of all the items you wish to discard in your home.</div>
				</div>
				<div className="col-3">
					<div className="infoText">Choose whether you would like to keep, donate, or throw away unwanted household items.</div>
				</div>
				<div className="col-3">
					<div className="infoText">Minimize distractions and start living a more meaningful life free of clutter.</div>
				</div>
			</div>
		)
	}
}