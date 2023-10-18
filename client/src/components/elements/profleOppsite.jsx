import { Avatar, Box } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import ContactsIcon from "@mui/icons-material/Contacts";

export default function ProfleOppsite({ data }) {
  return (
    <Box sx={{ "background-color": "#1C1C24" }}>
      <motion.div>
        <Box sx={{ "background-color": "#1C1C24" }}>
          <Avatar
            alt="Remy Sharp"
            src={`data:image/svg+xml;base64,${data.avatarImage}`}
            style={{ width: 56, height: 56, "background-color": "#1C1C24" }}
          />
        </Box>
      </motion.div>
      <motion.div display={"flex"} flexDirection={"row"}>
        <Box sx={{ "background-color": "#1C1C24" }}>

        <PhoneIcon fontSize="samll" />
        <VideoCallIcon fontSize="small" />
        <ContactsIcon fontSize="small" />
        </Box>
      </motion.div>
      <motion.div>
        {data.username}
        <p style={{ fontSize: "12.5px", "background-color": "#1C1C24" }}>
          Feeling lonely..
        </p>
      </motion.div>
    </Box>
  );
}
