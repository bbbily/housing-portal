import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { createApartment } from "../actions/action_apartments"

class StudentForm extends Component {
  onSubmit(props) {
    console.log("submit", props)
    this.props.dispatch(createApartment(props));
  }

  render() {
    const { handleSubmit } = this.props;
    // const { apt_num, num_room, student_id } = this.props.fields;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        apt_num<Field type="text" component="input" name="test1" />
        num_room<Field type="text" component="input" name="test2" />
        student_id<Field type="text" component="input" name="test3"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: "StudentFormForm"
})(StudentForm)
