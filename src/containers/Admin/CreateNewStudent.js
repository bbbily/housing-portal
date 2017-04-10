import React, { Component } from "react"
import { Panel, Button, DropdownButton, MenuItem } from "react-bootstrap";
import {getStudent, createStudent, getCohorts, getCampuses} from "../../actions/action_admin"
import {connect} from "react-redux"
import "../../styles/CreateNewStudent.scss"
import moment from 'moment'
import ListCampuses from "../../presentational/ListCampuses"




class CreateNewStudent extends Component {
  constructor(...args) {
    super(...args)

    this.state = {
      open: false,
      first_name: null,     //
      last_name: null,      //
      street_address: null,  //
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
    this.clearData = this.clearData.bind(this)
  }
  
  clearData() {
    this.refs.first_name.value="",
    this.refs.last_name.value="",
    this.refs.dob.value="",
    this.refs.arrive_date.value="",
    this.refs.leave_date.value="",
    this.refs.email.value="",
    this.refs.slack.value="",
    this.refs.phone.value="",
    this.refs.street_address.value="",
    this.refs.city.value="",
    this.refs.state.value="",
    this.refs.country.value="",
    this.refs.post_code.value="",
    this.setState({
      gender: null,
      campus: null,
      cohort: null,
      deposit: null,
    })
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
        this.props.dispatch(getCohorts())
        this.props.dispatch(getCampuses()) 
    }


  render() {
        const cohorts = this.props.all.map( (cohort, i) => (
          <MenuItem id={cohort.id} key={i} eventKey={cohort.name} 
            onSelect={ () => {
              let start_date = moment(cohort.start_date).format("YYYY-MM-DD")
              let end_date = moment(cohort.end_date).format("YYYY-MM-DD")
              this.setState({
              arrive_date: start_date,
              leave_date: end_date
            })}}
          > {cohort.name} </MenuItem>
        ))
        const campuses = this.props.campuses.map((campus,i) => (
          <MenuItem id={campus.id} key={campus.id} eventKey={campus.city}> {campus.city} </MenuItem>
        ))
    return (
    <div className="new-student-container">
        <div onClick={ () => this.setState({ open: !this.state.open}) }>
          <h3>New Student</h3>
        </div>
        <Panel collapsible expanded={ this.state.open }>
        <form ref="new_student_form">
          <div className="students-panel">
            <div className="row">
                <div className="col-sm-6">
                  <h1>General</h1>
                <ul className="student-ul">
              
                  <li><input type="text" placeholder="First" name="first_name" ref="first_name" className="student-40" onChange={this.handleInputChange}/></li>
                  <li><input type="text" placeholder="Last" name="last_name" ref="last_name" className="student-40" onChange={this.handleInputChange}/></li>
                  <li>DOB <br/> <input type="date" name="dob" ref="dob" className="student-20" onChange={this.handleInputChange}/> </li>
                  <li>
                    <div className="item-container">
                      <div className="item-left">                    
                        <DropdownButton title="Gender" onSelect={ evt => { this.setState({ gender: evt }) }}  className="student-20">
                          <MenuItem eventKey="M">Male</MenuItem>
                          <MenuItem eventKey="F">Female</MenuItem>
                        </DropdownButton>
                      </div>
                        <div className="item-right">{this.state.gender}</div>
                    </div> 
                  </li>
                 <li> 
                    <div className="item-container">
                      <div className="item-left">
                    <DropdownButton title="Campus" onSelect={ evt => this.setState({ campus: evt }) } className="student-20">
                      {campuses}
                    </DropdownButton>
                      </div>
                        <div className="item-right">                    
                    {this.state.campus}</div>
                    </div>
                  </li>
                  <li> 
                    <div className="item-container">
                      <div className="item-left"> 
                        <DropdownButton title="Cohort" onSelect={ evt => {this.setState({cohort: evt }) }}  className="student-20">
                          {cohorts}
                        </DropdownButton>
                      </div>
                        <div className="item-right">{this.state.cohort}</div>
                    </div>
                </li>
                  <li>
                    <div className="item-container">
                      <div className="item-left">
                        <DropdownButton title="Deposit Paid" onSelect={ evt => { this.setState({ deposit_paid : evt }) }}  className="student-20">
                          <MenuItem eventKey="Yes">Yes</MenuItem>
                          <MenuItem eventKey="No">No</MenuItem>
                        </DropdownButton>
                      </div>
                        <div className="item-right">{this.state.deposit_paid}</div>
                    </div>
                  </li>
                  <li>Arrives:<input type="date" name="arrive_date" ref="arrive_date" className="student-20" 
                                          value={this.state.arrive_date}
                                          onChange={ evt => {this.setState({ arrive_date: evt.target.value})}}
                                          /></li>
                  <li>Leaves: <input type="date" name="leave_date" ref="leave_date" className="student-20" 
                                          value={this.state.leave_date}
                                          onChange={ evt => { this.setState({ leave_date: evt.target.value})}}
                                          /></li>
                </ul>
               </div>

               <div className="col-sm-6">
               
                <h1>Contact</h1>
                <ul className="student-ul">
                  <li><input type="text" placeholder="Email" name="email" ref="email" className="student-40" onChange={this.handleInputChange}/></li>
                  <li><input type="text" placeholder="Slack" name="slack" ref="slack" className="student-40" onChange={this.handleInputChange}/></li>
                  <li><input type="text" placeholder="Phone" name="phone" ref="phone" className="student-40" onChange={this.handleInputChange}/></li>
                  <li><input type="text" placeholder="address" name="street_address" ref="street_address" className="student-40" onChange={this.handleInputChange}/></li>
                  <li><input type="text" placeholder="city" name="city" ref="city" className="student-30" onChange={this.handleInputChange}/>
                      <input type="text" placeholder="state" name="state" ref="state" className="student-10" onChange={this.handleInputChange}/> </li>
                  <li><input type="text" placeholder="country" name="country" ref="country" className="student-30" onChange={this.handleInputChange}/>
                      <input type="text" placeholder="zip" name="post_code" ref="post_code" className="student-10" onChange={this.handleInputChange}/></li>
                  <ul className="student-ul">
                    <li><Button onClick={ () => 
                      { this.props.dispatch(createStudent(this.state))
                        this.clearData()
                        this.setState({open: false})
                        alert(this.state.first_name + this.state.last_name + " added.")
                      }}>     Add Student     </Button></li>
                    <li><Button onClick={ () =>
                      { this.clearData() }}>Clear</Button>
                    </li>

                  </ul>
                
                </ul> 

              </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                <h1>Misc</h1>
                <ul className="student-ul">
                  <li><input type="text" placeholder="Notes" name="notes"  className="student-80" onChange={this.handleInputChange}/></li>
                  <li><input type="text" placeholder="Accommodations" name="accomodations"  className="student-80" onChange={this.handleInputChange}/></li>
                </ul>
                <ul className="student-ul">
                  <li><input type="text" placeholder="car info" name="car_info" className="student-80" onChange={this.handleInputChange}/></li>
                </ul>
                <ul className="student-ul">
                  <li><Button onClick={ () => {this.props.dispatch(createStudent(this.state))}}>     Add Student     </Button></li>
                </ul>
                </div>
              </div>
          </div>
        </form>
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