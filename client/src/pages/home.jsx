import { Avatar, Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion"; // Import motion from framer-motion
import Search from "../components/elements/search";
import ChatView from "../components/elements/chatView";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { allUsersRoute } from "../utils/APIRoutes";
import ProfleOppsite from "../components/elements/profleOppsite";

const Avater = styled(motion.div)({
  // Use motion.div for animated Avatar
  height: "10vh",
  width: "50px",
  backgroundColor: "",
  cursor: "pointer",
  color: "#fff",
  borderRadius: "8px",
  paddingLeft: "6px",
  paddingTop: "1px",
  marginLeft: "8px",
  marginRight: "0px",
  marginTop: "10px",
  marginBottom: "6px",
});

const Nav = styled(motion.div)({
  // Use motion.div for animated Nav
  height: "90vh",
  width: "50px",
  backgroundColor: "",
  color: "white",
  padding: "20px",
});

const Chat = styled(motion.div)({
  // Use motion.div for animated Chat
  height: "",
  width: "250px",
  backgroundColor: "#1C1C24",
  color: "#D1D2D4",
  marginTop: "0px",
  marginBottom: "10px",
  borderRadius: "8px",
  padding: "5px",
});

const ChatBox = styled(motion.div)({
  height: "",
  width: "100vh",
  backgroundColor: "#1C1C24",
  color: "#fff",
  marginTop: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
  marginLeft: "10px",
  padding: "0px",
});

const ProfileBox = styled(motion.div)({
  height: "",
  width: "40vh",
  backgroundColor: "#1C1C24",
  color: "#fff",
  marginTop: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
  marginLeft: "10px",
  padding: "0px",
});
export default function Home() {
  const [avatarClicked, setAvatarClicked] = useState(false);
  const [chatClicked, setChatClicked] = useState(false);
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const handleChatClick = () => {
    setChatClicked(!chatClicked);
  };
  useEffect(() => {
    const setUser = async () => {
      if (!localStorage.getItem(import.meta.env.VITE_APP_LOCALHOST_KEY)) {
        navigate("/login");
      } else {
        setCurrentUser(
          await JSON.parse(
            localStorage.getItem(import.meta.env.VITE_APP_LOCALHOST_KEY)
          )
        );
      }
    };
    setUser();
  }, []);
  const handleAvatarClick = () => {
    setAvatarClicked(!avatarClicked);
  };
  useEffect(() => {
    const newfn = async () => {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
          setContacts(data.data);
        } else {
          navigate("/setAvatar");
        }
      }
    };
    newfn();
  });
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  console.log(contacts);

  return (
    <Box sx={{ backgroundColor: "#0F1418", marginBottom: "10px" }}>
      <Box display="flex" flexDirection="row">
        <Box>
          <Box display="flex" flexDirection="row">
            <Avater
              display="flex"
              flexDirection="row"
              initial={{ height: "10vh", width: "50px" }}
              animate={{
                height: avatarClicked ? "30vh" : "5vh",
                width: avatarClicked ? "310px" : "310px",
                backgroundColor: avatarClicked ? "#1C1C24" : "",
                opacity: avatarClicked ? 0.7 : 1,
              }}
            >
              {!avatarClicked && (
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  sx={{ "background-color": "transparent" }}
                >
                  <motion.Box
                    sx={{ marginTop: "50px" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Avatar
                      onClick={handleAvatarClick}
                      marginTop="55vh"
                      alt="Remy Sharp"
                      src="https://lh3.googleusercontent.com/YwiWk2MdDQ-eIgvDcs5x3CTYigdC8SvbPDZ64QqFC1BoVCohTF-1S3f4kTbs69UdzYxA7Q=s85"
                      sx={{ width: 24, height: 24 }}
                    />
                  </motion.Box>

                  <AnimatePresence>
                    <motion.div
                      sx={{ Color: "#FFF" }}
                      key="search"
                      initial={{ opacity: 0, x: -0 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        width: avatarClicked ? "10px" : "50px",
                      }}
                      //   exit={{ opacity: 0, x: -0 }}

                      transition={{ delay: 0.5 }} // Add a delay of 0.5 seconds
                    >
                      <Search />
                    </motion.div>
                  </AnimatePresence>
                </Box>
              )}
            </Avater>
          </Box>
          <Box display="flex" flexDirection="row">
            <Nav
              initial={{ height: "100vh" }}
              animate={{ height: avatarClicked ? "70vh" : "90vh" }}
            >
              C
            </Nav>
            {/* {avatarClicked && ( */}
            <Chat
              initial={{ height: "50vh", width: "270px" }}
              animate={{ height: "100vh", flex: 1 }}
            >
              <Box sx={{ padding: "5px", "background-color": "transparent" }}>
                Message
              </Box>

              <ChatView contacts={contacts} setChat={setCurrentChat} />
            </Chat>
            {/* )} */}
          </Box>
        </Box>

        <ChatBox
          animate={{
            height: currentChat ? "" : "",
            width: currentChat ? "100vh" : "140vh",
            right: currentChat ? "100px" : "0vh",
            backgroundColor: currentChat ? "#1C1C24" : "",
            opacity: currentChat ? 0.7 : 1,
          }}
        >
          x
        </ChatBox>
        <ProfileBox
          sx={{ "background-color": "#27282A" }}
          animate={{
            height: currentChat ? "" : "",
            width: currentChat ? "40vh" : "0px",
            right: currentChat ? "0px" : "10vh",
            backgroundColor: currentChat ? "#1C1C24" : "",
            opacity: currentChat ? 0.7 : 1,
          }}
        >
         

          {currentChat && (
            <ProfleOppsite
            data={currentChat}
            sx={{ "background-color": "#27282A" }}
            />
            )}
            
          
        </ProfileBox>
      </Box>
    </Box>
  );
}
