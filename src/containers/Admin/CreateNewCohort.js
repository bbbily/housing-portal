import React, { Component } from "react";
import { Panel, Button } from "react-bootstrap";
import DatePickerComponent from "../DatePicker";
import { getCohorts, createCohort, deleteCohort, editCohort} from "../../actions/action_admin"
import { connect} from "react-redux"
import "../../styles/newcohort.scss";
import moment from 'moment'
//import AdminForm from 'AdminForm'

class CreateNewCohort extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false,
            name: null,
            start_date: null,
            end_state: null,

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
        console.log(this.state)
        console.log("children", this.props.children)
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
                            Start Date <input type="date" name="start_date" onChange={this.handleInputChange} /> <br /><br />
                            End Date <input type="date" name="start_date" onChange={this.handleInputChange} /> <br /><br />
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
        all: state.cohort.all
    }
}

export default connect(mapStateToProps)(CreateNewCohort)
