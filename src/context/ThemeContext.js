import React, { createContext, useEffect, useState } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ThemeContext = createContext();

// Define light theme with custom AppBar colors
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#568203', // Custom primary color
    },
    secondary: {
      main: '#85bb65', // Custom secondary color
    },
    background: {
      default: '#ffffff', // Default background color
    },
    appBar: {
      main: '#85bb65', // Custom AppBar color
      contrastText: '#ffffff', // Text color for AppBar
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#85bb65', // Custom button color
          color: '#ffffff', // Text color for button
          '&:hover': {
            backgroundColor: '#568203', // Custom hover color
          },
        },
      },
    },
  }
  // Add more theme options if needed
});

// Define dark theme with custom AppBar colors
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#85bb65', // Custom primary color
    },
    secondary: {
      main: '#568203', // Custom secondary color
    },
    background: {
      default: '#123524', // Default background color
    },
    appBar: {
      main: '#02091d', // Custom AppBar color
      contrastText: '#ffffff', // Text color for AppBar
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#85bb65', // Custom button color
          color: '#ffffff', // Text color for button
          '&:hover': {
            backgroundColor: '#568203', // Custom hover color
          },
        },
      },
    },
  }
  // Add more theme options if needed
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(()=>{
    const savedTheme=localStorage.getItem('theme');
    return savedTheme? JSON.parse(savedTheme) :'light';
  });
  useEffect(()=>{
    localStorage.setItem('theme',JSON.stringify(theme));
  },[theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};