import React from 'react';
import { connect } from 'react-redux';
import { fetchInventory } from '../actions/index';

export class InventoryFilter extends React.Component {
	handleChecked(value){
		this.props.dispatch(fetchInventory(value));
	}
	render() {
		return(
			<div className="inventory-filter-container">
				<div>Show:</div>
        <div className="checkbox">
          <label>
            <input
              onClick={e => this.handleChecked("")}
              type="radio"
              value=""
              name="filter"
            />
            All
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              onClick={e => this.handleChecked("keep")}
              type="radio"
              value="keep"
              name="filter"
            />
            Keep
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              onClick={e => this.handleChecked("discard")}
              type="radio"
              value="discard"
              name="filter"
            />
            Discard
          </label>
        </div>
        </div>
		)
	}
}
	export default connect()(InventoryFilter);