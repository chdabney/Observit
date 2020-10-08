import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import DataService from "../../DataService";
import "./RegistrationForm.css";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      displayName: "",
      password: "",
    };
    this.client = new DataService();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegistration = (e) => {
    let userData = {
      username: this.state.username,
      password: this.state.password,
    };
    this.client.registerUser(this.state).then((result) => {
      console.log(result.data);

      this.props.login(userData);
    });
  };

  render() {
    const { loading, error } = this.props;

    return (
      <div className="RegistrationForm">
        <form id="registration-form" onSubmit={this.handleRegistration}>
          <br />
          <input
            type="text"
            name="username"
            placeholder="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <br />

          <br />
          <input
            type="text"
            name="displayName"
            placeholder="displayName"
            required
            onChange={this.handleChange}
          />
          <br />

          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button type="submit" disabled={loading}>
            Register
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(RegistrationForm);
