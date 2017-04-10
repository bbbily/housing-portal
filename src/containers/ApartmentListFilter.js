import React, { Component } from "react";
import { Button, Panel } from "react-bootstrap";
import "../styles/filter.scss";

class ApartmentListFilter extends Component {
        constructor(props) {
        super(props);
        this.state = {
            open: false
        };
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
                            <select>
                                <option value="1">Provo</option>
                                <option value="2">Salt Lake City</option>
                                <option value="3">Dallas</option>
                            </select>
                        </div>
                        <div>
                            <input type="checkbox" name="age" value="age" /> 21+
                        </div>
                        <div>
                            <input type="checkbox" name="open" value="" /> Open
                        </div>
                        <div>
                            <input type="radio" name="gender" value="male" /> Male
                            <input type="radio" name="gender" value="female" /> Female 
                        </div>
                    </Panel>
                </div>
            </div>
        )
    }
}

export default ApartmentListFilter