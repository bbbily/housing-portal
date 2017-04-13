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
                    <h3>Room 203</h3>
                      <div className="bedroom-container">
                        <div>
                           <ApartmentsList />
                        </div>
                    </div>
                </div>
                

                
                {/*<div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    <h3>Room 2</h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div className="bedroom-container">
                        <div>
                           <ApartmentsList />
                        </div>
                    </div>
                </Panel>
                <div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    <h3>Room 3</h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div className="bedroom-container">
                        <div>
                           <ApartmentsList />
                        </div>
                    </div>
                </Panel>*/}
            </div>
        );
    }
}

export default RoomInfo;