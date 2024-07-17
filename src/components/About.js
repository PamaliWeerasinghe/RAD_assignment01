import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
 const About=()=>{

    const Img=styled('img')({
        width:'100%',
        height:'auto',
        objectFit:'fill',
        itemAlign:'right',
        justifyContent:'center',
        margin:'auto'
    });
    const ProfileImg=styled('img')({
        //borderRadius:'100%',
        margin:'1%',
        width:'30%',
        //border:'solid'
    });
    const Section = styled(Box)(({ theme }) => ({
      padding: theme.spacing(8, 0),

    }));

    return (
      <Container maxWidth={"false"}>
        <Section id="about">
          <Typography variant="h4">ABOUT US</Typography>
          <Grid container rowSpacing={4} style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'1%'}}>
            <Grid item xs={12} md={3} ><Button style={{width:'93%'}}>Our Services</Button></Grid>
            <Grid item xs={12} md={3}><Button style={{width:'93%'}}>Our Team</Button></Grid>
            <Grid item xs={12} md={3}><Button style={{width:'93%'}}>History Of Us</Button></Grid>
            <Grid item xs={12} md={6} display={"flex"}>
              <Img src="./aboutus.png" maxWidth={"600px"} sx={{maxWidth : {xs : '300px', sm : '400px', md:'450px'}}}/>
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
            <Grid item xs={12} md={6} rowSpacing={4}>
            <Typography variant="h4">OUR SERVICES</Typography>
            <Typography variant="body1">
            we offer a variety of services designed to help you cultivate 
            and maintain a thriving green space. Whether you're a beginner
             looking for guidance or a seasoned gardener seeking 
             specialized support, 
            we have something for everyone.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} display={'flex'}>
            <Img src="/service.png" alt="aboutimg" maxWidth={'600px'} sx={{maxWidth : {xs : '300px', sm : '400px', md:'450px'}}} />
          </Grid>

        </Grid>
        
          {/* <Grid item xs={12} md={12}> */}
    
            <Typography variant='h4'>MEET OUR TEAM</Typography>

          {/* </Grid> */}
          <Grid container style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Grid item xs={12} md={3} 
          style={{
            // border:'solid',
            textAlign:'center',
            margin:'1%'}}>
                
                <ProfileImg src='./team1.webp' />
                <Typography variant='h6' color={'green'}>Hailey Vincez</Typography>
                <Typography variant='h6'>Founder & CEO</Typography>
          </Grid>
          <Grid item xs={12} md={3} style={{textAlign:'center',margin:'1%'}}>
                
                <ProfileImg src='./team2.png' />
                <Typography variant='h6' color={'green'}>Melissa Francis</Typography>
                <Typography variant='h6'>Sales Manager</Typography>
          </Grid>
          <Grid item xs={12} md={3} style={{textAlign:'center',margin:'1%'}}>
                
                <ProfileImg src='./team3.png' />
                <Typography variant='h6' color={'green'}>Georginia Fernandaz</Typography>
                <Typography variant='h6'>Custoner Service</Typography>
          </Grid>
          
        </Grid>
        
        
          <Typography variant='h4'>AVAILABILITIES</Typography>
          
          <Grid container style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            
          <Grid item xs={12} md={2} style={{
            //border:'solid',
            textAlign:'center',
            margin:'1%'}}
            >
                
                <Img src='./visitStore.png' maxWidth={'600px'} sx={{maxWidth : {xs : '300px', sm : '400px', md:'450px'}}}/>
                <Typography variant='h6' color={'green'}>Visit Stores</Typography>
                
          </Grid>
          <Grid item xs={12} md={2} 
          style={{
            //border:'solid',
            textAlign:'center',margin:'1%'}}>
                
                <Img src='./branches.png' maxWidth={'600px'} sx={{maxWidth : {xs : '300px', sm : '400px', md:'450px'}}} />
                <Typography variant='h6' color={'green'}>Several Branches</Typography>
                
          </Grid>
          <Grid item xs={12} md={2} 
          style={{
            //border:'solid',
            textAlign:'center',
            margin:'1%'}}>
                
                <Img src='./donate.png' maxWidth={'600px'} sx={{maxWidth : {xs : '300px', sm : '400px', md:'450px'}}} />
                <Typography variant='h6' color={'green'}>Donate Plants</Typography>
                
          </Grid>
          <Grid item xs={12} md={2} style={{
            //border:'solid',
            textAlign:'center',margin:'1%'}}>
                
                <Img src='./purchase.png' />
                <Typography variant='h6' color={'green'}>Purchase Plants</Typography>
                
          </Grid>
         
          
          
          </Grid>
        </Section>
      </Container>
    );
}
export default About;