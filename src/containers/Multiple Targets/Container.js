import React, { Component, PropTypes } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';

import ItemTypes from './ItemTypes';
import "../../styles/dndbed.scss";
import "../../styles/housingcontainer.scss";
import "../../styles/aptstudentcard.scss";
import TestStudent from './TestStudent'
import { getStudents } from "../../actions/action_student"
import { getApartments, getRooms } from "../../actions/action_apartments"
import {connect} from "react-redux"
import moment from "moment"
import { Accordion, Panel } from 'react-bootstrap'
import Room from '../Apartments/Room';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dustbins: [ //BEDS
        { accepts: [ItemTypes.GLASS], lastDroppedItem: null },
        { accepts: [ItemTypes.FOOD], lastDroppedItem: null },
        { accepts: [ItemTypes.PAPER, ItemTypes.GLASS, NativeTypes.URL], lastDroppedItem: null },
        { accepts: [ItemTypes.PAPER, NativeTypes.FILE], lastDroppedItem: null },
      ],
      boxes: [ //STUDENTS
        { name: 'Bottle', type: ItemTypes.GLASS },
        { name: 'Banana', type: ItemTypes.FOOD },
        { name: 'Magazine', type: ItemTypes.PAPER },
      ],
      droppedBoxNames: [],
    };
  }

  isDropped(boxName) {
    return this.state.droppedBoxNames.indexOf(boxName) > -1;
  }

componentWillMount() {
    this.props.dispatch(getStudents())
    this.props.dispatch(getApartments())
    this.props.dispatch(getRooms())
  }
  

  render() {
 
    const { boxes, dustbins } = this.state;
    console.log("Container Props:", this.props.all)
    let accepts = [ItemTypes.PAPER, ItemTypes.GLASS, NativeTypes.URL]
    let students = this.props.all.map( studentInfo => (
      <div>
        <TestStudent  name={`${studentInfo.first_name} ${studentInfo.last_name}`}
                eligibility={studentInfo.eligibility}
                age={moment().diff(studentInfo.dob, 'years', false)}
                gender={studentInfo.gender}
                id={studentInfo.id}
                isDropped={this.isDropped("asdfasdfasfs")}
                /></div>
      ))
    
    let roomData = this.props.rooms.rooms
    let apartments = this.props.apartments.map( apartment => { 
    let displayRooms = roomData.filter(function(room) { return (room.apartment_id == apartment.id) })
                                  .map((room) => (<li><Room key={room.id} 
                                                            number_of_beds={room.number_of_beds}
                                                            room_id={room.id}
                                                          />
                                                  </li>))
                                  return (
                                  <Panel header={`Apt ${apartment.apartment_number}`}
                                         eventKey={apartment.id} 
                                         className="apt-holder">
                                      <ul className="apt-ul">
                                        {displayRooms} 
                                      </ul>
                                  </Panel>
                                )
                              })
    return (
      <div>
        {/*<div style={{ overflow: 'hidden', clear: 'both' }}>
          {dustbins.map(({ accepts, lastDroppedItem }, index) =>
            <Dustbin
              accepts={accepts}
              lastDroppedItem={lastDroppedItem}
              onDrop={item => this.handleDrop(index, item)}
              key={index}
            />,
          )}
        </div>*/}

          <Accordion className="apartment-container">
            {apartments}
          </Accordion>

        <div className="housing-container">
            {students}
        </div>
      </div>
    );
  }

  handleDrop(index, item) {
    console.log(item)
    const { name } = item;

    this.setState(update(this.state, {
      dustbins: {
        [index]: {
          lastDroppedItem: {
            $set: item,
          },
        },
      },
      droppedBoxNames: name ? {
        $push: [name],
      } : {},
    }));
  }
}
function mapStateToProps(state) {
  return {
    all: state.students.all,
    apartments: state.apartments.all,
    rooms: state.rooms
  }
}
Container = DragDropContext(HTML5Backend)(Container)
export default connect(mapStateToProps)(Container)
