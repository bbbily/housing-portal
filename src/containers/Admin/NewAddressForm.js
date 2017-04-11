import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class NewAddressForm extends Component {
  onSubmit(props) {
    console.log(props)
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="new-address-form">
        <h1>New Building Address</h1>
        <p>This is the address of the building or apartment complex where the student apartments are located.</p>
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } >
        <Field name="street" component="input" type="text" placeholder="Street" />
        <Field name="city" component="input" type="text" placeholder="City" />
        <Field name="state" component="input" type="text" placeholder="State" />
        <Field name="zipcode" component="input" type="text" placeholder="Zip Code" /> 
        <br /><br />
        <button type="submit" >Save</button>
      </form>
      </div>
    )
  }
}

export default reduxForm({
  form: "newAddressForm"
})(NewAddressForm)
