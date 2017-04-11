import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Room from './Room';
import Student from './Student';
import "../../styles/dndbed.scss";

const style = {
  borderRadius: '5px',
  backgroundColor: '#4d4d4d',
  padding: '20px',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  float: 'left',
};

export default class Container extends Component {

  constructor(props) {
    super(props)    
  }

  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div>
          <div className="apartment-container" style={{ overflow: 'hidden', clear: 'both' }}>
            <div style={{ ...style }}>
              <Room allowedDropEffect="move" />
            </div>
            <div style={{ ...style }}>
              <Room allowedDropEffect="copy" />
              <Room allowedDropEffect="copy" />              
            </div>
            <div style={{ ...style }}>
              <Room allowedDropEffect="any" />
              <Room allowedDropEffect="any" />
              <Room allowedDropEffect="any" />
            </div>
          </div>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Student name="Kevin"
                 campus=""
                 cohort=""
                    />
            <Student name="Joanna" />
            <Student name="Billy" />
          </div>
        </div>
      </DragDropContextProvider>
    );
  }
}