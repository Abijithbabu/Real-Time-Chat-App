import { Avatar, Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Outline = styled(motion.div)({
    backgroundColor: '#27282A',
    filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25))',
    width: '100',
    height: '50px',
    padding: '5px',
    borderRadius: '5px',
    margin:'0px',
    marginTop: '5px',
})
export default function ChatView() {
    return (
        <Outline >
            <Box display={'flex'} flexDirection={'row'} sx={{'background-color': 'transparent'}}>
                <Box sx={{'background-color': 'transparent',padding:'3px',paddingRight:'8px'}}>
                    <Avatar
                        
                        alt="Remy Sharp"
                        src="https://lh3.googleusercontent.com/YwiWk2MdDQ-eIgvDcs5x3CTYigdC8SvbPDZ64QqFC1BoVCohTF-1S3f4kTbs69UdzYxA7Q=s85"
                        sx={{ width: 35, height: 35, }}
                    />
                </Box>
                <Box sx={{padding:'5px','background-color': 'transparent'}}>
                   <Box ><Typography variant='body2' sx={{'background-color': '#27282A'}}>ANJITH</Typography></Box>
                   <Box sx={{'background-color': 'transparent'}}>
                   <p style={{fontSize:'12.5px','background-color': 'transparent'}}>hi sugano sir..</p>
                    </Box>             
                </Box>
                <Box sx={{'background-color': 'transparent'}}>
                    <Box sx={{'background-color': 'transparent'}}>
                   <p style={{fontSize:'9px','background-color': 'transparent'}}>11:00pm</p>
                    </Box>  
                    <Box></Box>
                </Box>
            </Box>
        </Outline>
    )
}
