import React, { Component } from 'react';
import Bed from './Bed';

class Room extends Component {
 
  render() {
  console.log(this.props)
    let bedList = []
    for (var i = 0; i < this.props.numberOfBeds; i++) {
      bedList.push("<Bed allowedDropEffect='move' />")
    }
    console.log(bedList)
    return (
      <div>
        
        I am room

      </div>
    );
  }
}

export default Room;