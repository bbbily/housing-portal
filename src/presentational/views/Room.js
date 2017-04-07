import React, { Component } from "react";
import { Field } from "redux-form"

export default class Room extends Component {

  render() {
    return (
      <div>
        <h4>Room:</h4>
        <div>
          <label htmlFor={this.props.beds}>beds: </label>
          <Field component="input" type="radio" name={this.props.beds} value="1" /> 1
          <Field component="input" type="radio" name={this.props.beds} value="2" /> 2
          <Field component="input" type="radio" name={this.props.beds} value="3" /> 3
        </div>
        
      </div>
    )
  }
}
