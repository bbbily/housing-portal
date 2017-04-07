import React, { Component } from "react";
import { Panel, Button, DropdownButton, MenuItem } from "react-bootstrap";
import DatePickerComponent from "../DatePicker";
import { getCohorts, createCohort, deleteCohort, editCohort, getCampuses} from "../../actions/action_admin"
import { connect} from "react-redux"
import "../../styles/newcohort.scss";
import moment from 'moment'


class CreateNewCohort extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false,
            name: null,
            start_date: null,
            end_date: null,
            
        };

        this.handleInputChange = this.handleInputChange.bind(this)
        this.sendCohort = this.sendCohort.bind(this)
    }

    sendCohort(cohortObj) {
        this.props.dispatch(createCohort(cohortObj))
        console.log(cohortObj)
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


    date(field, e) {
        this.setState( {
            [field]: e
        })
    }


    render() {
        console.log(this.props)
        const campuses = this.props.campuses.map((campus,i) => (
            <MenuItem id={campus.id} key={i}> {campus.city} </MenuItem>
        ))

        const cohorts = this.props.all.map( (cohort, i) => (
            <li key={i}>
                <b>{ cohort.name }</b>:&nbsp;&nbsp;<b>From:</b> {moment(cohort.start_date).format("DD-MM-YYYY")}&nbsp;
                                        <b>To:</b> {moment(cohort.end_date).format("DD-MM-YYYY")}           
            </li>
        ))
   
        return (
            <div className="new-cohort-container">
                <div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    <h3>New Cohort</h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div className="cohort-panel">
                        <div>
                            <ul>
                                {cohorts}
                            </ul>
                        </div>
                        <div>
                        Enter Cohort Name <br />
                            <input type="text" placeholder="DM##" name="name" onChange={this.handleInputChange}/><br /><br />
                            Starts <input type="date" name="start_date" onChange={this.handleInputChange} /> <br /><br />
                            Ends <input type="date" name="end_date" onChange={this.handleInputChange} /> <br /><br />
                             <DropdownButton title="Campus">
                                    {campuses}
                                    </DropdownButton>
                            <Button onClick={() => { this.sendCohort(this.state) }}>  Create  </Button> <br /><br />
                        </div>
                    </div>
                </Panel>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        all: state.cohort.all,
        campuses: state.cohort.campuses
    }
}

export default connect(mapStateToProps)(CreateNewCohort)