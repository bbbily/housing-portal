import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import "../../styles/newapartment.scss";
import { Field, reduxForm } from "redux-form";
import Room from "../../presentational/views/Room";
import Apartment from "./NewApartmentForm";
import NewAddressForm from "./NewAddressForm";

class CreateNewApartment extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false,
            rooms: [],
            showAddressForm: false,
            showApartmentForm: true,
            addressButton: true,
            apartmentButton: false,
            showRoomForm: false
        };
    }


    onSubmit(props) {
      props.apartment_id = this.props.apartment_id;
      console.log("adminform props", props)
      // this.props.dispatch(editAdmin(props))
    }

    showRoom() {
      console.log("showroom")
      this.setState({ showRoomForm: true })
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
                    { this.state.showApartmentForm && (
                      <div>
                        <button onClick={ () => this.setState({ showAddressForm: !this.state.showAddressForm, showApartmentForm: !this.state.showApartmentForm, addressButton: false, apartmentButton: true, showRoomForm: false }) }>Add Address</button>
                        <Apartment showRoom={ this.showRoom.bind(this) }/>
                      </div>
                    ) }
                    { this.state.showAddressForm && (
                      <div>
                      <button onClick={ () => this.setState({ showAddressForm: !this.state.showAddressForm, showApartmentForm: !this.state.showApartmentForm, addressButton: true, apartmentButton: false }) }>Add Apartment</button>
                      <NewAddressForm />
                    </div>)}
                    { this.state.showRoomForm && (<form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } >
                      { Rooms }
                      <button type="button" onClick={ () => this.setState({ rooms: [...Rooms, <Room beds={`room${Rooms.length}bed`} gender={`room${Rooms.length}gender`} key={Rooms.length} /> ]})}>Add New Room</button>
                      <button type="submit">Save</button>
                      <button type="button" onClick={ () => this.setState({ rooms: Rooms.slice(0, Rooms.length-1)})}>Delete Room</button>
                    </form>)}
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
