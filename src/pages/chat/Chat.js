import React from "react";
import Wrapper from "./Chat.style";
import ChatArea from "./components/chatArea/ChatArea";
import MessageList from './components/messageList/MessageList';
import ChatMisc from './components/chatMisc/ChatMisc';

function Chat() {
  return <Wrapper>
      <MessageList/>
      <ChatArea/>
      <ChatMisc/>
  </Wrapper>;
}

export default Chat;
