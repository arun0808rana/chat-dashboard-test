import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Sidebar.style";
import ChatIcon from "../../assets/chat.svg";
import SettingsIcon from "../../assets/settings.svg";
import ProfileIcon from "../../assets/profile.svg";
import LogoIcon from "../../assets/logo.png";
import DPIcon from "../../assets/photo-1494790108377-be9c29b29330.avif";

function Sidebar() {
  return (
    <Wrapper>
      <div className="sidebar-logo">
        <Link className="sidebar-route-links" to="/">
          <img src={LogoIcon} alt="logo icon" />
        </Link>
      </div>
      <div className="sidebar-central-icons">
        <Link className="sidebar-route-links active" to="/">
          <img src={ChatIcon} alt="chat icon" />
        </Link>
        <Link className="sidebar-route-links" to="/">
          <img src={SettingsIcon} alt="settings icon" />
        </Link>
      </div>
      <div className="sidebar-profile">
        <Link className="sidebar-route-links dp" to="/">
          <img src={DPIcon} className="dp-icon" alt="profile icon" />
        </Link>
      </div>
    </Wrapper>
  );
}

export default Sidebar;
