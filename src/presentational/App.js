import React, { Component } from "react";
import "../styles/App.scss";
import DatePickerComponent from "../containers/DatePicker";
import Modal from "../containers/modal";
import { Link } from "react-router";
// import Admin from "./views/Admin";
 import ApartmentsList from '../containers/Apartments/index'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
         <Modal
           title="This Will Be Student Basic Info"
           heading="This is the heading of the modal">
         This is some stuff man
         </Modal>
          <DatePickerComponent/>
          <Link to="/admin"> <button>go to admin</button></Link>
          <Link to="/students"> <button>Student List</button></Link>
          <Link to="/apartments"><button>apartment list</button></Link>

          <br/><br/>

          <ApartmentsList />
        </div>
      </div>
    );
  }
}

export default App;
