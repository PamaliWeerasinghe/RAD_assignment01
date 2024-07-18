import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 2, 
        px: 2, 
        mt: 'auto', 
        textAlign: 'center',
        width:'100%',
        // position:'fixed-bottom',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : '#568203',
        }}
    >
      <Container>
        <Typography variant="body2" color="text.secondary">
        All rights reserved by
          {'  © '}
          {new Date().getFullYear()}{' '}
          GreenLeaf
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
