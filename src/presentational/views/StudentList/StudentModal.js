import React, { Component } from 'react';
import '../../../styles/containers/modal.css'
import { Modal, Button, Popover, Tooltip, OverlayTrigger } from "react-bootstrap"


export default class MyModal extends Component {

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
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}>
          {this.props.title.image}
          {this.props.title.name} 
          {this.props.title.age}
          {this.props.title.gender}
          {this.props.title.cohort}
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>
                {this.props.heading.image}
                <h1>
                    {this.props.heading.name}
                </h1>
                <p>{this.props.heading.age} {this.props.heading.gender} {this.props.heading.cohort}</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.body.room} {this.props.body.address} {this.props.body.eligibility} {this.props.body.deposit_paid}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}