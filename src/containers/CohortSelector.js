import React, { Component } from "react";
import { getCohorts } from "../actions/action_apartments";
import { connect } from "react-redux";

class CohortSelector extends Component {
  componentWillMount() {
    this.props.dispatch(getCampuses())
  }
  render() {
    let campuses = this.props.campuses.map( campus => {
      // let val = 0;
      // switch (campus.location_name) {
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
      return ( <option value={ campus.id } key={ campus.location_name} >{ campus.location_name }</option>)
    })
    console.log(this.props.campuses);
    return (
      <select name="campus" onChange={ this.props.handleChange }>
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
