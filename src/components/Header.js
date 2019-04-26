import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.scss";

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <>
          <Link className="item" to="/signout">
            Sign Out
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link className="item" to="/signup">
            Sign Up
          </Link>
          <Link className="item" to="/signin">
            Sign In
          </Link>
        </>
      );
    }
  }
  render() {
    return (
      <div id="header" className="ui secondary menu">
        <div className=" plant-list">
          <Link className="item " to="/plants">
            Big Plant
          </Link>
          <Link className="item" to="/about">
            About
          </Link>
        </div>
        {this.renderLinks()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ authenticated: state.auth.authenticated });

export default connect(mapStateToProps)(Header);
