import React, { Component } from "react";
import { Panel, Button, DropdownButton, MenuItem } from "react-bootstrap";
// import "../../../styles/admin.scss";
import "../../../styles/roompanel.scss";
import ApartmentsList from "../../../containers/Apartments/index";
//import Container from '../../../containers/Multiple Targets/Container'

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
              {/*<Container />*/}
              <ApartmentsList />
            </div>
        );
    }
}

export default RoomInfo;