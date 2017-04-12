import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import CohortDropdown from "../CohortDropdown";
import CampusDropdown from "../CampusDropdown";
import { editStudent } from "../../actions/action_student";
import { Modal, Button, Popover, Tooltip, OverlayTrigger } from "react-bootstrap";


class StudentForm extends Component {
  onSubmit(props) {
    props.id = this.props.student_id
    console.log("submit", props)
    this.props.dispatch(editStudent(props));
  }

  render() {
    const { handleSubmit } = this.props;
    // const { apt_num, num_room, student_id } = this.props.fields;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {/* <CampusDropdown name="campus_id" /> */}
        <CohortDropdown name="cohort_id" />
        <Field type="text" component="input" name="first_name" placeholder="First" />
        <Field type="text" component="input" name="last_name" placeholder="Last" />
        DOB<Field type="date" component="input" name="dob" placeholder="Date of birth" />
        <Field type="text" component="input" name="email" placeholder="Email" />
        <Field type="text" component="input" name="slack" placeholder="Slack" />
        <Field type="text" component="input" name="phone" placeholder="Phone" />
        <Field type="text" component="input" name="street_address" placeholder="Address" />
        <Field type="text" component="input" name="city" placeholder="City" />
        <Field type="text" component="input" name="state" placeholder="State" />
        <Field type="text" component="input" name="country" placeholder="Country" />
        <Field type="text" component="input" name="post_code" placeholder="Zip" />
        <Field type="date" component="input" name="arrive_date" placeholder="Arrives" />
        <Field type="date" component="input" name="leave_date" placeholder="Leaves" />
        {/* <button type="submit">Save</button> */}
        <Modal.Footer>
          <Button onClick={this.props.close} type="submit">Save Changes</Button>
          <Button onClick={this.props.close}>Close</Button>
        </Modal.Footer>
      </form>
    )
  }
}

export default reduxForm({
  // form: "StudentForm"
})(StudentForm)
