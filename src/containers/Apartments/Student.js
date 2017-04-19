import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './itemTypes';
import "../../styles/aptstudentcard.scss";
import {addStudentToApt, removeStudentFromApt} from '../../actions/action_student'
import {connect} from "react-redux"
import flow from 'lodash/flow'
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
      studentID: props.id
    };
  },




  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    console.log(props)
    if (dropResult) {
      let alertMessage = '';
      if (dropResult.allowedDropEffect === 'any' || dropResult.allowedDropEffect === dropResult.dropEffect) {
        //console.log("dropResult", dropResult)
        //console.log("item", item)

        // This is the data the needs to be dispatched
       console.log(`The student ${item.name} will be in room ${dropResult.roomID}`)
       let studentObj = {
         id: item.name,
         room_id: dropResult.roomID
       }
      props.dispatch(addStudentToApt(studentObj)) 

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
  };

  render() {
    const { isDragging, connectDragSource } = this.props;
    const { name } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return (
      connectDragSource(
        <div className="aptcard-button">
          <img src="https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg" className="aptcard-image" />
          {this.props.name}, {this.props.age} <br />
          {this.props.gender}
        </div>,
      )
    );
  }
}

function mapStateToProps(state) {
  return {
    all: state.students.all
  }
}

// Student = 
// export default connect(mapStateToProps)(Student)

// export default DragSource(ItemTypes.Student, StudentSource, (connect, monitor) => ({
//   connectDragSource: connect.dragSource(),
//   isDragging: monitor.isDragging(),
// }))(Student)

export default flow(
  connect(mapStateToProps),
  DragSource(ItemTypes.Student, StudentSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
)(Student)