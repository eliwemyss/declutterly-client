import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../store';
import configure from '../../setupTests';
import Registration from '../Registration';



describe('Registration', () => {
  it('Renders without crashing', () => {
    shallow(
     	<Provider store={store}>
      		<Registration />
    	</Provider>
   	)
  });
});