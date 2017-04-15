import React, { Component } from 'react';
import Bed from './Bed';
import "../../styles/dndbed.scss";
class Room extends Component {
 
  render() {
    
  let listBeds = []
  console.log("all_student_info", this.props.all_student_info)
  

    for (var i = 0; i < this.props.all_student_info.length; i++) {
      if (this.props.all_student_info[i].room_id == this.props.room_id) {
              listBeds.push(<Bed key={i} 
                          allowedDropEffect='move' 
                          roomID={this.props.room_id}
                          studentID={this.props}>
                          {this.props.all_student_info[i].first_name}
                          </Bed>
                          ) 
      } 
    }
     for (var i = listBeds.length; i < this.props.number_of_beds; i++)    {
       
      listBeds.push(<Bed key={i} 
                          allowedDropEffect='move' 
                          roomID={this.props.room_id}
                          studentID={this.props}>
                          </Bed>
                          )}
      
     


  
    return (
      <div className="dnd-room">
        Room
         {listBeds}
      </div>
    );
  }
}

export default Room;