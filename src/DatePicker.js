import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import moment from 'moment'

class DatePickerComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {stateDate: moment()}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  render() {
    return (
      <div>
        <DatePicker
          selected={this.state.startDate}
          selectsStart  startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeStart} />
          <DatePicker
          selected={this.state.endDate}
          selectsEnd  startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeEnd} />
      </div>
    );
  }
}

export default DatePickerComponent;