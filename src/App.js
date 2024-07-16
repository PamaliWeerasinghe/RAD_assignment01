import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { NavBar } from "./components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import { CssBaseline } from "@mui/material";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <ThemeProvider>
      <CssBaseline>
        <NavBar/>
      <Home/>
      <About/>
      <ContactUs/>
      </CssBaseline>
    </ThemeProvider>
      
  );
}

export default App;
