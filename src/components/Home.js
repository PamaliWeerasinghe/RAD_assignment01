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
        padding: theme.spacing(16, 0), // Padding for medium and up
    },
}));

const Img = styled('img')({
    width: '100%', // Adjusted for responsiveness
    height: 'auto',
    objectFit: 'fill',
    itemAlign: 'center',
    justifyContent: 'center',
    margin:'auto'
  });

export default function Home() {
    const [name, setName] = React.useState('');
    const [welcomeMessage, setWelcomeMessage] = React.useState('Welcome to GreenLeaf Gardens!');
    const [currentTime, setCurrentTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const hours = new Date().getHours();
    const greeting = hours < 12 ? 'Morning' : hours < 18 ? 'Afternoon' : 'Evening';
    setWelcomeMessage(`Good ${greeting}!`);
    }, []);
    

React.useEffect(()=>{
    const timer = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
});
    
    return (
        <Container maxWidth="false">
            <Section id="home">
                <Grid 
                    container 
                    rowSpacing={4}
                    sx={{
                       
                    }}
                >
                    <Grid 
                        item 
                        xs={12} 
                        md={6} 
                        style={{textAlign:'left'}}
                    >   
                    
                        <Typography variant="h6"  style={{marginTop:'2%',fontWeight:'bold'}}>{welcomeMessage}</Typography>
                        <Typography variant="h4" style={{marginTop:'3%',fontWeight:'bolder'}}>
                            WELCOME {name}
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
                        <Typography variant="h3" style={{marginTop:'2%',fontWeight:'bolder'}}>
                            GreenLeaf Gardens
                        </Typography>
                        <Typography variant="h5" style={{marginTop:'2%',fontWeight:'bold'}}>
                            Your Go-To Destination For All Things Green and Beautiful!
                        </Typography>
                        <Typography style={{marginTop:'2%'}}>{currentTime}</Typography>
                        <Link to={"contact"}>
                        <Button variant="contained" endIcon={<ArrowForwardIosIcon />} style={{width:'40%',marginTop:'5%'}}>
                          Contact Us
                        </Button>
                        </Link>
                    </Grid>
                    <Grid 
                        item 
                        xs={12} 
                        md={6}
                        display={'flex'}
                        sx={{backgroundImage: 'url(./blob.svg)',
                            backgroundRepeat:'no-repeat',
                             backgroundPosition:'54% 0',
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                    >
                        <Img 
                            src="./plant.png" 
                            sx={{ maxWidth: { xs: '200px', sm: '400px', md: '450px' } }}
                        />
                    </Grid>
                </Grid>
            </Section>
        </Container>
    );
}
