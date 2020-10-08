import React from "react";
import Message from "../message/Message";
import DataService from "../../DataService";
import PostMessage from "../postMessage/PostMessage";
import "./MessageList.css";
class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      text: "",
    };
    this.client = new DataService();
  }

  componentDidMount() {
    // As soon as the app loads we get our message list and set our state to that array of objects.
    this.client
      .getMessageList()
      .then((response) => this.setState({ messages: response.data.messages }));
    this.interval = setInterval(() => this.handlePollUpdate(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handlePollUpdate() {
    this.client.getMessageList().then((response) => {
      if (this.state.messages[0] !== response.data.messages[0]) {
        this.setState({ messages: response.data.messages });
      }
    });
  }

  handleDeleteMesssage = (messageId) => {
    this.client.deleteMessage(messageId).then((response) => {
      console.log(response.data);
      this.client
        .getMessageList()
        .then((response) =>
          this.setState({ messages: response.data.messages })
        );
    });
  };

  handlePostMessage = (e) => {
    e.preventDefault();
    console.log("using handlepost");
    this.client.postMessage({ text: this.state.text }).then((result) => {
      this.setState((state) => ({
        messages: [result.data.message, ...state.messages],
        text: "",
      }));
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.state.messages === []) {
      return <h1>loading...</h1>;
    }

    return (
      <div className="messageList">
        <PostMessage
          handleChange={this.handleChange}
          handlePostMessage={this.handlePostMessage}
          text={this.state.text}
        />
        <br />
        <div>
          {this.state.messages.map((messageObject) => (
            <Message
              handleDeleteMesssage={this.handleDeleteMesssage}
              key={messageObject.id}
              {...messageObject}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MessageList;
