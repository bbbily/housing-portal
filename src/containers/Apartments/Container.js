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
import { Panel, Accordion } from "react-bootstrap";
import { _pick } from 'lodash'

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
    const { boxes, dustbins } = this.state;
    //console.log("STUDENT INFO:", this.props.all)
    let students = this.props.all.map( studentInfo => (
      <Student  name={`${studentInfo.first_name} ${studentInfo.last_name}`}
                eligibility={studentInfo.eligibility}
                age={moment().diff(studentInfo.dob, 'years', false)}
                gender={studentInfo.gender}
                id={studentInfo.id}
                room_id={studentInfo.id}
               />
    ))
    //
    // We need each student id and it's corresponding room_id
    // We will sed this to through our Room component
    // To display the students in the correct rooms
    //
    
    let studentRoomInfo = _.map(this.props.all, function(currentObj) {
      return _.pick(currentObj, "id", "room_id", "first_name", "last_name")
    })
    
    //console.log('studentRoomInfo', studentRoomInfo)
    let studentsWithRooms = this.props.all.map( student => student.id )
    let roomData = this.props.rooms.rooms

    console.log("apartments", this.props.apartments)
    let apartments = this.props.apartments.map( apartment => { 
    let displayRooms = roomData.filter(function(room) { return (room.apartment_id == apartment.id) })
                                  .map(room => (<li><Room key={room.id} 
                                                          number_of_beds={room.number_of_beds}
                                                          room_id={room.id}
                                                          all_student_info={studentRoomInfo}>
                                                  </Room></li>))
                                                  let over21 = apartment.over_21 ? "Yes" : "No"
                                                  let gender = ''
                                                  if (apartment.preferred_gender == "F"){ gender = "Female" } else gender = "Male"
                                                  
                                                  let panelInfo = `Over 21: ${over21} ${gender}`
                                                  let headerMsg = `Apt ${apartment.apartment_number}` 
                                                  
                                                  //header={"Apt " + {apartment.apartment_number} + ". <img src=" + require("../../styles/icons/edit.svg") + "className='edit-apt'/>">}
                                  return (
                                  /*<div className="panel-container">
                                    <div className="panel-info">{panelInfo}</div>

                                    <div className="panel-settings"><img src={require('../../styles/icons/edit.svg')} /></div>
                                  </div>*/
                                  
                                    <Panel header={headerMsg}
                                          eventKey={apartment.id} 
                                          className="apt-holder">
                                        <ul className="apt-ul">
                                          {displayRooms} 
                                        </ul>
                                    </Panel>
                                    
                                    
                                )
                              })
  
    return (
     <DragDropContextProvider backend={HTML5Backend}>
        <div>
          <Accordion className="apartment-container">
            {apartments}
          </Accordion>
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

