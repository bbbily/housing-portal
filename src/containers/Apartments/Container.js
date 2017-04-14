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
    this.showBeds = this.showBeds.bind(this) 
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
    
    let apartments = this.props.apartments.map( apartment => { 
    let displayRooms = roomData.filter(function(room) { return (room.apartment_id == apartment.id) })
                                  .map(room => (<div key={room.id} className="dnd-room">
            
                                       Beds: {room.number_of_beds} <br/>
       
                                </div>))

    // this prints out all of the rooms that apartment has.
    // INSIDE of each room, the number of beds needs to be displayed
    // then looped over the length of room.number_of_beds
    //
    //Bed should be the container componenent that holds each of the beds
    //
      return (
      <div key={apartment.id}>
       <b>Apt Number: </b> {apartment.apartment_number}
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