import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './itemTypes';
import {connect, monitor} from 'react'
import "../../styles/dndbed.scss";



export const StudentTarget = {
  drop({ allowedDropEffect }) {
    return {
      name: `${allowedDropEffect} Apartment`,
      allowedDropEffect,
    };
  },
};

// @DropTarget(ItemTypes.Student, StudentTarget, (connect, monitor) => ({
//   connectDropTarget: connect.dropTarget(),
//   isOver: monitor.isOver(),
//   canDrop: monitor.canDrop(),
// }))
class Bed extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    allowedDropEffect: PropTypes.string.isRequired,
  };

  render() {
    ///////////////////////////////////
    // setting of styles:
    // this is where Students will display in beds
    ////////////////////////////////////
    const { canDrop, isOver, allowedDropEffect, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#363636';
    if (isActive) {
      
      backgroundColor = 'red';
    } else if (canDrop) {
      backgroundColor = '#blue';
     
    }

    //return connectDropTarget(
      return connectDropTarget(
      /////////////////////////////////
      // this is the individual bed
      ///////////////////////////////
      <div className="dnd-bed">
       .
        {/*{ isActive ?
          'Release to place student' :
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