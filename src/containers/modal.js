import React, { Component } from 'react';
import {Modal} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Popover} from 'react-bootstrap'
import {Tooltip} from 'react-bootstrap'
import{OverlayTrigger} from 'react-bootstrap'

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
     
    //
    // this.props.children = primary content
    //

    return (
      <div>
      
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          {this.props.title}
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.heading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.children}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}