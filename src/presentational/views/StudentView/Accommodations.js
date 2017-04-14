import React, { Component } from "react";
import { Panel, Button } from "react-bootstrap";
import "../../../styles/accommodations.scss";

class Accommodations extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div className="accommodations-container">
                <div onClick={ () => this.setState({ open: !this.state.open }) } >
                    <h3>
                        Accommodations
                    </h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div className="accommodations-panel">
                        <form>
                            <h1>Need Accommodations?</h1>
                            <textarea type="text" placeholder="Describe them here"></textarea>
                            <Button>Submit</Button>
                            {/* Button : onClick={ () => this.props.dispatch(addAccommodations??(this.state)) } */}
                        </form>
                    </div>
                </Panel>
            </div>
        )
    }
}

export default Accommodations