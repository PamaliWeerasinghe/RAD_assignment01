import React from "react";
import Home from "./components/Home";
import About from "./components/About";

import NavBar2 from "./components/NavBar2";
import { ThemeProvider } from "./context/ThemeContext";
import { CssBaseline } from "@mui/material";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Availabilities from "./components/Availabilities";
import TeamMembers from "./components/TeamMembers";
import "./components/style.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Padding } from "@mui/icons-material";
import { Box} from '@mui/material';

function App() {
  return (
    
        <ThemeProvider>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Router>
        
        <NavBar2/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="/about/services" element={<Services />} />
            <Route path="/about/availabilities" element={<Availabilities/>}/>
            <Route path="/about/team" element={<TeamMembers/>}/>
          </Route>
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
     </Box> 
    </ThemeProvider>
    
    
  );
}

export default App;
