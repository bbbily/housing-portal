import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { reduxForm, Field } from "redux-form";

class ApartmentModal extends Component {
  onSubmit(props) {
    console.log(props)
  }

  render() {

    return (
      <Modal >
        <Modal.Header >
          <Modal.Title>

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
            <BuildingDropdown name={ building_id } />
            <Field name="apartment_number" component="input" type="text" placeholder="Apt.#" />
            <Field name="preferred_gender" component="input" type="radio" value="Male" /> Male
            <Field name="preferred_gender" component="input" type="radio" value="Female" /> Female
            <Field name="over_21" component="input" type="checkbox" /> 21
            { this.props.Rooms }
            <button type="submit" >Save</button>
            <button type="button" >add room</button>
            <button type="button" >delete room</button>
          </form>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    )
  }
}

export default reduxForm({
  return { form: "apartmentModalForm" }
})(ApartmentModal)
