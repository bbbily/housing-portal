import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { editAdmin, deleteAdmin } from "../../actions/action_admin";

function fetchData(firstName) {
  return {
    firstName: firstName
  }
}

class AdminForm extends Component {

  onSubmit(props) {
    props.id = this.props.id;
    console.log("adminform props", props)
    this.props.dispatch(editAdmin(props))
  }

  handleDelete(user) {
    this.props.dispatch(deleteAdmin(user))
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="first_name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="last_name" component="input" type="text"  />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text" value="addddd" />
        </div>
        <div>
          <label htmlFor="campus">Campus</label>
          <Field name="campus_id" component="select">
            <option value="1">Provo</option>
            <option value="2">Salt Lake city</option>
            <option value="3">Dallas</option>
          </Field>
        </div>
        <button>Pancil</button>
        <button type="submit">Save</button>
        <button type="button" onClick={ this.handleDelete.bind(this, {id: this.props.id}) }>X</button>
      </form>
    )
  }
}


export default reduxForm({
  // initialValues: data
})(AdminForm)
