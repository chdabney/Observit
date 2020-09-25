import React from "react";
import DataService from "../../DataService";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: this.props.likes.length,
      likes: this.props.likes,
    };
  }

  handleLike = () => {
    const dataService = new DataService();
    const username = JSON.parse(localStorage.getItem("login")).result.username;
    if (this.state.likes.some((like) => like.username === username)) return;

    dataService.postLikes(this.props.id).then((like) => {
      this.setState((latestState) => ({
        likeCount: latestState.likeCount + 1,
        likes: [...latestState.likes, like],
      }));
    });
  };

  render() {
    let deleteMessageButton = null;
    let userName = JSON.parse(localStorage.getItem("login")).result;
    if (this.props.username === userName.username) {
      deleteMessageButton = (
        <button onClick={() => this.props.handleDeleteMesssage(this.props.id)}>
          Delete Message
        </button>
      );
    }
    return (
      <li>
        {this.props.createdAt}, {this.props.username} posted: <br />
        {this.props.text}
        <div className="like-count">likes: {this.state.likeCount}</div>
        <button onClick={this.handleLike}>
          <span role="img" aria-label="fire">
            🔥
          </span>
        </button>
        {deleteMessageButton}
      </li>
    );
  }
}
//if we use emojis must be put in a span with role = img and aria-label
export default Message;
