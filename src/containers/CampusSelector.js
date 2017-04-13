import React, { Component } from "react";
import { getCampuses } from "../actions/action_apartments";
import { connect } from "react-redux";

class CampusSelector extends Component {
  componentWillMount() {
    this.props.dispatch(getCampuses())
  }
  render() {
    let campuses = this.props.campuses.map( campus => {
      return ( <option value={ campus.id } key={ campus.location_name} >{ campus.location_name }</option>)
    })
    console.log("re-rendering campus list");
    return (
      <select name="campus_id" onChange={ this.props.handleChange }>
          <option selected value="" key="">Any</option>
            { campuses }
      </select>
    )
  }
}

function mapStateToProps(state) {
  return { campuses: state.campus.all }
}

export default connect(mapStateToProps)(CampusSelector);
