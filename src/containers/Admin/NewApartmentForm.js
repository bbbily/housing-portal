import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class NewApartmentForm extends Component {
  onSubmit(props) {
    console.log("apratt", props);
    this.props.showRoom();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this))} >
        <div>
            <h4>Location:</h4>
            <Field name="apartment.campus" component="select">
                <option value="Dallas">Dallas</option>
                <option value="Provo">Provo</option>
                <option value="SaltLake">Salt Lake</option>
            </Field>
        </div>
        <div>
            <Field name="apartment.apt#" component="input" type="text" placeholder="Apt. #" />
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
  form: "NewApartmentForm"
})(NewApartmentForm);
