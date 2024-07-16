import * as React from "react";
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const ContactUs=()=>{
    const Section = styled(Box)(({ theme }) => ({
        padding: theme.spacing(8, 0),

      }));
    return(
    <Container>
      <Section id="ContactUs">
        <Grid Container>
          <Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3">Our Services</Typography>
              <Typography variant="body1">
                we offer a variety of services designed to help you cultivate
                and maintain a thriving green space. Whether you're a beginner
                looking for guidance or a seasoned gardener seeking specialized
                support, we have something for everyone.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Section>
    </Container>);
}
export default ContactUs;