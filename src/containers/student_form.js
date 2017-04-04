import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { createApartment } from "../actions/action_apartments"

class StudentForm extends Component {
  onSubmit(props) {
    this.props.dispatch(createApartment(props));
  }

  render() {
    const { handleSubmit } = this.props;
    const { apt_num, num_room, student_id } = this.props.fields;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        apt_num<input type="text" { ...apt_num } />
        num_room<input type="text" { ...num_room } />
        student_id<input type="text" { ...student_id } />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: "StudentFormForm",
  fields: ["apt_num", "num_room", "student_id"]
})(StudentForm)
