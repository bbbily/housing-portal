import React, { Component } from "react";
import { Panel, Button } from "react-bootstrap";
import DatePickerComponent from "../DatePicker";
import { getCohorts, createCohort, deleteCohort, editCohort} from "../../actions/action_admin"
import { connect} from "react-redux"
import moment from 'moment'
//import AdminForm from 'AdminForm'

class CreateNewCohort extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false,
            cohortName: null,
            startDate: null,
            endDate: null,
        };

        this.handleInputChange = this.handleInputChange.bind(this)

    }

    handleInputChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    onSubmit(props) {
        console.log(props.name)
    }

    componentWillMount() {
        this.props.dispatch(getCohorts())
    }

    render() {
        
        const cohorts = this.props.all.map( (cohort, i) => (
            <li key={i}>
                <b>{ cohort.name }</b>:&nbsp;&nbsp;<b>From:</b> {moment(cohort.start_date).format("DD-MM-YYYY")}&nbsp;
                                        <b>To:</b> {moment(cohort.start_date).format("DD-MM-YYYY")}           
            </li>
        ))
   
        return (
            <div>
                <div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    <h3>New Cohort</h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <form >
                        <div>
                            Enter Cohort Name <br />
                            <input type="text" placeholder="DM##" name="cohortName" onChange={this.handleInputChange}/><br /><br />
                            Start Date <DatePickerComponent name="startDate" onChange={this.handleInputChange}/>
                            End Date <DatePickerComponent name="endDate" onChange={this.handleInputChange} />
                            <Button onClick={ this.handleInputChange }>  Create  </Button> <br /><br />
                        <ul>
                            {cohorts}
                        </ul>
                        </div>
                    </form>
                </Panel>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        all: state.cohort.all
    }
}

export default connect(mapStateToProps)(CreateNewCohort)