import React, { Component, PropTypes } from 'react';
import "../../styles/aptstudentcard.scss";
import { DragSource } from 'react-dnd';

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name,
    };
  },
};


class TestStudent extends Component {
static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isDropped: PropTypes.bool.isRequired,
  };
  render() {
    return connectDragSourge(
      <div className="aptcard-button">
        <img src="https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg" className="aptcard-image" />
          {this.props.name}, {this.props.age} <br />
          {this.props.gender}
      </div>
    );
  }
}
export default DragSource(props => props.type, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(TestStudent)