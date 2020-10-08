import React from "react";
import Spinner from "react-spinkit";

import "./UpdateUser.css";
import DataService from "../../DataService";

import { Button, Popconfirm } from "antd";

class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      about: "",
      displayName: "",
    };
    this.client = new DataService();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    this.client.updateUser(this.state).then((result) => {
      console.log(result.data);
    });
  };

  handleDelete = (e) => {
    this.client
      .deleteUser()
      .then((payload) => {
        console.log(payload);
        localStorage.clear();
        window.location.reload();
        //window.location.reload() is only necessary due to the way redux is set up for this project. This is bad practice and should be avoided otherwise.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  confirm = () => {
    this.handleDelete();
  };

  render() {
    const text = "Are you sure to delete this task?";
    const { loading, error } = this.props;
    return (
      <div className="UpdateUserForm">
        <h2>Update userinfo</h2>
        <form id="update-form" onSubmit={this.handleUpdate}>
          <label htmlFor="username">Display Name</label>
          <input
            type="text"
            name="displayName"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <Button type="submit" disabled={loading} onClick={this.handleUpdate}>
            Update
          </Button>
        </form>
        <h2>Delete Account</h2>
        <Popconfirm
          placement="right"
          title="Are you sure you want to delete your account?"
          onConfirm={this.confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger className="deleteButton">
            Delete User
          </Button>
        </Popconfirm>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default UpdateUser;
