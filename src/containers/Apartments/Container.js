import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Apartment from './Apartment';
import Student from './Student';

export default class Container extends Component {

  constructor(props) {
    super(props)

    
  }


  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Apartment allowedDropEffect="any" />
            <Apartment allowedDropEffect="copy" />
            <Apartment allowedDropEffect="move" />
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