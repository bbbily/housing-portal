
import React, { Component } from 'react';
import StudentForm from "../containers/StudentForm";
import '../styles/App.css';
import DatePickerComponent from "../containers/DatePicker";
import MyModal from '../containers/modal';

import Modal from '../containers/modal';
import { Link } from "react-router";


class App extends Component {
 render() {
   return (
     <div className="App">
       <div className="App-header">
         <h2>Welcome to React</h2>

         <DatePickerComponent />
         <MyModal />
         <DatePickerComponent/>
         <StudentForm />
         <Link to="/admin"> <button>go to admin</button></Link>
       </div>
     </div>
   );
 }
}

export default App;
