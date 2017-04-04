
import React, { Component } from 'react';
import '../styles/App.css';
import DatePickerComponent from "../containers/DatePicker";
import MyModal from '../containers/modal';


class App extends Component {
 render() {
   return (
     <div className="App">
       <div className="App-header">
         <h2>Welcome to React</h2>
         <DatePickerComponent />
         <MyModal />
       </div>
     </div>
   );
 }
}

export default App;