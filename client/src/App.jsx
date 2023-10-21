import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home";
// import VideoCall from "./components/VideoCall";
export default function App() {
  console.log(process.env.REACT_APP_LOCALHOST_KEY)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/video" element={<VideoCall/>} />    */}
      </Routes>
    </BrowserRouter>
  );
}
