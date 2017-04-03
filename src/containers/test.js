import React, {Component} from "react";
import { fetchApartments } from "../actions/action_apartments";
import { connect } from "react-redux";


class Test extends Component {
  getData() {
    this.props.dispatch(fetchApartments());
  }

  render() {
    console.log(this.props.apartments)
    if (this.props.apartments[0])
    var birth_year = this.props.apartments[0].birth_year;
    return (
      <div>
        <div><button>{ birth_year }</button></div>
        <button onClick={this.getData.bind(this)}>test</button>;
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    apartments: state.apartments.apartments
  }
}

export default connect(mapStateToProps)(Test);
