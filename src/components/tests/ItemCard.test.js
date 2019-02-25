import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../store';
import configure from '../../setupTests';
import ItemCard from '../ItemCard';



describe('ItemCard', () => {
  it('Renders without crashing', () => {
    shallow(
      	<Provider store={store}>
      		<ItemCard />
    	</Provider>
    )
  });
});