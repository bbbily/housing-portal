import React, { Component } from 'react';
import Bed from './Bed';
import "../../styles/dndbed.scss";
class Room extends Component {
 
  render() {
    
    let listBeds = []
    console.log(`The room with ID: ${this.props.room_id} has ${this.props.number_of_beds} total beds.`)
    for (var i = 0; i < this.props.number_of_beds; i++)    {
      listBeds.push(<Bed key={i} allowedDropEffect='move' room_id={this.props.room_id}/>) 
    } 
    
    return (
      <div className="dnd-room">
        Room
         {listBeds}
      </div>
    );
  }
}

export default Room;