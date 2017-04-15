import React, { Component } from 'react';
import "../../styles/aptstudentcard.scss";
export default class TestStudent extends Component {
  // constructor(props) {
  //   super(props) {
      
  //   }
  // }
  
  render() {
    return (
      <div className="aptcard-button">
        <img src="https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg" className="aptcard-image" />
          {this.props.name}, {this.props.age} <br />
          {this.props.gender}
      </div>
    );
  }
}
