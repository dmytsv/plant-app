import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signin } from "../../actions";

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push("/plants");
    });
  };
  renderError() {
    if (this.props.errorMessage) {
      return (
        <div className="ui negative message">{this.props.errorMessage}</div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="ui container">
        <form className="ui form" onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset className="field">
            <label>Email</label>
            <Field
              name="email"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset className="field">
            <label>Password</label>
            <Field
              name="password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          {this.renderError()}
          <button className="ui button">Sign In</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { errorMessage } }) => ({ errorMessage });

export default compose(
  connect(
    mapStateToProps,
    { signin }
  ),
  reduxForm({ form: "signin" })
)(Signin);
