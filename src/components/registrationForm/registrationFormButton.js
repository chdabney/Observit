import { Modal, Button } from "antd";
import React from "react";
import RegistrationForm from "./RegistrationForm";
import "./RegistrationFormButton.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    e.preventDefault();
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Register New User
        </Button>
        <Modal
          title="Registration Form"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
            <RegistrationForm />
          </div>
        </Modal>
      </>
    );
  }
}
export default App;
