import React, { Component } from "react";
import { Panel, Button, DropdownButton, MenuItem } from "react-bootstrap";
import "../../../styles/admin.scss";
import "../../../styles/roompanel.scss";
import ApartmentsList from "../../../containers/Apartments/index";

class RoomInfo extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }
    
    render() {
        return (
            <div className="walls">
                <div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    <h3>Room 1</h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div className="bedroom-container">
                        <div>
                           <RoomInfo />
                        </div>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default RoomInfo;