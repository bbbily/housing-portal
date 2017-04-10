import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './itemTypes';
import {connect, monitor} from 'react'

const style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
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
class Apartment extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    allowedDropEffect: PropTypes.string.isRequired,
  };

  render() {
    const { canDrop, isOver, allowedDropEffect, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#222';
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    }

    return connectDropTarget(
      <div style={{ ...style, backgroundColor }}>
       Room 1
        {isActive ?
          'Release to place student' :
          'Drag a student here'
        }
      </div>,
    );
  }
}

export default DropTarget(ItemTypes.Student, StudentTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(Apartment)