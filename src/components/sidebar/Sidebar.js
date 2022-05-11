import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Sidebar.style";
import ChatIcon from "../../assets/chat.svg";
import SettingsIcon from "../../assets/settings.svg";
import ProfileIcon from "../../assets/profile.svg";
import LogoIcon from "../../assets/logo.png";

function Sidebar() {
  return (
    <Wrapper>
      <div className="sidebar-logo">
        <Link className="sidebar-route-links" to="/">
          <img src={LogoIcon} alt="logo icon" />
        </Link>
      </div>
      <div className="sidebar-central-icons">
        <Link className="sidebar-route-links" to="chat">
          <img src={ChatIcon} alt="chat icon" />
        </Link>
        <Link className="route-links" to="settings">
          <img src={SettingsIcon} alt="settings icon" />
        </Link>
      </div>
      <div className="sidebar-profile">
        <Link className="route-links" to="profile">
          <img src={ProfileIcon} alt="profile icon" />
        </Link>
      </div>
    </Wrapper>
  );
}

export default Sidebar;
