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
      <span>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
          className="studentcard-button">
          <img src={this.props.title.image} className="studentcard-image" id="student-photo" />
          <h1 className="small-display-name">{this.props.title.name}</h1>
          <p className="small-display-info">
            {this.props.title.age} &nbsp;&nbsp;
            {this.props.title.gender} &nbsp;&nbsp;
            {this.props.title.cohort} &nbsp;&nbsp;
          </p>
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>
                <img src={this.props.heading.image} className="largecard-image" />
                <h1>
                    {this.props.heading.name}
                </h1>
                <p>{this.props.heading.age} &nbsp;&nbsp; {this.props.heading.gender} &nbsp;&nbsp; {this.props.heading.cohort}</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Room: {this.props.body.room} &nbsp;&nbsp; Address: {this.props.body.address} &nbsp;&nbsp; Eligibile: {this.props.body.eligibility} &nbsp;&nbsp; Deposit Paid: {this.props.body.deposit_paid}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Save</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}