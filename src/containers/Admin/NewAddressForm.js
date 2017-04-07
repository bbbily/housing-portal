import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class NewAddressForm extends Component {
  onSubmit(props) {
    console.log(props)
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } >
        <Field name="street" component="input" type="text" placeholder="Street" />
        <Field name="city" component="input" type="text" placeholder="City" />
        <Field name="state" component="input" type="text" placeholder="State" />
        <Field name="zipcode" component="input" type="text" placeholder="Zip Code" />
        <button type="submit" >Save</button>
      </form>
    )
  }
}

export default reduxForm({
  form: "newAddressForm"
})(NewAddressForm)
