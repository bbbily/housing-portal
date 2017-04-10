import React, { Component } from 'react';
import Container from './Container';

export default class ApartmentsList extends Component {
  render() {
    return (
      <div>

        <h1>
          This is where the apartment filter will go.
        </h1>
        <p>
          It demonstrates how a single drop target may accept multiple types, and how those types may be derived from props.
          It also demonstrates the handling of native files and URLs (try dropping them onto the last two Apartments).
        </p>
        <Container />
      </div>
    );
  }
}