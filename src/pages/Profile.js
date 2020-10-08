import React from "react";
import Menu from "../components/menu/Menu";
import UpdateUser from "../components/updateUser/UpdateUser";
import UserMessages from "../components/userMessages/UserMessages";

import UpdateAbout from "../components/updateAbout/UpdateAbout";
import { userIsAuthenticated } from "../redux/HOCs";
import UploadPicture from "../components/getUserPicture/GetUserPicture";
import { Layout } from "antd";

const { Footer, Sider, Content } = Layout;

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <Layout>
          <Sider style={{ padding: "15px", background: "#204d55" }}>
            <UploadPicture />
            <UpdateUser />
          </Sider>
          <Layout style={{ background: "#94b1af" }}>
            <Content
              style={{
                height: "100vh",
                margin: "0 auto",
              }}
            >
              <UpdateAbout />
              <UserMessages />
            </Content>
          </Layout>
        </Layout>
        <Footer
          style={{
            background: "#0a3051",
            color: "#e6e6ea",
            textAlign: "center",
          }}
        >
          {" "}
          Observit ©2020 Created by Team 404
        </Footer>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
