import React from "react";
import Wrapper from "./MessageList.style";

function MessageList() {
  return (
    <Wrapper>
      <div className="message-list">
        <div className="message-list-upper-part"></div>
        <div className="message-list-lower-part">
          <div className="message-list-lower-part-list-item-container">
            {[1, 2, 3,2, 3,2,1, 2, 3,2, 3,2,1, 2, 3,2, 3,2, 3].map((user, index) => {
              return (
                <div
                  key={`msg-list-item-${index}`}
                  className={
                    "message-list-lower-part-list-item-container-item " +
                    (index === 0 ? "active" : null)
                  }
                >
                  <div className="msg-item-dp">MR</div>
                  <div className="name-msg-info-container">
                    <div className="message-list-lower-part-list-item-container-item-name">
                      Mansee
                    </div>
                    <div className="msg-list-info">
                      Hey long time no seen; lets meet up this sunday
                    </div>
                  </div>
                  <div className="msg-list-time">12:00 PM</div>
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
