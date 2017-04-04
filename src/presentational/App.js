
import React, { Component } from 'react';
import StudentForm from "../containers/StudentForm";
import Test from "../containers/test.js"
import '../styles/App.css';
import DatePickerComponent from "../containers/DatePicker";
import MyModal from '../containers/modal';

class App extends Component {
 render() {
   return (
     <div className="App">
       <div className="App-header">
         <h2>Welcome to React</h2>
<<<<<<< HEAD
         <DatePickerComponent />
         <MyModal />
=======
         <Test />
         <DatePickerComponent/>
         <StudentForm />
>>>>>>> master
       </div>
     </div>
   );
 }
}

export default App;
