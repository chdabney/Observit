import React from "react";
import DataService from "../../DataService";
import { Avatar, Button, Modal } from "antd";

import { UserOutlined, UploadOutlined } from "@ant-design/icons";

// const username = JSON.parse(localStorage.getItem("login")).result.username;
const client = new DataService();
class UploadPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      formData: null,
      imageURL: `https://socialapp-api.herokuapp.com/users/${client.getUserName()}/picture`,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  createFormData = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("picture", file);
    this.setState({ formData }, this.HandleUpload);
  };
  HandleUpload = () => {
    client.postUserPicture(this.state.formData).then((response) => {
      if (response.data.statusCode === 200) {
        this.updatePicture();
      }
    });
  };
  updatePicture() {
    const timeStamp = Date.now();
    const image = `https://socialapp-api.herokuapp.com/users/${client.getUserName()}/picture?t=${timeStamp}`;
    this.setState({ imageURL: image });
  }
  render() {
    return (
      <div className="FileUploader">
        <Avatar
          size={150}
          icon={<UserOutlined />}
          src={this.state.imageURL}
          style={{ marginBottom: 20 }}
        />
        <Button
          type="primary"
          onClick={this.showModal}
          style={{ backgroundColor: "#e6e6ea", color: "black" }}
        >
          Update Picture
        </Button>
        <Modal
          title="Update Profile Picture"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
            <Avatar
              size={150}
              icon={<UserOutlined />}
              src={this.state.imageURL}
            />
            <br />
            <input
              type="file"
              name="picture"
              accept="image/jpeg, image/png,image/gif"
              onChange={this.createFormData}
            />
          </div>
        </Modal>
      </div>
    );
  }
}
export default UploadPicture;
