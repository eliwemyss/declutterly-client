import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';
import { editInventory } from '../actions/index';
import Input from './Input';
import './componentStyles/InventoryForm.css';


export class EditInventoryForm extends React.Component {

  componentDidMount() {
    this.handlInitialize();
  }

  handlInitialize() {
    const initData = {
      item: this.props.inventoryDetails.item,
      description: this.props.inventoryDetails.description,
      location: this.props.inventoryDetails.location,
      category: this.props.inventoryDetails.category,
      decision: this.props.inventoryDetails.decision
    };
    this.prop.initialize(initData);
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
      decision
    };
    this.props
      .dispatch(editInventory(inventory))
      .then(() => this.props.history.push('/dashboard'))
  }
  render() {
    return (
       
      <form 
        className="container"
        onSubmit={this.props.handleSubmit(inventory => this.onSubmit(inventory))}
      >
        <label htmlFor="item">Item:</label>
        <Field
          component={Input}
          type="text"
          name="item"
          className="item"
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
          Edit Inventory
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "edit-inventory",
  onSubmitFail:(errors, dispatch) =>
    dispatch(focus("edit-inventory", Object.keys(errors)[0]))
})(EditInventoryForm);

