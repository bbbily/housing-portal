import React, { Component } from 'react';
import {getCampuses} from "../actions/action_admin";
import {MenuItem, DropdownButton} from "react-bootstrap";
import {connect} from "react-redux"

class ListCampuses extends Component {

  componentDidMount() {
    this.props.dispatch(getCampuses())
  }
  

  render() {
        const campuses = this.props.campuses.map((campus,i) => (
          <MenuItem id={campus.id} key={i} eventKey={campus.city}> {campus.city} </MenuItem>
        ))
    return (

        
        <MenuItem></MenuItem>
        
        

    );
  }
}

function mapStateToProps(state){
  return {
    campuses: state.cohort.campuses
  }
}
export default connect(mapStateToProps)(ListCampuses);