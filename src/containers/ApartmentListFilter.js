import React, { Component } from "react";
import { Button, Panel } from "react-bootstrap";
import "../styles/filter.scss";
import CampusSelector from "./CampusSelector";

class ApartmentListFilter extends Component {
        constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleChange(change, e) {
      console.log("type", e.target.name, e.target.value);
      if (e.target.name === "preferred_gender" || e.target.name === "campus_id")
        this.props.handleChange(e.target.name, e.target.value)
      else
        this.props.handleChange(e.target.name, change)
    }

    render() {
        return (
            <div className="filter-container">
                <div>
                    <Button onClick={ () => this.setState({ open: !this.state.open })}>
                        Filter Results
                    </Button>
                    <Panel collapsible expanded={ this.state.open }>
                        <div>
                            Campus
                            <CampusSelector handleChange={ this.handleChange.bind(this, this.props.campus_id)} />
                        </div>
                        <div>
                            <input type="checkbox" name="over_21" value={ this.props.over_21 } onChange={ this.handleChange.bind(this, !this.props.over_21) } /> 21+
                        </div>
                        <div>
                            <input type="checkbox" name="open" value={ this.props.open } onChange={ this.handleChange.bind(this, !this.props.open)} /> Open
                        </div>
                        <div>
                          <select name="preferred_gender" defaultValue="" onChange={ this.handleChange.bind(this, this.props.preferred_gender) }>
                              <option value="M">Male</option>
                              <option value="F">Female</option>
                              <option value="">Any</option>
                          </select>
                        </div>
                    </Panel>
                </div>
            </div>
        )
    }
}

export default ApartmentListFilter
