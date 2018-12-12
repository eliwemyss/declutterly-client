import React from 'react';

import './componentStyles/InventoryForm.css';

export default class InventoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      itemDescription: '',
      category: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('thank you for your submission ' + this.state.value);
      event.preventDefault();
    }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>Item</label>
          <input type="text" name="item" onChange={this.handleChange} placeholder="Enter item..." />
          <label>Description</label>
          <input type="text" name="itemDescription" onChange={this.handleChange} placeholder="Please enter brief description of item..."></input>
          <select onChange={this.handleChange}>Choose Item Type
            <option value="clothing">Clothing</option>
            <option value="furniture">Furniture</option>
            <option value="sentimental">Sentimental</option>
            <option value="junk">Junk</option>
            <option value="misc">Misc.</option>
          </select>
          <button className="itembtn" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}