import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(12, 0), // Default padding
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6, 0), // Padding for medium and up
    },
}));

export default function Home() {
    const [name, setName] = React.useState('');
    const [welcomeMessage, setWelcomeMessage] = React.useState('Welcome to GreenLeaf Gardens!');
    const [currentTime, setCurrentTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const hours = new Date().getHours();
    const greeting = hours < 12 ? 'Morning' : hours < 18 ? 'Afternoon' : 'Evening';
    setWelcomeMessage(`Good ${greeting}!`);

    const timer = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
    }, []);
    
    
    return (
        <Container maxWidth="false">
            <Section id="home">
                <Grid 
                    container 
                    rowSpacing={4}
                    sx={{
                        
                        // backgroundSize: '50%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '100% 0',
                        width: '100%',
                        height: '100vh',
                        //display: 'flex',
                    }}
                >
                    <Grid 
                        item 
                        xs={12} 
                        md={6} 
                        sx={{ 
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 2,
                            textAlign: 'center'
                        }}
                    >   
                        <Typography variant="h6" gutterBottom>{welcomeMessage}</Typography>
                        <Typography variant="h4">
                            Welcome {name}!
                        </Typography>
                        <TextField 
                            id="outlined-basic" 
                            label="Your Name" 
                            variant="outlined" 
                            color="success" 
                            onKeyUp={(e) => setName(e.target.value)}
                            fullWidth
                            sx={{ my: 2 }}
                        />
                        <Typography variant="h3">
                            GreenLeaf Gardens
                        </Typography>
                        <Typography variant="h5">
                            Your Go-To Destination For All Things Green and Beautiful!
                        </Typography>
                        <Typography></Typography>
                        <Link to={"contact"}>
                        <Button variant="contained" endIcon={<ArrowForwardIosIcon />} style={{width:'100%',marginTop:'5%'}}>
                          Contact Us
                        </Button>
                        </Link>
                    </Grid>
                    <Grid 
                        item 
                        xs={12} 
                        md={6} 
                        sx={{ 
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundImage: 'url(./blob.svg)',
                        }}
                    >
                        <img 
                            src="./plant.png" 
                            style={{ width: '100%' }} 
                            sx={{ maxWidth: { xs: '200px', sm: '400px', md: '450px' } }}
                        />
                    </Grid>
                </Grid>
            </Section>
        </Container>
    );
}
