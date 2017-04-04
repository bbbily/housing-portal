import React, { Component } from 'react';

class ApartmentList extends Component {
        constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    render() {
        return (
            <div>
                <h1>Apartment List</h1>
                <div>
                    <button onClick={ () => this.setState({ open: !this.state.open })}>
                        Filter Results
                    </button>
                    <panel collapsible expanded={ this.state.open }>
                        <div>
                            Campus - drop down
                        </div>
                        <div>
                            Address - drop down
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
                    </panel>
                </div>
                <div>
                    {/* collapsible cards */}
                    <h1>room number</h1>
                </div>
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
        )
    }
}

export default ApartmentList