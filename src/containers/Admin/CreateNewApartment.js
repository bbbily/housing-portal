import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import "../../styles/newapartment.scss";
import { Field, reduxForm } from "redux-form";
import Room from "../../presentational/views/Room";
import Apartment from "./CreateApartmentForm";

class CreateNewApartment extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false,
            rooms: []
        };
    }


    onSubmit(props) {
      props.apartment_id = this.props.apartment_id;
      console.log("adminform props", props)
      // this.props.dispatch(editAdmin(props))
    }


    render() {
        const Rooms = this.state.rooms;
        const { handleSubmit } = this.props;
        return (
            <div className="new-apartment-container">
                <div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    <h3>Create New Apartment</h3>
                </div>
                <Panel className="apartment-panel" collapsible expanded={ this.state.open }>
                    <Apartment />
                    <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } >
                      { Rooms }
                      <button type="button" onClick={ () => this.setState({ rooms: [...Rooms, <Room beds={`room${Rooms.length}bed`} gender={`room${Rooms.length}gender`} key={Rooms.length} /> ]})}>Add New Room</button>
                      <button type="submit">Save</button>
                      <button type="button" onClick={ () => this.setState({ rooms: Rooms.slice(0, Rooms.length-1)})}>Delete Room</button>
                    </form>
                </Panel>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return { apartment_id: state.apartments.apartment_id }
}

export default reduxForm({
  form: "roomForm"
})(CreateNewApartment);
