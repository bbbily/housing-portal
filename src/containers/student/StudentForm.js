import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import CohortDropdown from "../CohortDropdown";
import CampusDropdown from "../CampusDropdown";
// import { createApartment } from "../actions/action_apartments"

class StudentForm extends Component {
  onSubmit(props) {
    console.log("submit", props)
    // this.props.dispatch(createApartment(props));
  }

  render() {
    const { handleSubmit } = this.props;
    // const { apt_num, num_room, student_id } = this.props.fields;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <CampusDropdown />
        <CohortDropdown />

        <Field type="text" component="input" name="first_name" placeholder="First" />
        <Field type="text" component="input" name="last_name" placeholder="Last" />
        <Field type="date" component="input" name="dob" placeholder="mm/dd/yyyy" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: "StudentForm"
})(StudentForm)
