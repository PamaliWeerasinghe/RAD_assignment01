import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AppBar, Button, Grid, Box, Drawer, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <AppBar>
            <Button onClick={toggleTheme}>
                {theme === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
            <Box>
                <Link to="/">Home</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">Contact</Link>
            </Box>
        </AppBar>
  )
}
export default NavBar;