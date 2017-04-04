
import React, { Component } from 'react';
import './App.css';
import DatePickerComponent from "../DatePicker";
import StudentForm from "../containers/StudentForm";
import Test from "../containers/test.js"


class App extends Component {
 render() {
   return (
     <div className="App">
       <div className="App-header">
         <h2>Welcome to React</h2>
         <Test />
         <DatePickerComponent/>
         <StudentForm />
       </div>
     </div>
   );
 }
}

export default App;
