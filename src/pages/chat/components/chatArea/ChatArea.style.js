import styled from "styled-components/macro";

const Wrapper = styled.div`
  width: 500px;
  background-color: #edf0f5;
  border-radius: 10px;
  height: 100%;

  .chat-area-heading {
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    height: 60px;
    &-lhs {
      color: var(--primary-text-color);
      font-weight: 500;
    }
    &-btn {
      /* background-color: #d1e6e7; */
      cursor: pointer;
      border-radius: 8px;
      border-width: 0;
      padding: 10px 12px;
      text-align: center;
      transition: all 200ms;
      white-space: nowrap;
      color: var(--secondary-text-color);
      /* font-weight: bold; */
      margin-right: 8px;
    }
    &-btn.active {
      background-color: var(--secondary-cherry-color);
      cursor: pointer;
      border-radius: 8px;
      border-width: 0;
      padding: 10px 12px;
      text-align: center;
      transition: all 200ms;
      white-space: nowrap;
      color: var(--primary-cherry-color);
      font-weight: bold;
    }
  }
  .chat-area-body {
    position: relative;
    height: calc(100% - 60px);
    .chat-area-body-messages {
      height: 570px;
      overflow-y: auto;
      /* width */
      ::-webkit-scrollbar {
        width: 8px;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #ced2db;
        border-radius: 10px;
      }
    }
    .chat-strip {
      display: flex;
      align-items: flex-end;
      padding: 8px;
      &-dp {
        width: 40px;
        height: 40px;
        border-radius: 100px;
        background-color: white;
        margin-bottom: 8px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 40px;
        }
      }
    }
    .main-msg {
      width: 200px;
      padding: 8px;
      border-radius: 10px;
      margin: 8px;
      font-size: 14px;
    }
    .chat-msg {
      &-time {
        font-size: 11px;
      }
    }
    .chat-msg.left {
      .chat-msg-time {
        margin-left: 8px;
      }
    }

    .chat-msg.right {
      margin-left: auto;
    }

    .main-msg.right {
      margin-left: auto;
      text-align: right;
      background-color: var(--self-chat-string-color);
    }
    .main-msg.left {
      background-color: white;
    }

    &-typing-box {
      position: absolute;
      bottom: 12px;
      width: calc(100% - 16px);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      margin: 0 8px;
      &-input {
        border: none;
        height: 50px;
        background-color: transparent;
        width: calc(100% - 24px);
        padding: 0 16px;
      }
      &-input-icons {
        display: flex;
        img {
          margin-right: 8px;
          &:last-child {
            margin-right: 0;
          }
        }
        &-send-btn {
          cursor: pointer;
        }
      }
    }
    .typing-indication {
      display: flex;
      align-items: center;
      margin: 8px;
      font-size: 11px;
      img {
        width: 40px;
        background-color: white;
        border-radius: 100px;
        margin-right: 8px;
      }
    }
  }
`;

export default Wrapper;
