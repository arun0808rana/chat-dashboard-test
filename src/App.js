import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Chat from "./pages/chat/Chat";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import styled from "styled-components/macro";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <Wrapper>
      <Sidebar />
      <RouterOutlet>
        <Routes>
          <Route exact path="/chat" element={<Chat />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </RouterOutlet>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 720px;
  width: 1200px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 20px;
  background-color: white;
`;

const RouterOutlet = styled.div`
  border-left: 1px solid var(--border-color);
  border-radius: 20px 0 0 20px;
  padding: 8px;
`;
