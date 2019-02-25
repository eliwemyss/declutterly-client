import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../store';
import configure from '../../setupTests';
import EditInventory from '../EditInventory';



describe('EditInventory', () => {
  it('Renders without crashing', () => {
    shallow(
      	<Provider store={store}>
      		<EditInventory />
    	</Provider>
    )
  });
});