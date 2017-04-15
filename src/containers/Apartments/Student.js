import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';

import "../../styles/aptstudentcard.scss";


// const style = {
//   border: '1px dashed gray',
//   backgroundColor: 'white',
//   padding: '0.5rem 1rem',
//   marginRight: '1.5rem',
//   marginBottom: '1.5rem',
//   float: 'left',
// };

const StudentSource = {
  beginDrag(props) {
    return {
      name: props.name,
      age: props.age,
      eligibility: props.eligibility,
      gender: props.gender,
      id: props.id
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    console.log("Dropresult: ", dropResult)
    if (dropResult) {
      let alertMessage = '';
      if (dropResult.allowedDropEffect === 'any' || dropResult.allowedDropEffect === dropResult.dropEffect) {
        
        /////////////////////////////////////
        //this is where you handle a successful drop.
        // dispatch here 
        /////////////////////////////////////////
        console.log("STUDENT item:", item)
        console.log("STUDENT props:", this.props)
        alertMessage = `You too old!`
        //alertMessage = `You ${dropResult.dropEffect === 'copy' ? 'copied' : 'moved'} ${item.name} into ${dropResult.name}! They are ${item.age} years old and are ${item.gender}`;
      } else {
        alertMessage = 'You are just the right age.'
        alertMessage = `You cannot ${dropResult.dropEffect} an item into the ${dropResult.name}`;
      }
      window.alert( // eslint-disable-line no-alert
        alertMessage,
      );
    }
  },
};


class Student extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
   // type: PropTypes.string.isRequired,
    //isDropped: PropTypes.bool.isRequired   // NEW
  };

  render() {
    const { name, age, eligibility, gender, isDragging, connectDragSource, isDropped } = this.props;
//const { name } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return connectDragSource(
        <div className="aptcard-button">
          <img src="https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg" className="aptcard-image" />
          {this.props.name}, {this.props.age} <br />
          {this.props.gender}
        </div>,
      
    );
  }
}
 export default DragSource(props => ItemTypes.Student, StudentSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(Student)

