import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signup } from "../../actions";

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
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
          <fieldset>
            <label>Name</label>
            <Field name="name" type="text" component="input" />
          </fieldset>
          {this.renderError()}
          <button className="ui button">Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { errorMessage } }) => ({ errorMessage });

export default compose(
  connect(
    mapStateToProps,
    { signup }
  ),
  reduxForm({ form: "signup" })
)(Signup);
