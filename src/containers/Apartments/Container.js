import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Room from './Room';
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
      open: false
    }  
  }

  componentWillMount() {
    this.props.dispatch(getStudents())
    this.props.dispatch(getApartments())
    this.props.dispatch(getRooms())
  }

  render() {
    //console.log("studentInfo:", this.props.all)
    let students = this.props.all.map( studentInfo => (
      <Student name={`${studentInfo.first_name} ${studentInfo.last_name}`}
                eligibility={studentInfo.eligibility}
                age={moment().diff(studentInfo.dob, 'years', false)}
                gender={studentInfo.gender}
                />
    ))
    let roomData = this.props.rooms.rooms


  console.log(this.props)
    let apartments = this.props.apartments.map( apartment => { 
      console.log(this.props.rooms.rooms)
      let arr = [1,2,3,4,5]
      var displayRooms = roomData.filter(function(room) { return (room.apartment_id == apartment.id) })
                                  .map(room => (<div key={room.id}>
                                 
                                 Apt ID: {room.apartment_id} <br/>
                                 Apt Number: {apartment.apartment_number} <br/>
                                 RoomID: {room.id}
                                    <Room allowedDropEffect="move" 
                                          numberOfBeds={room.number_of_beds}
                                          beds_occupied={room.beds_occuppied}/>
                                </div>))
      return (
      <div key={apartment.id}>
        <h3>{apartment.apartment_number}</h3>
          {displayRooms}
      </div> 
    )
  })
  
    


    return (
     <DragDropContextProvider backend={HTML5Backend}>
        <div>
         
          <div className="apartment-container">
             
          {apartments}
            {/*<div style={{ ...style }}>
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
            </div>*/}
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