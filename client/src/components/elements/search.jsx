import React from 'react'

const SearchBar = styled(motion.div)({ // Use motion.div for animated Chat
    height: '20px',
    width: '80vh',
    backgroundColor: '#1C1C24',
    color: '#D1D2D4',
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: "8px",
    padding: "10px"
});

const Filter = styled(motion.div)({ // Use motion.div for animated Chat
    height: '20px',
    width: '20vh',
    backgroundColor: '#1C1C24',
    color: '#D1D2D4',
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: "8px",
    padding: "10px"
});

export default function Search() {
    return (
        <Box>
            <SearchBar><h3>Search</h3></SearchBar>
            <Filter>F</Filter>
        </Box>
    )
}
