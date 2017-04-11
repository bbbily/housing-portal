import React, { Component } from "react";
import { Modal, Button, Popover, Tooltip, OverlayTrigger } from "react-bootstrap"
import "../../../styles/studentcard.scss";

export default class StudentModal extends Component {

constructor(props) {
  super(props)
  this.state = {showModal: false}

  this.close = this.close.bind(this)
  this.open = this.open.bind(this)
}

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
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
            {this.props.heading.cohort}
            Room: {this.props.body.room} <br />
            {this.props.body.address}<br /> 
            Eligibile: {this.props.body.eligibility} <br /> 
            Deposit Paid: {this.props.body.deposit_paid}<br />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Save Changes</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}