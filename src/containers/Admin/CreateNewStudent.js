import React, { Component } from "react"
import { Panel, Button, DropdownButton, MenuItem } from "react-bootstrap";
import {getStudent, createStudent} from "../../actions/action_admin"
import {connect} from "react-redux"
import "../../styles/CreateNewStudent.scss"
import { getCohorts, getCampuses} from "../../actions/action_admin"


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

  componentWillMount() {
        this.props.dispatch(getCohorts())
        this.props.dispatch(getCampuses()) 
    }

  render() {
        const campuses = this.props.campuses.map((campus,i) => (
          <MenuItem id={campus.id} key={i}> {campus.city} </MenuItem>
        ))
    return (
    <div className="new-student-container">
        <div onClick={ () => this.setState({ open: !this.state.open}) }>
          <h3>New Student</h3>
        </div>
        <Panel collapsible expanded={ this.state.open }>
          <div className="students-panel">
            <div className="row">
              <div className="student container">
              
                <div className="col-sm-12">
                <ul className="student-ul">
                  <li><input type="text" placeholder="First" name="first_name"/></li>
                  <li><input type="text" placeholder="Last" name="last_name" /></li>
                  <li>
                    <DropdownButton title="Paid">
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </DropdownButton>
                  </li>
                </ul>
                <ul className="student-ul">
                  <li>DOB: <br/> <input type="date" name="dob" /> </li>
                  <li>
                    <DropdownButton title="Gender">
                      <MenuItem value="M">Male</MenuItem>
                      <MenuItem value="F">Female</MenuItem>
                    </DropdownButton>
                  </li>
                  <li>
                    <DropdownButton title="Cohort">
                      <MenuItem value="1">DM 22</MenuItem>
                      <MenuItem value="2">DM 23</MenuItem>
                    </DropdownButton>
                  </li>
                 <li>
                    <DropdownButton title="Campus">
                      {campuses}
                    </DropdownButton>
                  </li>
                </ul>
                <ul className="student-ul">
                  <li><input type="text" placeholder="Email" name="email" /></li>
                  <li><input type="text" placeholder="Slack" name="slack" /></li>
                  <li><input type="text" placeholder="Phone" name="phone" /></li>
                </ul>
                  <ul className="student-ul">
                  <li>Arrives: <br/><input type="date" name="arrive_date" /></li>
                  <li>Leaves: <br/><input type="date" name="leave_date" /></li>
                </ul>
                <ul className="student-ul">
                  <li><input type="text" placeholder="address" name="street_address" /></li>
                  <li><input type="text" placeholder="city" name="city" /> </li>
                </ul>
                <ul className="student-ul">
                  <li><input type="text" placeholder="state" name="state" /> </li>
                  <li><input type="text" placeholder="country" name="country" /> </li>
                  <li><input type="text" placeholder="zip" name="post_code" /></li>
                </ul>
                <ul className="student-ul">
                  <li><input type="text" placeholder="car info" name="car_info" /></li>
                </ul>
                <ul className="student-ul">
                  <li><input type="text" placeholder="Notes" name="notes" /></li>
                  <li><input type="text" placeholder="Accommodations" name="accomodations" /></li>
                </ul>
                <ul className="student-ul">
                  <li><Button> Add Student  </Button></li>
                </ul>
                </div>
              </div>
              </div>
          </div>
        </Panel>
    </div>

    )
  }

}
function mapStateToProps(state) {
  return {
    all: state.cohort.all,
    campuses: state.cohort.campuses
  }
}
export default connect(mapStateToProps)(CreateNewStudent)