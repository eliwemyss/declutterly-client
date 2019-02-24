import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { editInventory } from '../actions/index';
import { Link } from 'react-router-dom';
import Input from './Input';
import './componentStyles/InventoryForm.css';


export class EditInventoryForm extends React.Component {

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
      decision,
      id: this.props.initialValues.id
    };
    this.props
      .dispatch(editInventory(inventory))
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
              value="item"
            />
            <label htmlFor="description">Description:</label>
            <Field
              component={Input}
              type="text"
              name="description"
              className="description"
            />
            <label htmlFor="location">Location:</label>
            <Field
              component={Input}
              type="text"
              name="location"
              className="location"
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
            Edit Inventory
          </button>
        </form>
        </div>
    );
  }
}

export default reduxForm({
  form: "edit-inventory",
  enableReinitialize: true,
  onSubmitFail:(errors, dispatch) =>
    dispatch(focus("edit-inventory", Object.keys(errors)[0]))
})(EditInventoryForm);


