import React, { Component } from "react";
import { Button, Panel } from "react-bootstrap";
import "../styles/filter.scss";
import CampusSelector from "./CampusSelector.js";

class StudentListFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleChecked(type, checked, e) {

      console.log("type: ", type, "checked", checked,"e", e);
      if (type === "age")
        checked ? this.props.handleChecked(type, 21) : this.props.handleChecked(type, 0);
        // else if (type === "accomodations") { 
        //     console.log(this.props)
        //     e.target.checked ? this.props.handleChecked(type, this.props.accomodations) : this.props.handleChecked(type, "");
        // }

            
        // else if (type === "gender")

        else 
        this.props.handleChecked(type, checked);
         
      
    }

    handleChange(e) {
        console.log(e.target.name, e.target.value);
        this.props.handleChecked(e.target.name, e.target.value);
    }

    handleSelect(type, selected, e) {

    }

    render() {
        return (
            <div className="filter-container">
                <ul>
                    <li>Campus <br />
                        <CampusSelector handleChange = {this.handleChange.bind(this)} ></CampusSelector>
                    </li>     
                    

                    <li>Cohort <br />
                        <select name="cohort_id" onChange={ this.handleChange.bind(this) }>
                            <option value="1">DM1</option>
                            <option value="2">DM2</option>
                            <option value="3">DM3</option>
                            <option value="" selected>All</option>
                        </select></li>

                <li>
                        <input type="checkbox" name="housing_eligibility" value={ this.props.housing } onChange={ this.handleChecked.bind(this, "housing", !this.props.housing) } /> Need Housing
                    </li>
                    <li>
                        <input type="checkbox" name="deposit" value={ this.props.deposit_paid} onChange={ this.handleChecked.bind(this, "deposit_paid", !this.props.deposit_paid) } /> Deposit Paid
                    </li>
                    <li>
                        <input type="checkbox" name="age" value={ this.props.age } onChange={ this.handleChecked.bind(this, "age", !this.props.age) } /> 21+
                    </li>
                    <li>
                        <input type="checkbox" name="accomodations" value={ this.props.accomodations } onChange={ this.handleChecked.bind(this, "accomodations", !this.props.accomodations) } /> Accomodations
                    </li>
                    <li>Gender <br />
                        <select name="gender" onChange={ this.handleChange.bind(this) }>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="" selected>Any</option>
                        </select></li>
                 </ul>

            </div>

        )
    }
}

export default StudentListFilter
