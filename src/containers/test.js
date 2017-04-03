import React, {Component} from "react";
import { fetchApartments } from "../actions/action_apartments";
import { connect } from "react-redux";


class Test extends Component {
  getData() {
    this.props.dispatch(fetchApartments());
  }

  render() {
    return (
      <div>
        {/* <div>{ this.props.apartments }</div> */}
        <button onClick={this.getData.bind(this)}>test</button>;
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    apartments: state.apartments
  }
}

export default connect(mapStateToProps)(Test);
