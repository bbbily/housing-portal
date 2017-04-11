import React, { Component } from "react";
import { Modal, Button, Popover, Tooltip, OverlayTrigger } from "react-bootstrap";
import "../../../styles/studentcard.scss";
import StudentForm from "../../../containers/student/StudentForm"

export default class StudentModal extends Component {

constructor(props) {
  super(props)
  this.state = {showModal: false}

  this.close = this.close.bind(this)
  this.open = this.open.bind(this)
}

  sendData() {
    close();

  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    // console.log("prop", this.props)
    return (
      <div>


        <div onClick={this.open} className="studentcard-button">
          <img src="https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg" className="studentcard-image" />
            {this.props.title.name} <br />
                {this.props.title.gender},
                {this.props.title.age}. &nbsp;&nbsp;
                {this.props.title.cohort} &nbsp;&nbsp;
        </div>


        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>
                  <h1>{this.props.heading.name}, {this.props.heading.gender}, {this.props.heading.age}</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <StudentForm
              close={this.close.bind(this)}
              initialValues={{
                 first_name: this.props.first_name,
                 last_name: this.props.last_name,
                 email: this.props.email,
                 cohort_id: this.props.cohort_id,
                 dob: this.props.dob ,
                 email: this.props.email ,
                 slack: this.props.slack ,
                 phone: this.props.phone ,
                 city: this.props.city ,
                 state: this.props.state ,
                 country: this.props.country ,
                 post_code: this.props.post_code ,
                 arrive_date: this.props.arrive_date ,
                 leave_date: this.props.leave_date
                 }}  form={"studentForm" + this.props.id} id={ this.props.id } key={this.props.id}
              image={this.props.image}
              first_name={ this.props.first_name }
              last_name={ this.props.last_name }
              gender={this.props.gender}
              cohort={this.props.cohort}
              room={this.props.room}
              address={`${this.props.street_address} in ${this.props.city}, ${this.props.state}, ${this.props.country}`}
              eligibility={this.props.eligibility}
              deposit_paid={this.props.deposit_paid}
              student_id={this.props.id}
            />
            {/* {this.props.heading.cohort}
            Room: {this.props.body.room} <br />
            {this.props.body.address}<br />
            Eligibile: {this.props.body.eligibility} <br />
            Deposit Paid: {this.props.body.deposit_paid}<br /> */}
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={this.close}>Save Changes</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    );
  }
}
