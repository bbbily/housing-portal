import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class CreateNewAdmin extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div>
                <div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    <h3>New Admin</h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div>
                        <ul>
                        <li>User 1</li>
                        <li>User 2</li>
                        <li>User 3</li>
                        </ul>
                        <h4>New User:</h4>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button>Save</button>
                        <button>Cancel</button>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default CreateNewAdmin;