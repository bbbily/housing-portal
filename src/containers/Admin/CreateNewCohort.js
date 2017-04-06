import React, { Component } from "react";
import { Panel, Button } from "react-bootstrap";
import DatePickerComponent from "../DatePicker";
import { getCohorts, createCohort, deleteCohort, editCohort} from "../../actions/action_admin"
import { connect} from "react-redux"

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
                { cohort.first_name }
            </li>
        ))
        return (
            <div>
                <div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    <h3>New Cohort</h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div>
                        Enter Cohort Name <br />
                        <input type="text" placeholder="DM##" /><br /><br />
                        Start Date <DatePickerComponent />
                        End Date <DatePickerComponent />
                        <Button>Save</Button> <br /><br />
                    <ul>
                        {cohorts}
                    </ul>
                    </div>
                </Panel>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        all: state.corhort.all
    }
}

export default connect(mapStateToProps)(CreateNewCohort)
