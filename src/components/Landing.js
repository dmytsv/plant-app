import React, { Component } from "react";
import { connect } from "react-redux";
import "./Landing.scss";

class Landing extends Component {
  componentDidMount() {
    this.shouldNavigateAway();
  }

  componentDidUpdate() {
    this.shouldNavigateAway();
  }

  shouldNavigateAway() {
    if (this.props.auth) {
      this.props.history.push("/plants");
    }
  }
  render() {
    return (
      <div id="landing" className="ui container">
        <div className="ui placeholder segment">
          <h3 className="ui header">Please sign up or sign in</h3>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({ auth: state.auth.authenticated });
export default connect(mapStateToProps)(Landing);
