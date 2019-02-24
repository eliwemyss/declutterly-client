import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';
import { addInventory } from '../actions/index';
import Input from './Input';
import './componentStyles/InventoryForm.css';

const required = value =>
  value || typeof value === "number" ? undefined : "Required";

export class InventoryForm extends React.Component {

  onSubmit(values) {
    this.props.dispatch(addInventory(values))
    this.props.history.push("/dashboard");
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
                  <option value="Clothes">Clothes</option>
                  <option value="Books">Books</option>
                  <option value="Papers">Papers</option>
                  <option value="Miscellaneous">Miscellaneous</option>
                  <option value="Sentimental">Sentimental</option>
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
                    value="Keep"
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
                    value="Discard"
                  />
                </label>
              </div>
              </div>
          <Link to="/dashboard">
            <button type="submit" className="back-button">Back</button>
          </Link>
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


