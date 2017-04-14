import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Room from './Room';
import Bed from './Bed'
import Student from './Student';
import "../../styles/dndbed.scss";
import "../../styles/housingcontainer.scss";
import {connect} from "react-redux"
import { getStudents } from "../../actions/action_student"
import { getApartments, getRooms } from "../../actions/action_apartments"
import moment from "moment"
import { Panel } from "react-bootstrap";


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
    this.state = {
      open: false,
      bedList: ''
    } 
    
  }

  componentWillMount() {
    this.props.dispatch(getStudents())
    this.props.dispatch(getApartments())
    this.props.dispatch(getRooms())
  }
  
  render() {
    
    let students = this.props.all.map( studentInfo => (
      <Student name={`${studentInfo.first_name} ${studentInfo.last_name}`}
                eligibility={studentInfo.eligibility}
                age={moment().diff(studentInfo.dob, 'years', false)}
                gender={studentInfo.gender}
                />
    ))
   
    let roomData = this.props.rooms.rooms
    console.log("Apartments", this.props.apartments)
    console.log("rooms", roomData)
    let apartments = this.props.apartments.map( apartment => { 
    let displayRooms = roomData.filter(function(room) { return (room.apartment_id == apartment.id) })
                                  .map(room => (<Room key={room.id} 
                                                      number_of_beds={room.number_of_beds}>
                                                  </Room>))
                                  return (
                                  <div key={apartment.id}>
                                  Apt: {apartment.apartment_number} / ID: {apartment.id}
                                    {displayRooms} 
                                  </div> 
                                )
                              })
  
    return (
     <DragDropContextProvider backend={HTML5Backend}>
        <div>
         
          <div className="apartment-container">
             
          {apartments}

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
    apartments: state.apartments.all,
    rooms: state.rooms
  }
}
export default connect(mapStateToProps)(Container)
