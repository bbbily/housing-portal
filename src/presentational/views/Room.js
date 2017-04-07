import React, { Component } from "react";
import { Field } from "react-redux-form"

export default class Room extends Component {

  render() {
    return (
      <div>
        <h4>Room:</h4>
        <div>
          <label htmlFor={this.props.beds}>beds: </label>
          <Field type="radio" name={this.props.beds} /> 1
          <Field type="radio" name={this.props.beds} /> 2
          <Field type="radio" name={this.props.beds} /> 3
        </div>
        <div>
          <label htmlFor={this.props.gender}>gender: </label>
          <Field type="radio" name={this.props.gender} /> male
          <Field type="radio" name={this.props.gender} /> female
        </div>
      </div>
    )
  }
}
