import React, { Component } from 'react';
import './App.css';
import MyModal from './modal'
import DropDown from './DropDownMenu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MyModal />
        <DropDown />
      </div>
    );
  }
}

export default App;
