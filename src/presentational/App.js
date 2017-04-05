import React, { Component } from "react";
import StudentForm from "../containers/StudentForm";
import "../styles/App.scss";
import DatePickerComponent from "../containers/DatePicker";
import Modal from "../containers/modal";
import { Link } from "react-router";



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
         <Modal
           title="This Will Be Student Info"
           heading="This is the heading of the modal">
         This is some shit man
         </Modal>
          {/*<Test />*/}
          <DatePickerComponent/>
          <StudentForm />
          <Link to="/admin"> <button>go to admin</button></Link>
        </div>
      </div>
    );
  }
}

export default App;
