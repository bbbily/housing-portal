import React, { Component } from "react";
import { Panel, Button } from "react-bootstrap";
import DatePickerComponent from "../DatePicker";
import { getCohorts, createCohort, deleteCohort, editCohort} from "../../actions/action_admin"
import { connect} from "react-redux"
import "../../styles/newcohort.scss";
import moment from 'moment'

class CreateNewCohort extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false,
        };

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
    console.log(this.props.all)
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
                            Cohort Name <br />
                            <input type="text" placeholder="DM##" /><br /><br />
                            Start Date <DatePickerComponent dateName="startDate"/>
                            End Date <DatePickerComponent dateName="endDate"/>
                            <Button>Save</Button> <br /><br />
                        </div>
                    </div>
                </Panel>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        all: state.admin.all
    }
}

export default connect(mapStateToProps)(CreateNewCohort)