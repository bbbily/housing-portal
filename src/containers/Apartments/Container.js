import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Room from './Room';
import Student from './Student';
import "../../styles/dndbed.scss";
import "../../styles/housingcontainer.scss";
import {connect} from "react-redux"
import {getStudents} from "../../actions/action_student"
import { getApartments } from "../../actions/action_apartments"
import moment from "moment"

const style = {
  borderRadius: '5px',
  backgroundColor: '#4d4d4d',
  padding: '20px',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  float: 'left',
};

class Container extends Component {

  constructor(props) {
    super(props)    
  }

  componentWillMount() {
    this.props.dispatch(getStudents())
    this.props.dispatch(getApartments())
  }

  render() {
    //console.log("studentInfo:", this.props.all)
    let students = this.props.all.map( studentInfo => (
      <Student  name={`${studentInfo.first_name} ${studentInfo.last_name}`}
                eligibility={studentInfo.eligibility}
                age={moment().diff(studentInfo.dob, 'years', false)}
                gender={studentInfo.gender}
                />
    ))
    console.log(this.props.apartments)

    return (
     <DragDropContextProvider backend={HTML5Backend}>
        <div>
          <div className="apartment-container" style={{ overflow: 'hidden', clear: 'both' }}>
            <div style={{ ...style }}>
              <Room allowedDropEffect="move" 
                    preferred_gender="M"
                    over_21="true"/>
            </div>
            <div style={{ ...style }}>
              <Room allowedDropEffect="copy" 
                    gender="F"
                    age="100"/>
              <Room allowedDropEffect="copy" />              
            </div>
            <div style={{ ...style }}>
              <Room allowedDropEffect="any" />
              <Room allowedDropEffect="any" />
              <Room allowedDropEffect="any" />
            </div>
          </div>
          <div className="housing-container">
            {students}
          </div>
        </div>
      </DragDropContextProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    all: state.students.all,
    apartments: state.apartments.all
  }
}
export default connect(mapStateToProps)(Container)