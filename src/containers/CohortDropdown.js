import React, { Component } from "react";
import { Field } from "redux-form";
import { getCohorts } from "../actions/action_admin";
import { connect } from "react-redux";

class CohortDropdown extends Component {
  componentWillMount() {
    this.props.dispatch(getCohorts())
  }
  render() {
    let cohorts = this.props.cohorts.map( cohort => {
      return ( <option value={ cohort.id } key={ cohort.id } >{ cohort.name }</option>)
    })
    return (
      <Field name={ this.props.name } component="select">
        { cohorts }
      </Field>
    )
  }
}

function mapStateToProps(state) {
  return { cohorts: state.cohort.all }
}

export default connect(mapStateToProps)(CohortDropdown);
