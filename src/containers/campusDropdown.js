import React, { Component } from "react";
import { Field } from "redux-form";
import { getCampuses } from "../actions/action_apartments";
import { connect } from "react-redux";

class CampusDropdown extends Component {
  componentWillMount() {
    this.props.dispatch(getCampuses())
  }
  render() {
    let campuses = this.props.campuses.map( campus => {

      return ( <option value={ campus.id } key={ campus.id} >{ campus.location_name }</option>)
    })
    return (
      <Field name={ this.props.name } component="select">
        { campuses }
      </Field>
    )
  }
}

function mapStateToProps(state) {
  return { campuses: state.campus.all }
}

export default connect(mapStateToProps)(CampusDropdown);