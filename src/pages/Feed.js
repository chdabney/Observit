import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "../components/messageList/MessageList";
import TopComments from "../components/topComments/TopComments";
import { BackTop, Layout } from "antd";
import yee from "../assets/yee.jpg";
import "./Feed.css";

const style = {
  height: 50,
  width: 150,
  marginRight: "40px",
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#204d55",
  color: "#e6e6ea",
  textAlign: "center",
  fontSize: 14,
};

const { Content, Footer, Sider } = Layout;

class Feed extends React.Component {
  render() {
    return (
      <div>
        <Menu isAuthenticated={this.props.isAuthenticated} />

        <BackTop>
          <div style={style}>Back to top</div>
        </BackTop>
        <Layout>
          <div className="wrapper">
            <Content
              style={{
                padding: "0 50px",
                background: "#e6e6ea",
                width: "100px",
              }}
            >
              <h1>Top Comments!</h1>
              <TopComments />
              <div className="about-us">
                <h3>Our Mission statement:</h3>
                <p>
                  Boom boom acka-lacka lacka boom Boom boom acka-lacka boom boom
                  It was a night like this forty million years ago I lit a
                  cigarette, picked up a monkey skull to go The sun was spitting
                  fire, the sky was blue as ice I felt a little tired, so I
                  watched Miami Vice And walked the dinosaur, I walked the
                  dinosaur Open the door, get on the floor Everybody walk the
                  dinosaur Open the door, get on the floor Everybody walk the
                  dinosaur Open the door, get on the floor Everybody walk the
                  dinosaur Open the door, get on the floor Everybody walk the
                  dinosaur
                </p>
              </div>
              <div className="yee">
                <img src={yee} alt="yee" />
              </div>
            </Content>

            <Content
              style={{
                padding: "0 50px",
                background: "#e6e6ea",
                width: "800px",
              }}
            >
              <br />
              <MessageList />
            </Content>
          </div>
        </Layout>

        <Footer
          style={{
            textAlign: "center",
            background: "#0a3051",
            color: "#e6e6ea",
          }}
        >
          Observit ©2020 Created by Team 404
        </Footer>
      </div>
    );
  }
}

export default userIsAuthenticated(Feed);
