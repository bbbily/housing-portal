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
      // let val = 0;
      // switch (cohort.location_name) {
      //   case "Provo":
      //     val = 1;
      //     break;
      //   case "Salt Lake":
      //     val = 2;
      //     break;
      //   case "Dallas":
      //     val = 3;
      //     break;
      //   default:
      //     val = 0;
      // }
      return ( <option value={ cohort.id } key={ cohort.id} >{ cohort.name }</option>)
    })
    console.log(this.props.cohorts);
    return (
      <Field name={ this.props.name } component="select">
        { cohorts }
          {/* <option value="Dallas">Dallas</option>
          <option value="Provo">Provo</option>
          <option value="SaltLake">Salt Lake</option> */}
      </Field>
    )
  }
}

function mapStateToProps(state) {
  return { cohorts: state.cohort.all }
}

export default connect(mapStateToProps)(CohortDropdown);
