import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './itemTypes';
import {connect, monitor} from 'react'
import "../../styles/dndbed.scss";

const style = {
  borderRadius: '5px',
  height: '12rem',
  width: '12rem',
  margin: '1.5rem',
  display: 'flex',
  justifyContent: 'space-around',
  alignContent: 'center',
  color: 'white',
  padding: '4rem',
  textAlign: 'center',
  fontSize: '15px',
  lineHeight: 'normal',
  float: 'left',
};

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
class Room extends Component {
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

    let backgroundColor = '#3C3C3C';
    if (isActive) {
      
      backgroundColor = '#458BCD';
    } else if (canDrop) {
      backgroundColor = '#67adef';
     
    }

    //return connectDropTarget(
      return connectDropTarget(
      /////////////////////////////////
      // this is the individual bed
      ///////////////////////////////
      <div className="dnd-room" style={{ ...style, backgroundColor }}>
       Bed
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
}))(Room)