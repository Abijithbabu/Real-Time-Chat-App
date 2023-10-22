import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import { Box, TextField } from "@mui/material";

const InputBar = styled(Box)({
  // Use motion.div for animated Chat
  height: "34px",
  width: "88vh",
  backgroundColor: "#474C52",
  color: "#D1D2D4",
  margin: "40px 0px 0px 0px",
  marginBottom: "0px",
  borderRadius: "6px",
  padding: "9px",
  // paddingRight: "220px",
});

const SentBtn = styled(Box)({
  // Use motion.div for animated Chat
  height: "34px",
  width: "4vh",
  backgroundColor: "#474C52",
  color: "#D1D2D4",
  margin: "40px 0px 0px 20px",
  marginBottom: "0px",
  borderRadius: "6px",
  padding: "9px",
  // paddingRight: "220px",
});

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emojiObject) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    // <Container>
    <Box
      display={"flex"}
      flexDirection={""}
      sx={{ "background-color": "tranparent" }}
    >
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
      </div>
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <Box
          display={"flex"}
          flexDirection={""}
          sx={{ "background-color": "tranparent" }}
        >
          <InputBar>
            <TextField
              style={{ width: "100vh" }}
              id="standard-multiline-static"
              // label="Multiline"
              multiline
              rows={4}
              placeholder="type your message here                                       "
              // defaultValue="type your message here"
              type="text"
              variant="standard"
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
            />
          </InputBar>
          <SentBtn>df</SentBtn>
        </Box>
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </Box>
    // {/* </Container> */}
  );
}

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  background-color: #080420;
  padding: 0 2rem;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  }
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }
      .emoji-picker-react {
        position: absolute;
        top: -350px;
        background-color: #080420;
        box-shadow: 0 5px 10px #9a86f3;
        border-color: #9a86f3;
        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #080420;
          width: 5px;
          &-thumb {
            background-color: #9a86f3;
          }
        }
        .emoji-categories {
          button {
            filter: contrast(0);
          }
        }
        .emoji-search {
          background-color: transparent;
          border-color: #9a86f3;
        }
        .emoji-group:before {
          background-color: #080420;
        }
      }
    }
  }
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff34;
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;

      &::selection {
        background-color: #9a86f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9a86f3;
      border: none;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;
//  // <Container>
//  <Box display={'flex'} flexDirection={'row'} sx={{'background-color': 'tranparent'}}>
//  <InputBar>
// <div className="button-container">
//  <div className="emoji">
//    <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
//    {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
//  </div>
// </div>
// <form className="input-container" onSubmit={(event) => sendChat(event)}>
//  <input
//    type="text"
//    placeholder="type your message here"
//    onChange={(e) => setMsg(e.target.value)}
//    value={msg}
//    />
//  <button type="submit">
//    <IoMdSend />
//  </button>
// </form>
//    </InputBar>
//  </Box>
// {/* </Container> */}
