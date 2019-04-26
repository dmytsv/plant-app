import React, { Component } from "react";
import { connect } from "react-redux";
import { signout } from "../../actions";
import requireAuth from "../hoc/requireAuth";

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
    this.props.history.push("/");
  }
  render() {
    return <div>You're logged out</div>;
  }
}
export default connect(
  null,
  { signout }
)(requireAuth(Signout));
