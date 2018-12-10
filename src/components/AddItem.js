import React from 'react';
import styles from '../componentStyles'

export class AddItem extends React.Component {
	constructor(props) {
		super(props)
		this.setState = {

		}
	}

	handleInput(event, key) {
		this.setState({
			key: event.target.value
		})
	}

	addItem(event) {
		
	}
}