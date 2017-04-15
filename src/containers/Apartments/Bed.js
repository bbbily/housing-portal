import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import {connect, monitor} from 'react'
import "../../styles/dndbed.scss";

const style = {
  //backgroundColor: '#363636'
}

const StudentTarget = {
  drop({ props }) {
    props.onDrop(monitor.getItem())
    return {
      name: `${allowedDropEffect} Apartment`,
      allowedDropEffect,
      room_id,
      lastDroppedItem,
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
    console.log("Bed props:", this.props)
    const { canDrop, isOver, allowedDropEffect, connectDropTarget, lastDroppedItem} = this.props;
    const isActive = canDrop && isOver;
     

    let backgroundColor = '#363636';
    if (isActive) {
      //console.log("Bed Props, isActive", this.props)
      backgroundColor = '#ffffff';
    } else if (canDrop) {
      backgroundColor = '#000000';
      //console.log("Bed Props, canDrop", this.props)
    }

      return connectDropTarget(
      /////////////////////////////////
      // this is the individual bed
      ///////////////////////////////
      <div className="dnd-bed" style={{...style, backgroundColor}}>
       Bed <br/>
        {/*{ isActive ?
          '' :
          'Drag a student here'}*/}
          {lastDroppedItem}
      </div>
    );
  }
}


export default DropTarget(props => ItemTypes.Student, StudentTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(Bed)
 