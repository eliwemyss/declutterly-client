import React from 'react';
import './componentStyles/Landing.css';

export default class InfoSection extends React.Component {

	render() {
		return (
			<div className="information">

				<div className="col-3">
					<img
					className="infoIcon"
					alt="trash bin"
					src={require('./componentStyles/assets/bin.png')} />
					<div className="infoText">
					Keep track of all the items you wish to discard in your home.</div>
				</div>
				<div className="col-3">
					<img
					className="infoIcon"
					alt="towels"
					src={require('./componentStyles/assets/towels.png')} />
					<div className="infoText">
					Choose whether you would like to keep or throw away unwanted household items.</div>
				</div>
				<div className="col-3">
					<img
					className="infoIcon"
					alt="drying clothes"
					src={require('./componentStyles/assets/dry.png')} />
				<div className="infoText">
					Minimize distractions and start living a less stressful life free of clutter.</div>
				</div>
			</div>
		)
	}
}

