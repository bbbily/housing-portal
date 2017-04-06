import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import "../../styles/newapartment.scss";

class CreateNewApartment extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }
    
    render() {
        return (
            <div className="new-apartment-container">
                <div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    <h3>Create New Apartment</h3>
                </div>
                <Panel className="apartment-panel" collapsible expanded={ this.state.open }>
                    <div>
                        <h4>Campus:</h4>
                        <select name="Campus">
                            <option value="Dallas">Dallas</option>
                            <option value="Provo">Provo</option>
                            <option value="SaltLake">Salt Lake</option>
                        </select>
                    </div>
                    <h4>Address:</h4>
                    <div>
                        <input type="text" placeholder="Street" />
                        <input type="text" placeholder="Apt. #" />
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="State" />
                        <input type="text" placeholder="Zip Code" />
                    </div>
                    <h4>Room:</h4>
                    <div>
                        <label>Beds:</label>
                        <input type="number" placeholder="#" />
                    </div>
                    <div>
                        <input type="radio" name="gender" value="male" /> Male
                        <input type="radio" name="gender" value="female" /> Female
                    </div><br /><br />
                    <div>
                        <button>New Room</button>
                        <button>Save</button>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default CreateNewApartment;