import { Avatar, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const items = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Outline = styled(motion.div)({
  backgroundColor: "#27282A",
  filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25))",
  width: "100",
  height: "50px",
  padding: "5px",
  borderRadius: "5px",
  margin: "0px",
  marginTop: "5px",
});
export default function ChatView({ contacts = [1, 2], changeChat, setChat }) {
  const [chatClicked, setChatClicked] = useState(false);
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(() => {
    const fetchUser = async () => {
      const data = await JSON.parse(
        localStorage.getItem(import.meta.env.VITE_APP_LOCALHOST_KEY)
      );
      console.log(data);
      setCurrentUserName(data.username);
      setCurrentUserImage(data.avatarImage);
    };
    fetchUser();
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  const handleChatClick = () => {
    setChatClicked(true);
  };
  console.log(contacts);
  return contacts.map((item) => (
    <motion.ul
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.li  variants={items}>
        <Outline>
          <Box
            display={"flex"}
            flexDirection={"row"}
            sx={{ "background-color": "transparent" }}
            onClick={() => setChat(item)}
          >
            <Box
              sx={{
                "background-color": "transparent",
                padding: "3px",
                paddingRight: "8px",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={`data:image/svg+xml;base64,${item.avatarImage}`}
                sx={{ width: 35, height: 35 }}
              />
            </Box>
            <Box sx={{ padding: "5px", "background-color": "transparent" }}>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ "background-color": "#27282A" }}
                >
                  {item.username}
                </Typography>
              </Box>
              <Box sx={{ "background-color": "transparent" }}>
                <p
                  style={{
                    fontSize: "12.5px",
                    "background-color": "transparent",
                  }}
                >
                  hi sugano sir..
                </p>
              </Box>
            </Box>
            <Box sx={{ "background-color": "transparent" }}>
              <Box sx={{ "background-color": "transparent" }}>
                <p
                  style={{ fontSize: "9px", "background-color": "transparent" }}
                >
                  11:00pm
                </p>
              </Box>
              <Box></Box>
            </Box>
          </Box>
        </Outline>
      </motion.li>
    </motion.ul>
  ));
}
