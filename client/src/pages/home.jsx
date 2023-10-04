import { Avatar, Box, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion'; // Import motion from framer-motion
import Search from '../components/elements/search';


const Avater = styled(motion.div)({ // Use motion.div for animated Avatar
    height: '10vh',
    width: '50px',
    backgroundColor: '',
    cursor: 'pointer',
    color: '#fff',
    borderRadius: "8px",
    paddingLeft: "6px",
    paddingTop: "1px",
    marginLeft: '8px',
    marginRight: '0px',
    marginTop: '10px',
    marginBottom: '6px',
});

const Nav = styled(motion.div)({ // Use motion.div for animated Nav
    height: '90vh',
    width: '50px',
    backgroundColor: '',
    color: "white",
    padding: "20px",
});

const Chat = styled(motion.div)({ // Use motion.div for animated Chat
    height: '',
    width: '250px',
    backgroundColor: '#1C1C24',
    color: '#D1D2D4',
    marginTop: '0px',
    marginBottom: '10px',
    borderRadius: "8px",
    padding: "10px"
});



const ChatBox = styled(motion.div)({
    height: '',
    width: '100vh',
    backgroundColor: '#1C1C24',
    color: '#fff',
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: "8px",
    marginLeft: '10px',
    padding: "10px"
});

export default function Home() {
    const [avatarClicked, setAvatarClicked] = useState(false);

    const handleAvatarClick = () => {
        setAvatarClicked(!avatarClicked);
    };

    return (
        <Box sx={{ backgroundColor: '#0F1418', marginBottom: '10px' }}>
            <Box display="flex" flexDirection="row">
                <Box>
                    <Box display="flex" flexDirection="row">
                        <Avater display="flex" flexDirection="row"
                            onClick={handleAvatarClick}
                            initial={{ height: '10vh', width: '50px' }}
                            animate={{
                                height: avatarClicked ? '30vh' : '5vh',
                                width: avatarClicked ? '310px' : '310px',
                                backgroundColor: avatarClicked ? '#1C1C24' : '',
                                opacity: avatarClicked ? 0.7 : 1,
                            }}
                        >
                            {!avatarClicked && (
                            <Box display={"flex"} flexDirection={'row'} sx={{ 'background-color': 'transparent' }}>
                                <Box sx={{marginTop:'7px'}}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://lh3.googleusercontent.com/YwiWk2MdDQ-eIgvDcs5x3CTYigdC8SvbPDZ64QqFC1BoVCohTF-1S3f4kTbs69UdzYxA7Q=s85"
                                    sx={{ width: 24, height: 24, }}
                                />
                                </Box>
                                <AnimatePresence>
                                   
                                        <motion.div
                                            sx={{ Color: '#FFF' }}
                                            key="search"
                                            initial={{ opacity: 0, x: -0 }}
                                            animate={{
                                                opacity: 1, x: 0,
                                                width: avatarClicked ? '10px' : '50px',
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
                        {/* <Box>
                            <AnimatePresence>
                                {!avatarClicked && (
                                    <motion.div
                                        key="search"
                                        initial={{ opacity: 0, x: -0 }}
                                        animate={{
                                            opacity: 1, x: 0,
                                            width: avatarClicked ? '230px' : '40px',
                                        }}
                                        //   exit={{ opacity: 0, x: -0 }}
                                        transition={{ delay: 0.5 }} // Add a delay of 0.5 seconds
                                    >

                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Box> */}
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
                            initial={{ height: '50vh', width: '270px' }}
                            animate={{ height: '100vh', flex: 1 }}
                        >
                            Message<h1 style={{ 'background-color': 'transparent' }}>s</h1>
                        </Chat>
                        {/* )} */}
                    </Box>
                </Box>

                <ChatBox></ChatBox>
            </Box>
        </Box>
    );
}

