import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import ContactsIcon from "@mui/icons-material/Contacts";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function ProfleOppsite({ data }) {
  return (
    <Box  sx={{
      backgroundColor: "#1C1C24",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "20px",
    }}>
      <AnimatePresence exitBeforEnter>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0, opacity: 0, rotate: 360 }} // Add exit animation for rotation
          transition={{ delay: 0.8 }}
        >
          <Box
            sx={{
              backgroundColor: "#1C1C24",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: "20px",
              paddingBottom:'10px'
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={`data:image/svg+xml;base64,${data.avatarImage}`}
              style={{
                width: 56,
                height: 56,
                backgroundColor: "#1C1C24",
                
              }}
            />
          </Box>
          
        </motion.div>
       
          <Typography
                  variant="body2"
                  sx={{ "background-color": "#1C1C24" }}
                >
                  {data.username}
                </Typography>
        
      </AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Box
          sx={{
            backgroundColor: "#1C1C24",
           
            display: "flex",
            // flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{ backgroundColor: "#1c1c24" }}
          >
            <PhoneIcon
              fontSize="medium"
              sx={{ backgroundColor: "#1C1C24", margin: "10px" }}
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{ backgroundColor: "#1c1c24" }}
          >
            <VideoCallIcon
              fontSize="medium"
              sx={{ backgroundColor: "#1C1C24", margin: "10px" }}
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{ backgroundColor: "#1c1c24" }}
          >
            <ContactsIcon
              fontSize="small"
              sx={{ backgroundColor: "#1C1C24", margin: "10px" }}
            />
          </motion.div>
        </Box>
      </motion.div>
      <motion.div>
        <Box sx={{ "background-color": "#1C1C24" }}>
          
          <p style={{ fontSize: "12.5px", "background-color": "#1C1C24" }}>
            Feeling lonely..
          </p>
        </Box>
      </motion.div>
    </Box>
  );
}
