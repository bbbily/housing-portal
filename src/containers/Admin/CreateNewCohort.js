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
            <div>
                <div className="dm-info-name">{ cohort.name }</div>
                <ul>
                    <li className="dm-info-starts-title"><b>Begins</b></li>
                    <li className="dm-info-ends-title"><b>Ends</b></li>
                </ul>
                <ul className="dm-info">
                    <li>{moment(cohort.start_date).format("DD-MM-YYYY")}</li>
                    <li>{moment(cohort.end_date).format("DD-MM-YYYY")}</li>
                </ul>
            </div>
            
        ))
   
        return (
            <div className="new-cohort-container">
                <div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    <h3>New Cohort</h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div className="cohort-panel">
                        <div className="dm-info-container col-sm-6">
                                {cohorts}
                        </div>
                        
                        <div className="cohort-container col-sm-6">
                            <ul className="cohort-name">
                            <li className="cohort-name-left">
                                <input type="text" 
                                    className="" 
                                    placeholder="DM##" 
                                    name="name" 
                                    onChange={this.handleInputChange}/> 
                            </li>
                            <li className="cohort-name-right">
                                <DropdownButton title="Campus">
                                <option value="1">Provo</option>
                                <option value="2">Salt Lake City</option>
                                <option value="3">Dallas</option>
                                </DropdownButton>
                            </li>
                            </ul>
                            <ul className="cohort-dates">
                            <li className="cohort-begin-date">
                                Begins 
                                <input type="date"
                                            name="start_date" 
                                            onChange={this.handleInputChange} />
                            </li>
                            <li className="cohort-end-date">
                                Ends 
                                <input type="date"
                                    name="end_date" 
                                    onChange={this.handleInputChange} />
                                </li>
                            </ul>
                            <div className="create-cohort">
                            <Button onClick={() => { this.sendCohort(this.state) }}>  Create Cohort  </Button>
                            </div>
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