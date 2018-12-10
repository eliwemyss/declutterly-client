import React from 'react';
import NavBar from './NavBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('thank you for your submision' + this.state.value);
      event.preventDefault();
    }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>Item</label>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter item..." />
          <label>Description</label>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Please enter brief description of item..."></input>
          <select defaultValue="Choose Item Type" onChange={this.handleChange}>
            <option value="clothing">Clothing</option>
            <option value="furniture">Furniture</option>
            <option value="sentimental">Sentimental</option>
            <option value="junk">Junk</option>
            <option value="misc">Misc.</option>
          </select>
          <button className="itembtn" type="submit" id="itembtn">Submit</button>
        </form>
      </div>
    );
  }
}
