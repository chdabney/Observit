import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu as Menu2 } from "antd";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";

class Menu extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <div className="Menu">
        {this.props.isAuthenticated && (
          <Layout className="layout">
            <Layout.Header>
              <h1 className="main-header">Observit</h1>
              <Menu2 style={{ float: "right" }} theme="dark" mode="horizontal">
                <Menu2.Item className="home-button">
                  <Link to="/">Home</Link>
                </Menu2.Item>
                <Menu2.Item>
                  <Link
                    to={`/profile/${
                      JSON.parse(localStorage.getItem("login")).result.username
                    }`}
                  >
                    Profile
                  </Link>
                </Menu2.Item>
                <Menu2.Item>
                  <Link to="/" onClick={this.handleLogout}>
                    Logout
                  </Link>
                </Menu2.Item>
              </Menu2>
            </Layout.Header>
          </Layout>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
