import React, { Component } from "react"
import {Panel, Button, DropdownButton, MenuItem} from "react-bootstrap"
import {getStudent, createStudent} from "../../actions/action_admin"
import {connect} from "react-redux"
import "../../styles/CreateNewStudent.scss"

class CreateNewStudent extends Component {
  constructor(...args) {
    super(...args)

    this.state = {
      open: false,
      first_name: null,     //
      last_name: null,      //
      street_adress: null,  //
      city: null,           //
      state: null,          //
      country: null,        //
      post_code: null,      //
      phone: null,        //
      email: null,        //
      slack: null,        //
      dob: null,          //
      gender: null,       //
      cohort: null,       //
      car_info: null,
      arrive_date: null,    //
      leave_date: null,     //
      housing_elibility: null,
      deposit_paid: null,   //
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


  render() {
    return (
    <div className="new-student-container">
        <div onClick={ () => this.setState({ open: !this.state.open}) }>
          <h3>New Student</h3>
        </div>
        <Panel collapsible expanded={ this.state.open }>
          <div className="students-panel">
            <div class="row">
              <div class="student container">
                <ul>
                  <li><input type="text" placeholder="First" name="first_name" /></li>
                  <li><input type="text" placeholder="Last" name="last_name" /></li>
                  <li>DROP DOWN MENU</li>
                </ul>
                <ul>
                  <li>DOB: <input type="date" name="dob" /> </li>
                  <li>DROP DOWN GENDER</li>
                  <li>DROP DOWN COHORT</li>
                </ul>
                <ul>
                  <li><input type="text" placeholder="Email" name="email" /></li>
                  <li><input type="text" placeholder="Slack" name="slack" /></li>
                  <li><input type="text" placeholder="Phone" name="phone" /></li>
                </ul>
                  <ul>
                  <li>Arrives: <input type="date" name="arrive_date" /></li>
                  <li>Leaves: <input type="date" name="leave_date" /></li>
                </ul>
                <ul>
                  <li><input type="text" placeholder="address" name="street_address" /></li>
                </ul>
                <ul>
                  <li><input type="text" placeholder="city" name="city" /> </li>
                  <li><input type="text" placeholder="state" name="state" /> </li>
                  <li><input type="text" placeholder="country" name="country" /> </li>
                  <li><input type="text" placeholder="zip" name="post_code" /></li>
                </ul>
                <ul>
                  <li><input type="text" placeholder="car info" name="car_info" /></li>
                </ul>
                <ul>
                  <li><input type="text" placeholder="Notes" name="notes" /></li>
                  <li><input type="text" placeholder="Accommodations" name="accomodations" /></li>
                </ul>
                <ul>
                  <li><Button> Add Student  </Button></li>
                </ul>
              </div>
              </div>
          </div>
        </Panel>
    </div>

    )
  }

}

export default connect()(CreateNewStudent)