
import React, { Component } from 'react';
import './App.css';
import DatePickerComponent from "../DatePicker";



class App extends Component {
 render() {
   return (
     <div className="App">
       <div className="App-header">
         <h2>Welcome to React</h2>
         <DatePickerComponent/>
       </div>
     </div>
   );
 }
}

export default App;