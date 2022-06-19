import React, { useState } from "react";
import Wrapper from "./MessageList.style";
import DPIcon from "../../../../assets/photo-1517841905240-472988babdf9.avif";
import ProfilePic from "../../../../assets/dp.png";
import CameraIcon from "../../../../assets/bi_camera.svg";
import SearchIcon from "../../../../assets/akar-icons_search.svg";

function MessageList() {
  const [userList, setUserList] = useState([
    {
      dp: DPIcon,
      name: "Mansi Rathore",
      lastText: "",
      time: "12:03 AM",
    },
    {
      dp: "https://images.unsplash.com/photo-1521856729154-7118f7181af9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Jane Sthanton",
      lastText: "",
      time: "12:03 AM",
    },
    {
      dp: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Raj Khanna",
      lastText: "",
      time: "12:03 AM",
    },
    {
      dp: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Amy White",
      lastText: "",
      time: "12:03 AM",
    },
    {
      dp: "https://images.unsplash.com/photo-1613145997970-db84a7975fbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Tom Holland",
      lastText: "",
      time: "12:03 AM",
    },
    {
      dp: "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Dan Moore",
      lastText: "",
      time: "12:03 AM",
    },
    {
      dp: "https://images.unsplash.com/photo-1629467057571-42d22d8f0cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Joshua Jackson",
      lastText: "",
      time: "12:03 AM",
    },
  ]);
  const [isOnline, setIsOnline] = useState("Online");
  const onStatusChange = (e) => {
    setIsOnline(e.target.value);
    console.log("e.target.value", e.target.value);
  };
  return (
    <Wrapper>
      <div className="message-list">
        <div className="message-list-upper-part">
          <div className="upper-msg-container">
            <div className="msg-up-part-dp">
              <img src={ProfilePic} alt="dp" />
              <div
                className={
                  "msg-up-part-dp-status " +
                  (isOnline === "Online" ? "online" : "")
                }
              ></div>
              <div className="msg-up-part-dp-edit-profile-pic">
                <img src={CameraIcon} alt="edit" />
              </div>
            </div>
            <div className="upper-msg-container-user-name">Jane Doe</div>
            <div className="message-list-status-changer">
              <select onChange={onStatusChange} value={isOnline}>
                <option value="Online">Online</option>
                <option value="Away">Away</option>
              </select>
            </div>
            <div className="search-chat">
              <input
                type="text"
                className="search-chat-input"
                placeholder="Search"
              />
              <div className="search-chat-icon">
                <img src={SearchIcon} alt="search" />
              </div>
            </div>
            <div className="add-new-chat-user">
              <div className="add-new-chat-user-text">Start New Chat</div>
              <button className="add-new-chat-user-btn">+</button>
            </div>
          </div>
        </div>
        <div className="message-list-lower-part">
          <div className="message-list-lower-part-list-item-container">
            {userList.map((user, index) => {
              return (
                <div
                  key={`msg-list-item-${index}`}
                  className={
                    "message-list-lower-part-list-item-container-item " +
                    (index === 0 ? "active" : null)
                  }
                >
                  <div className="msg-item-dp">
                    <img src={user.dp || DPIcon} alt="dp" />
                  </div>
                  <div className="name-msg-info-container">
                    <div className="message-list-lower-part-list-item-container-item-name">
                      {user.name}
                    </div>
                    <div className="msg-list-info">
                      Hey long time no seen; lets meet up this sunday
                    </div>
                  </div>
                  <div className="msg-list-time">{user.time}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default MessageList;
