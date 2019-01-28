import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addInventory} from '../actions/index';

import './componentStyles/InventoryForm.css';

export class InventoryForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      item: "",
      description: "",
      location: "",
      category: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(event, key) {
    this.setState({
      [key]: event.target.value
    })
  }


  handleSubmit(event) {
    event.preventDefault()
    const invObj = {
      item: this.state.item,
      description: this.state.description,
      location: this.state.location,
      category: this.state.category,

    };
    this.props.dispatch(addInventory(invObj));

  }

  clearForm(e){
    console.log('this event?',e);
    this.refs.form.reset();

  }


  render() {
    console.log('this set state', this.state);


    return (
      <div className="inventory add">
        <form
          className="container"
          onSubmit={this.handleSubmit}
          ref="form"
        >
          <h2>Add Inventory </h2>

          <div className="field">
            <label>item:</label>
            <input
              name="item"
              type="text"
              placeholder="T-Shirt"
              className="input"
              value={this.state.value}
              onChange={e => this.handleInput(e, "item")}
              maxLength="25"
            />
          </div>

          <div className="field">
            <label>Description:</label>
            <input
              name="description"
              type="text"
              placeholder="plain grey"
              className="input"
              value={this.state.value}
              onChange={e => this.handleInput(e, "description")}
              maxLength="25"
            />
          </div>

          <div className="field">
            <label>Location:</label>
            <input
              name="stage"
              type="text"
              placeholder="dresser"
              className="input"
              value={this.state.value}
              onChange={e => this.handleInput(e, "location")}
              maxLength="25"
            />
          </div>

				<select name ="category" placeholder="Select Category" type="text" name="category" value={this.state.value} onChange={e =>this.handleInput(e, "category")}>
						<option>Clothes</option>
						<option>Books</option>
						<option>Papers</option>
						<option>Miscellaneous</option>
						<option>Sentimental</option>
					</select>

          <div className="field">
            <button type="submit" className="updatebtn">
              Save
            </button>

            <button
              className="updatebtn"
              type="rest"
              onClick={this.clearForm.bind(this)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  inventory: state,
});

export default connect(mapStateToProps)(InventoryForm);