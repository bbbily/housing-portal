import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css"
// import "../styles/containers/modal.css"

class DatePickerComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {setDate: moment()}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    const formatedDate = date.format("MMM DD, YYYY HH:MM")
    this.setState({
      setDate: date
    })
  }

  render() {
    return (
      <div>
        <DatePicker
        selected={this.state.setDate}
        onChange={this.handleChange}
        name={this.props.dateName}
        value={this.props.setDate}
        />
       </div>
    );
  }
}

export default DatePickerComponent;
