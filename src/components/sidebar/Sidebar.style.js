import styled from "styled-components/macro";

const Wrapper = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  .sidebar-logo {
    padding: 8px;
    img {
      width: 50px;
    }
  }
  .sidebar-central-icons {
    display: flex;
    width: 100%;
    align-items: flex-end;
    flex-direction: column;
    .sidebar-route-links {
      padding-right: 14px;
      &.active {
        padding-right: 10px;
        border-right: 4px solid var(--primary-cherry-color);
      }
    }
  }
  .sidebar-profile {
    padding: 8px;
    .dp {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      overflow: hidden;
      .dp-icon {
        width: 40px;
      }
    }
  }
`;

export default Wrapper;
