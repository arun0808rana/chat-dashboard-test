import styled from "styled-components/macro";

const Wrapper = styled.div`
  width: 300px;
  .message-list {
    height: 100%;
    padding: 8px;
    .msg-item-dp {
      min-width: 40px;
      min-height: 40px;
      background-color: var(--secondary-cherry-color);
      border-radius: 100px;
      margin-right: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: var(--primary-cherry-color);
    }
    &-upper-part {
      width: 100%;
      height: 300px;
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
              /* width: 90%; */
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
