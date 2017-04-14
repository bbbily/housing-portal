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
              <ApartmentsList />
            </div>
        );
    }
}

export default RoomInfo;