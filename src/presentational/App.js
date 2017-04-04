
import React, { Component } from 'react';
import DatePickerComponent from "../DatePicker";
import StudentForm from "../containers/StudentForm";
import Test from "../containers/test.js"
import '../styles/App.css';
import DatePickerComponent from "../containers/DatePicker";

>>>>>>> master


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
