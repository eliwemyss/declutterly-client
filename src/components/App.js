import React from 'react';

import NavBar from './NavBar';
import InventoryForm from './InventoryForm';
import Inventory from './Inventory';


export default class App extends React.Component {
render() {
  return(
    <div>
      <NavBar />
      <InventoryForm />
      <Inventory />
    </div>
    )
  }
}