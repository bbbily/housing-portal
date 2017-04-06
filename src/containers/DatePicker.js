import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css"
// import "../styles/containers/modal.css"

class DatePickerComponent extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {setDate: moment()}
  //   this.handleChange = this.handleChange.bind(this)
  // }

  // handleChange(date) {
  //   const formatedDate = date.format("MMM DD, YYYY HH:MM")
  //   this.setState({
  //     setDate: formatedDate
  //   })
  // }

  handleChange(e) {
    console.log(e._d)
    this.props.date(e._d)
  
  }

  render() {
    return (
      
      <div>
        <DatePicker
        
        onChange={this.handleChange.bind(this)}
        name={this.props.dateName}
        />
       </div>
    );
  }
}

export default DatePickerComponent;
