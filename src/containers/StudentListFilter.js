import React, { Component } from "react";
import { Button, Panel } from "react-bootstrap";
import "../styles/filter.scss";

class StudentListFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    } 

    handleChecked(type, checked, e) {
      if (type === "age")
        checked ? this.props.handleChecked(type, 21) : this.props.handleChecked(type, 0);
      else
        this.props.handleChecked(type, checked);
    }

    handleSelect(type, selected, e) {
        
    }

    render() {
        return (
            <div className="filter-container">
                <ul>
                    <li>Campus <br />
                        <select>
                            <option value="1">Provo</option>
                            <option value="2">Salt Lake City</option>
                            <option value="3">Dallas</option>
                        </select></li>     
                    
                    <li>Cohort <br />
                        <select>
                            <option value="1">DM1</option>
                            <option value="2">DM2</option>
                            <option value="3">DM3</option>
                        </select></li>
                    
                <li>
                        <input type="checkbox" name="housing" value={ this.props.housing } onChange={ this.handleChecked.bind(this, "housing", !this.props.housing) } /> Need Housing
                    </li>
                    <li>
                        <input type="checkbox" name="deposit" value={ this.props.deposit_paid} onChange={ this.handleChecked.bind(this, "deposit_paid", !this.props.deposit_paid) } /> Deposit Paid
                    </li>
                    <li>
                        <input type="checkbox" name="age" value={ this.props.age } onChange={ this.handleChecked.bind(this, "age", !this.props.age) } /> 21+
                    </li>
                    <li>
                        <input type="checkbox" name="accomodations" value={ this.props.accomodations } onChange={ this.handleChecked.bind(this, "accomodations") } /> Accomodations
                    </li>
                    <li><input type="radio" name="gender" value="male" /> Male</li>
                    <li><input type="radio" name="gender" value="female" /> Female</li>
                 </ul>

            </div>
    
        )
    }
}

export default StudentListFilter
