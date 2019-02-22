import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { editInventory } from '../actions/index';
import Input from './Input';
import './componentStyles/InventoryForm.css';


export class EditInventoryForm extends React.Component {
    compnentDidMount() {
    this.handleInitialize();
  }

  handleInitialize() {
    console.log('edit details', this.props.inventoryDetails)
    const initData = {
      item: this.props.inventoryDetails.item,
      description: this.props.inventoryDetails.description,
      location: this.props.inventoryDetails.location,
      category: this.props.inventoryDetails.category,
      decision: this.props.inventoryDetails.decision
    };
    this.props.initialize(initData);
  }
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
      id: this.props.inventoryDetails.id
    };
    this.props
      .dispatch(editInventory(inventory))
      .then(() => this.props.history.push('/dashboard'))
  }
  render() {
    console.log(this.props.inventoryDetails)
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
  enableReinitialize: false,
  onSubmitFail:(errors, dispatch) =>
    dispatch(focus("edit-inventory", Object.keys(errors)[0]))
})(EditInventoryForm);


