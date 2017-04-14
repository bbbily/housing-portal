import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import {connect, monitor} from 'react'
import "../../styles/dndbed.scss";



export const StudentTarget = {
  drop({ allowedDropEffect, props, monitor }) {
    return {
      name: `${allowedDropEffect} Apartment`,
      allowedDropEffect,
    };
  },
};


class Bed extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    allowedDropEffect: PropTypes.string.isRequired,
    room_id: PropTypes.number.isRequired
  };

  render() {
    ///////////////////////////////////
    // setting of styles:
    // this is where Students will display in beds
    ////////////////////////////////////
    const { canDrop, isOver, allowedDropEffect, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;
     console.log("Bed Props", this.props)

    let backgroundColor = '#363636';
    if (isActive) {
      
      backgroundColor = '#ffffff';
    } else if (canDrop) {
      backgroundColor = '#000000';
     
    }

    //return connectDropTarget(
      return connectDropTarget(
      /////////////////////////////////
      // this is the individual bed
      ///////////////////////////////
      <div className="dnd-bed">
       Bed <br/>
        {/*{ isActive ?
          '' :
          'Drag a student here'}*/}
      </div>
    );
  }
}


export default DropTarget(ItemTypes.Student, StudentTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(Bed)
 