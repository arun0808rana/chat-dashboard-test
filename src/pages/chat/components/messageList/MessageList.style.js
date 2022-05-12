import styled from "styled-components/macro";

const Wrapper = styled.div`
  width: 300px;
  .message-list {
    height: 100%;
    padding: 8px;
    .msg-item-dp {
      width: 40px;
      height: 40px;
      background-color: var(--secondary-cherry-color);
      border-radius: 100px;
      margin-right: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: var(--primary-cherry-color);
      overflow: hidden;
      img {
        width: 40px;
      }
    }
    &-upper-part {
      width: 100%;
      height: 300px;
      .upper-msg-container{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &-user-name{
          margin: 16px;
          font-weight: 500;
          color: var(--primary-text-color);
          font-size: 30px;
        }
      }
      .msg-up-part-dp {
        width: 100px;
        height: 100px;
        border-radius: 100px;
        /* overflow: hidden; */
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        &-status {
          bottom: -2px;
          position: absolute;
          width: 18px;
          height: 18px;
          border-radius: 100px;
          background-color: var(--primary-cherry-color);
          right: 13px;
          border: 2px solid white;
        }
        &-edit-profile-pic{
          position: absolute;
          display: none;
         
        }
      }
    }
    &-lower-part {
      width: 100%;
      height: calc(100% - 300px);
      /* background-color: aliceblue; */
      &-list-item {
        /* background-color: var(--selection-color); */
        &-container {
          height: 100%;
          overflow-y: auto;
          ::-webkit-scrollbar {
            width: 8px;
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: #ced2db;
            border-radius: 10px;
          }
        }
        &-container-item {
          display: flex;
          align-items: center;
          margin: 8px;
          padding: 8px;
          border-radius: 8px;
          cursor: pointer;
          &-name {
            font-size: 12px;
            /* font-weight: bold; */
            color: var(--primary-text-color);
            margin-bottom: 4px;
          }
          .name-msg-info-container {
            .msg-list-info {
              width: 140px;
              font-size: 11px;
              color: var(--secondary-text-color);
            }
          }
          .msg-list-time {
            font-size: 11px;
            margin-left: 8px;
          }
          &.active {
            background-color: var(--selection-color);
          }
        }
      }
    }
  }
`;

export default Wrapper;
