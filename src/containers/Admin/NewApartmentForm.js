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
        <div className="spacer">
            <h1>New Apartments?</h1>
            <p>To add apartments to an existing campus, begin by selecting a campus.</p>
            <Field name="apartment.campus" component="select">
                <option value="Dallas">Dallas</option>
                <option value="Provo">Provo</option>
                <option value="SaltLake">Salt Lake</option>
            </Field>
        </div>
        <div className="spacer">
          <p>Next, add an identifying apartment number.</p>
            <Field name="apartment.apt#" component="input" type="text" placeholder="Apt. #" />
        </div>
        <div className="spacer">
          {/*<label htmlFor={this.props.gender}>Type of housing  </label>*/}
          <p>Select the type of housing</p>
          <Field component="input" type="radio" name="apartment.gender" value="male" className="margin-left"/> Male
          <Field component="input" type="radio" name="apartment.gender" value="female" className="margin-left"/> Female
        </div>
        <button type="submit">  Create  </button>
      </form>
    )
  }
}

export default reduxForm({
  form: "NewApartmentForm"
})(NewApartmentForm);
