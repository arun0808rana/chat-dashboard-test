import styled from "styled-components/macro";

const Wrapper = styled.div`
  width: 300px;
  .misc {
    &-upper-part {
      display: flex;
      flex-direction: column;
      align-items: center;
      &-heading {
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        height: 60px;
        color: var(--primary-text-color);
        font-weight: 500;
      }
      &-dp {
        margin-top: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        border-radius: 100px;
        overflow: hidden;
        &-img {
          width: 100px;
        }
      }
      &-name {
        color: var(--primary-text-color);
        font-weight: 500;
        margin-top: 8px;
      }
      &-contact-number {
        &-text {
          font-size: 14px;
          color: var(--secondary-text-color);
        }
        &-copy-icon {
        }
      }
      &-file-headings {
        display: flex;
        justify-content: center;
        margin: 16px 0;
        &-all-files-box {
          width: 120px;
          height: 80px;
          border-radius: 10px;
          margin-right: 16px;
          background-color: var(--secondary-cherry-color);
          padding: 8px;
          display: flex;
          align-items: center;
          &-rhs {
            margin-left: 8px;
          }
          &-text {
            font-size: 12px;
          }
          &-filenumber {
            font-weight: 500;
            font-size: 14px;
          }
        }
        &-links-box {
          width: 120px;
          height: 80px;
          border-radius: 10px;
          margin-right: 16px;
          padding: 8px;
          display: flex;
          align-items: center;
          &-rhs {
            margin-left: 8px;
          }
          &-text {
            font-size: 12px;
          }
          &-filenumber {
            font-weight: 500;
            font-size: 14px;
          }
          background-color: var(--selection-color);
        }
      }
    }
    &-lower-part {
      margin-top: 16px;
      &-heading {
        font-weight: bold;
      }
      &-files {
        &-filetype {
          display: flex;
          margin: 16px;
          cursor: pointer;
          &-lhs {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            &.document {
              background-color: #d9e9ff;
            }
            &.images {
              background-color: #ffefc6;
            }
            &.video {
              background-color: #ffe2e2;
            }
            &.others {
              background-color: var(--secondary-cherry-color);
            }
          }
          &-middle {
            margin: auto auto auto 16px;
            &-heading {
              font-weight: bold;
              font-size: 14px;
            }
            &-details {
              font-size: 12px;
              color: var(--secondary-text-color);
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
