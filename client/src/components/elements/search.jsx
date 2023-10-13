import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import FilterListIcon from '@mui/icons-material/FilterList';

const SearchBar = styled(Box)({ // Use motion.div for animated Chat
    height: '34px',
    width: '60px',
    backgroundColor: '#474C52',
    color: '#D1D2D4',
    marginLeft: '11px',
    marginBottom: '0px',
    borderRadius: "6px",
    padding: "9px",
    paddingRight: "220px",
});

const Filter = styled(Box)({ // Use motion.div for animated Chat
    height: '34px',
    width: '11vh',
    backgroundColor: '#474C52',
    color: '#FFF',
    marginLeft: '3px',
    marginTop: '0px',
    marginBottom: '0px',
    borderRadius: "6px",
    padding: "7px",
    paddingTop: "5px"
});

export default function Search() {
    return (
        <Box display={'flex'} flexDirection={'row'} sx={{'background-color': 'tranparent'}}>
            <SearchBar >Search </SearchBar>
            <Filter ><FilterListIcon sx={{'background-color': '#474C52'}}/></Filter>
        </Box>
    ) 
}
