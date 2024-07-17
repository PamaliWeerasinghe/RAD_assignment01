import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Home() {
    const [name, setName] = React.useState('');
    const [welcomeMessage, setWelcomeMessage] = React.useState('Welcome to GreenLeaf Gardens!');

  React.useEffect(() => {
    const hours = new Date().getHours();
    const greeting = hours < 12 ? 'Morning' : hours < 18 ? 'Afternoon' : 'Evening';
    setWelcomeMessage(`Good ${greeting}!`);
  }, []);
    return (
        <Container maxWidth="false">
            <section id="home">
                <Grid 
                    container 
                    rowSpacing={4}
                    sx={{
                        backgroundImage: 'url(./blob.svg)',
                        backgroundSize: '50%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '85% 0',
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
                        <Typography variant="h2">
                            GreenLeaf Gardens
                        </Typography>
                        <Typography variant="h5">
                            Your Go-To Destination For All Things Green and Beautiful!
                        </Typography>
                        <Button variant="contained" endIcon={<SendIcon />} style={{width:'40%',marginTop:'1%'}}>
                          Our Services
                        </Button>
                    </Grid>
                    <Grid 
                        item 
                        xs={12} 
                        md={6} 
                        sx={{ 
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img 
                            src="./plant.png" 
                            style={{ width: '100%' }} 
                            sx={{ maxWidth: { xs: '300px', sm: '400px', md: '450px' } }}
                        />
                    </Grid>
                </Grid>
            </section>
        </Container>
    );
}
