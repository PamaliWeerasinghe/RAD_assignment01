import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';


export default function Home() {
    const Item = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        //border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
        //padding: theme.spacing(1),
        //borderRadius: '4px',
        textAlign: 'center',
      }));
      const Section = styled(Box)(({ theme }) => ({
        padding: theme.spacing(8, 0),

      }));

  return (
      <Container maxWidth={'false'} style={{padding:'0'}}>
        <Section id='home'>
        <Grid container  >
            <Grid sx={{
                bgcolor:'success.main',
                width:'100%',
                display:'flex',
                flexDirection:'row'
            }} >
                <Grid item xs={12} md={6} sx={{ bgcolor: 'primary.main',display:'flex',flex:'1' ,justifyContent:'center',alignItems:'center'}}>
                <Typography variant='h5' textAlign={'center'}>
                Welcome to GreenLeaf Gardens, your go-to destination for 
                all things green and beautiful!
                </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ bgcolor: 'secondary.main' ,display:'flex',flex:'1'}}>
                    <img src='./plant.png'/>
                </Grid>

            </Grid>
        </Grid>
        </Section>
      </Container>
        
     
  );
}
