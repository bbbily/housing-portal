import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import "../../styles/newapartment.scss";
import { Field, reduxForm } from "redux-form";
import Room from "../../presentational/views/Room";

class CreateNewApartment extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }


    onSubmit(props) {
      // props.id = this.props.id;
      console.log("adminform props", props)
      // this.props.dispatch(editAdmin(props))
    }


    render() {
        // const Rooms =
        const { handleSubmit } = this.props;
        return (
            <div className="new-apartment-container">
                <div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    <h3>Create New Apartment</h3>
                </div>
                <Panel className="apartment-panel" collapsible expanded={ this.state.open }>
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
                    {/* <Room beds="apartment." /> */}
                  </form>
                </Panel>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//   return {apartment: state.apartment}
// }

export default reduxForm({
  form: "apartmentForm"
})(CreateNewApartment);
