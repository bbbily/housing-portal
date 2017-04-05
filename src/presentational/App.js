import React, { Component } from 'react';
import StudentForm from "../containers/StudentForm";
import Test from "../containers/test.js"
import '../styles/App.css';
import Modal from '../containers/modal'


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
        <Test />
        <DatePickerComponent/>
        <StudentForm />
      </div>
    </div>
  );
}
}

export default App;
