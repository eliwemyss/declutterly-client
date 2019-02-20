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
      category,
      decision
    } = values;
    const inventory = {
      item,
      description,
      location,
      category,
      decision
    };
    console.log(inventory);
    console.log(this);
    // let self = this;

    this.props
      .dispatch(addInventory(inventory))
      .then(() => this.props.history.push('/dashboard'))
  }
  render() {
    return (
      
      <div className="add-inventory-form">
          <form 
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
            <div className="category-select">
              <Field 
                component="select"
                name ="category"
                >
                  <option>Choose Category</option>
                  <option value="clothes">Clothes</option>
                  <option value="books">Books</option>
                  <option value="papers">Papers</option>
                  <option value="miscellaneous">Miscellaneous</option>
                  <option value="sentimental">Sentimental</option>
              </Field>
            </div>
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
        </div>
    );
  }
}

export default reduxForm({
  form: "add-inventory",
  onSubmitFail:(errors, dispatch) =>
    dispatch(focus("add-inventory", Object.keys(errors)[0]))
})(InventoryForm);


