import React from "react";
import { Button, Input } from "antd";
import "./PostMessage.css";
const { TextArea } = Input;
function PostMessage(props) {
  return (
    <div className="messageForm" style={{ background: "#e6e6ea" }}>
      <form id="message-form" onSubmit={props.handlePostMessage}>
        <TextArea
          style={{ background: "#e6e6ea" }}
          rows={4}
          maxLength={255}
          onPressEnter={props.handlePostMessage}
          type="text"
          name="text"
          value={props.text}
          placeholder="Tells Us what you're thinking!"
          required
          onChange={props.handleChange}
        />
        <Button htmlType="submit">Post</Button>
      </form>
    </div>
  );
}

export default PostMessage;
