import React, { Component } from 'react';
import './App.css';
import Test from "../containers/test";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <Test />
        </div>
      </div>
    );
  }
}

export default App;
