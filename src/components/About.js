import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

 const About=()=>{
    const Img=styled('img')({
        //width:'100%',
        height:'auto',
        objectFit:'fill',
        itemAlign:'right',
        justifyContent:'center',
        margin:'auto'
    });


    return (
      <Container maxWidth={"false"}>
        <section id="about">
          <Typography variant="h3">About Us</Typography>
          <Grid container rowSpacing={4}>
            <Grid item xs={12} md={6} display={"flex"}>
              <Img src="./plant.png" maxWidth={"600px"} />
            </Grid>
            <Grid item xs={12} md={6}>
              
              <Typography variant="body1" textAlign={'center'}>
              Founded in 2020, GreenLeaf Gardens started as a small, 
              passionate project by a group of plant lovers who wanted 
              to share their love for nature with the community. 
              What began as a weekend hobby soon blossomed into a 
              thriving business, thanks to the support and enthusiasm of our
               wonderful customers. Our mission has always been simple: 
               to provide high-quality plants and exceptional service, 
               making it easy for everyone to enjoy 
              the benefits of a greener lifestyle.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography variant="h3">Our Services</Typography>
            <Typography variant="body1">
            we offer a variety of services designed to help you cultivate 
            and maintain a thriving green space. Whether you're a beginner
             looking for guidance or a seasoned gardener seeking 
             specialized support, 
            we have something for everyone.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} display={'flex'}>
            <Img src="/plant.png" alt="aboutimg" maxWidth={'600px'} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h3'>Team Members</Typography>

          </Grid>
          <Grid item xs={12} md={3}>
            
          </Grid>


          </Grid>
        </section>
      </Container>
    );
}
export default About;