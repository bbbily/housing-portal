import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { createAddress } from "../../actions/action_apartments";
import CampusDropdown from "../CampusDropdown";

class NewAddressForm extends Component {
  onSubmit(props) {
    console.log(props);
    this.props.dispatch(createAddress(props));
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } >
        <CampusDropdown name="campus_id"/>
        <Field name="street_address" component="input" type="text" placeholder="Street" />
        <Field name="city" component="input" type="text" placeholder="City" />
        <Field name="state" component="input" type="text" placeholder="State" />
        <Field name="country" component="input" type="text" placeholder="country" />
        <Field name="post_code" component="input" type="text" placeholder="Zip Code" />
        <button type="submit" >Save</button>
      </form>
    )
  }
}

export default reduxForm({
  form: "newAddressForm"
})(NewAddressForm)
