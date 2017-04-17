import React, { Component } from "react";
import { getCohorts } from "../actions/action_apartments";
import { connect } from "react-redux";

class CohortSelector extends Component {
  componentWillMount() {
    this.props.dispatch(getCohorts())
  }
  render() {
    let cohorts = this.props.cohorts.map( cohort => {
      return ( <option value={ cohort.id } key={ cohort.name} >{ cohort.name }</option>)
    })
    console.log(this.props.cohorts, this.props.campuses);
    return (
      <select name="cohort_id" onChange={ this.props.handleChange }>
          <option selected value="" key="">Any</option>
            { cohorts }
      </select>
    )
  }
}

function mapStateToProps(state) {
  return { cohorts: state.cohort.all }
}

export default connect(mapStateToProps)(CohortSelector);
