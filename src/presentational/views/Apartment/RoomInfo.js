import React, { Component } from "react";
import { Panel, Button, DropdownButton, MenuItem } from "react-bootstrap";
import "../../../styles/admin.scss";
import "../../../styles/roompanel.scss";

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
                    <div>
                        <div>
                            Room 1 - display beds
                        </div>
                        <div>
                            Room 2 - display beds
                        </div>
                        <div>
                            Room 3 - display beds
                        </div>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default RoomInfo;