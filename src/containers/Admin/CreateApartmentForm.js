import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class CreateApartmentForm extends Component {
  onSubmit(props) {
    console.log("apratt", props);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this))} >
        <div>
            <h4>Campus:</h4>
            <Field name="apartment.campus" component="select">
                <option value="Dallas">Dallas</option>
                <option value="Provo">Provo</option>
                <option value="SaltLake">Salt Lake</option>
            </Field>
        </div>
        <h4>Address:</h4>
        <div>
            <Field name="apartment.street" component="input" type="text" placeholder="Street" />
            <Field name="apartment.apt#" component="input" type="text" placeholder="Apt. #" />
            <Field name="apartment.city" component="input" type="text" placeholder="City" />
            <Field name="apartment.state" component="input" type="text" placeholder="State" />
            <Field name="apartment.zipcode" component="input" type="text" placeholder="Zip Code" />
        </div>
        <div>
          <label htmlFor={this.props.gender}>gender: </label>
          <Field component="input" type="radio" name="apartment.gender" value="male" /> male
          <Field component="input" type="radio" name="apartment.gender" value="female" /> female
        </div>
        <button type="submit">Save</button>
      </form>
    )
  }
}

export default reduxForm({
  form: "CreateApartmentForm"
})(CreateApartmentForm);
