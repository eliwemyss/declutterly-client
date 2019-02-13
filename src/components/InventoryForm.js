import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { addInventory } from '../actions/index';
import Input from './Input';
import './componentStyles/InventoryForm.css';

const required = value =>
  value || typeof value === "number" ? undefined : "Required";

export class InventoryForm extends React.Component {
  onSubmit(values) {
    const {
      item,
      description,
      location,
      decision
    } = values;
    const inventory = {
      item,
      description,
      location,
      decision
    };
    console.log(inventory);
    console.log(this);
    console.log(this.props);
    this.props
      .dispatch(addInventory(inventory))
  }
  render() {
    return (
       
      <form 
        className="container"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <label htmlFor="item">Item:</label>
        <Field
          component={Input}
          type="text"
          name="item"
          className="item"
          validate={[required]}
        />
        <label htmlFor="description">Description:</label>
        <Field
          component={Input}
          type="text"
          name="description"
          className="description"
          validate={[required]}
        />
        <label htmlFor="location">Location:</label>
        <Field
          component={Input}
          type="text"
          name="location"
          className="location"
          validate={[required]}
        />

        <div className="add-radio-buttons">
          <div className="radiobutton">
            <label>
              Keep
              <Field
                name="decision"
                component={Input}
                type="radio"
                value="keep"
              />
            </label>
          </div>
          <div className="radiobutton">
            <label>
              Discard
              <Field
                name="decision"
                component={Input}
                type="radio"
                value="discard"
              />
            </label>
          </div>
          </div>

        <button type="submit" className="add-item-form-button">
          Add new item
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "add-inventory",
  onSubmit:(errors, dispatch) =>
    dispatch(focus("add-inventory", Object.keys(errors)[0]))
})(InventoryForm);


 //       // <select name ="category" name="category" value={this} onChange={this.props}>
        //     <option>Clothes</option>
        //     <option>Books</option>
        //     <option>Papers</option>
        //     <option>Miscellaneous</option>
        //     <option>Sentimental</option>
        //   </select>