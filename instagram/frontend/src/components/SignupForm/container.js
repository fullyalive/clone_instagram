import React, { Component } from "react";
import PropTypes from "prop-types";
import SignupForm from "./presenter";

class Container extends Component {
  state = {
    email: "",
    password: "",
    fullname: "",
    username: ""
  };
  static propTypes = {
    facebookLogin: PropTypes.func.isRequired
  };
  render() {
    const { email, password, fullname, username } = this.state;
    return (
      <SignupForm
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
        emailValue={email}
        passwordValue={password}
        fullnameValue={fullname}
        usernameValue={username}
      />
    );
  }
  _handleInputChange = event => {
    const {
      target: { value, name }
    } = event;
    this.setState({
      [name]: value
    });
  };
  _handleSubmit = event => {
    event.preventDefault();
  };
  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };
}

export default Container;
