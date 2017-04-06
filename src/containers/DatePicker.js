import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css"
// import "../styles/containers/modal.css"

class DatePickerComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {setDate: moment()}
    console.log(this.state)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      setDate: date
    })
    console.log(this.state.setDate)
    console.log(date.format("MMM DD, YYYY HH:MM"))
  }

  render() {
    return (
      <div>
        <DatePicker
        selected={this.state.setDate}
        onChange={this.handleChange}
        dateName={this.props.dateName}
        dateValue={this.state.setDate}
        />
       </div>
    );
  }
}

export default DatePickerComponent;
