import React, { Component } from "react";
import { Field } from "redux-form";
import { getBuildings } from "../actions/action_apartments";
import { connect } from "react-redux";

class CampusDropdown extends Component {
  componentWillMount() {
    this.props.dispatch(getBuildings())
  }
  render() {
    let buildings = this.props.buildings.map( building => {

      return ( <option value={ building.id } key={ building.id} >{ building.property_name } - { building.city}</option>)
    })
    return (
      <Field name={ this.props.name } component="select">
        { buildings }
      </Field>
    )
  }
}

function mapStateToProps(state) {
  return { buildings: state.building.all }
}

export default connect(mapStateToProps)(CampusDropdown);
