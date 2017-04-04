import React, { Component } from 'react';
import {DropdownButton} from 'react-bootstrap'
import {MenuItem} from 'react-bootstrap'

export default class DropDown extends Component {
  render() {

    return (
      <div>
        <DropdownButton bsStyle="default" title="No caret" id="dropdown-no-caret">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton>
      </div>
    );
  
  }
}

