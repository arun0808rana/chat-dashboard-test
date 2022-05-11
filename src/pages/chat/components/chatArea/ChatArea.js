import React, { useState } from "react";
import Wrapper from "./ChatArea.style";
import TypingIndicator from "../../../../assets/typing_indiacator.gif";
import SendIcon from "../../../../assets/send.svg";
import EmojiIcon from "../../../../assets/emoji.svg";
import AttachmentIcon from "../../../../assets/attachment.svg";

function ChatArea() {
  const [messagesList, setMessagesList] = useState([
    {
      user: "mansi",
      isSelf: false,
      time: "10:03 AM",
      msg: "Hey rajeev, long time no see.",
    },
    {
      user: "rajeev",
      isSelf: true,
      time: "12:03 AM",
      msg: "Hey mansee, how are dude.",
    },
    {
      user: "mansi",
      isSelf: false,
      time: "11:03 PM",
      msg: "recently moved in a new house in your neighbourhood.",
    },
    {
      user: "mansi",
      isSelf: false,
      time: "12:03 AM",
      msg: "What? y didnt u tell me earlier?.",
    },
    {
      user: "rajeev",
      isSelf: true,
      time: "01:03 AM",
      msg: "What? y didnt u tell me earlier?",
    },
    {
      user: "rajeev",
      isSelf: true,
      time: "01:03 AM",
      msg: "What? y didnt u tell me earlier?",
    },
  ]);
  return (
    <Wrapper>
      <div className="chat-area-heading">
        <div className="chat-area-heading-lhs">Mansi Rathore</div>
        <div className="chat-area-heading-rhs">
          <button className="chat-area-heading-btn active">Messages</button>
          <button className="chat-area-heading-btn">Participants</button>
        </div>
      </div>
      <div className="chat-area-body">
        <div className="chat-area-body-messages">
          {messagesList.map((msg, index) => {
            return (
              <div className="chat-strip">
                {!msg.isSelf ? <div className="chat-strip-dp"></div> : null}

                <div className={"chat-msg " + (msg.isSelf ? "right" : "left")}>
                  <div className="chat-msg-time">
                    {msg.isSelf ? "You, " : null}
                    {msg.time}
                  </div>
                  <div
                    className={"main-msg " + (msg.isSelf ? "right" : "left")}
                  >
                    {msg.msg}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="typing-indication">
            <img src={TypingIndicator} alt="" />
            Mansee is typing...
          </div>
        </div>
        <div className="chat-area-body-typing-box">
          <input type="text" placeholder="Write your message..." className="chat-area-body-typing-box-input" />
          <div className="chat-area-body-typing-box-input-icons">
            <img src={EmojiIcon} alt="emoji icon" />
            <img src={AttachmentIcon} alt="attachement icon" />
            <img src={SendIcon} alt="send icon" className="chat-area-body-typing-box-input-icons-send-btn"/>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ChatArea;
