import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AppBar, Button, Grid, Box, Drawer, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';

const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <AppBar>
            <Button onClick={toggleTheme}>
                {theme === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
        </AppBar>
  )
}
export default NavBar;