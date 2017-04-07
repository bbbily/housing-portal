import React, { Component } from "react"
import {Panel, Button, DropdownButton, MenuItem} from "react-bootstrap"
import {getStudent, createStudent} from "../../actions/action_admin"
import {connect} from "react-redux"
//import "../../styles/CreateNewStudent.scss"

class CreateNewStudent extends Component {
  constructor(...args) {
    super(...args)

    this.state = {
      open: false,
      first_name: null,
      last_name: null,
      street_adress: null,
      city: null,
      state: null,
      country: null,
      post_code: null,
      phone: null,
      email: null,
      slack: null,
      age: null,
      gender: null,
      cohort: null,
      car_info: null,
      arrive_date: null,
      leave_date: null,
      housing_elibility: null,
      deposit_paid: null,
      accomodations: null,
      notes: null,
      room_id: null,
    }

    this.handleInputChange = this.handleInputChange.bind(this)

  }

  sendStudent(studentObj) {
    this.props.dispatch(createStudent(studentObj))
    console.log(studentObj)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name] : value
    })
  }

  componentDidMount() {
    this.props.dispatch(getStudent())
  }

  render() {
    console.log(this.props)
    return (
    <div className="new-student-container">
        <div onClick={ () => this.setState({ open: !this.state.open}) }>
          <h3>New Student</h3>
        </div>
        <Panel collapsible expanded={ this.state.open }>
          <div className="students-panel">
            This is where the form goes!
          </div>
        </Panel>
    </div>

    )
  }

}

export default connect()(CreateNewStudent)