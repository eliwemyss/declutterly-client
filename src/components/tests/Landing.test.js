import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../store';
import configure from '../../setupTests';
import Landing from '../Landing';



describe('Landing', () => {
  it('Renders without crashing', () => {
    shallow(
      	<Provider store={store}>
      		<Landing />
    	</Provider>
    )
  });
});