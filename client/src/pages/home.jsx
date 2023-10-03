import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Avatar = styled(motion.div)({ // Use motion.div for animated Avatar
  height: '10vh',
  width: '50px',
  backgroundColor: '',
  cursor: 'pointer',
  color:'#fff',
  borderRadius: "8px",
  paddingLeft:"10px",
  paddingTop:"10px",
  marginLeft:'10px',
  marginTop:'10px',
  marginBottom:'10px',
});

const Nav = styled(motion.div)({ // Use motion.div for animated Nav
  height: '90vh',
  width: '50px',
  backgroundColor: '',
  color:"white",
  padding:"20px",
});

const Chat = styled(motion.div)({ // Use motion.div for animated Chat
  height: '',
  width: '250px',
  backgroundColor: '#1C1C24',
  color:'#D1D2D4',
  marginTop:'0px',
  marginBottom:'10px',
  borderRadius: "8px",
  padding:"10px"
});

const Search = styled(Box)({ 
    height: '',
    width: '250px',
    backgroundColor: '#1C1C24',
    color:'#D1D2D4',
    marginTop:'10px',
    marginBottom:'0px',
    borderRadius: "8px",
    padding:"10px"
  });

const ChatBox = styled(motion.div)({ 
    height: '',
    width: '100vh',
    backgroundColor: '#1C1C24',
    color:'#fff',
    marginTop:'10px',
    marginBottom:'10px',
    borderRadius: "8px",
    marginLeft:'10px',
    padding:"10px"
  });

export default function Home() {
  const [avatarClicked, setAvatarClicked] = useState(false);

  const handleAvatarClick = () => {
    setAvatarClicked(!avatarClicked);
  };

  return (
    <Box sx={{backgroundColor:'#0F1418'}}>
    <Box display="flex" flexDirection="row">
      <Box>
        <Box display="flex" flexDirection="row">
        <Avatar
          onClick={handleAvatarClick}
          initial={{ height: '10vh', width: '50px' }}
          animate={{
            height: avatarClicked ? '30vh' : '5vh',
            width: avatarClicked ? '310px' : '50px',
            backgroundColor: avatarClicked ? '#1C1C24' : '',
            opacity: avatarClicked ? 0.7 : 1,
          }}
        //   whileHover={{ backgroundColor: 'darkblue', opacity: 0.9 }}
        >
          A
        </Avatar>
        {/* {!avatarClicked && (
        <Search >hj</Search>
      )} */}
        </Box>
        <Box display="flex" flexDirection="row">
          <Nav
            initial={{ height: '100vh' }}
            animate={{ height: avatarClicked ? '70vh' : '90vh' }}
          >
            C
          </Nav>
          {/* {avatarClicked && ( */}
            <Chat
              initial={{ height: '50vh' ,  width: '270px'}}
              animate={{ height: '65.3vh', flex: 1 }}
            >
              Message
            </Chat>
          {/* )} */}
        </Box>
      </Box>
      {/* {!avatarClicked && (
        <Chat initial={{ height: '10vh', width: '270px' }}><h4>Messages</h4></Chat>
      )} */}
    <ChatBox></ChatBox>
    </Box>
    </Box>
  );
}

