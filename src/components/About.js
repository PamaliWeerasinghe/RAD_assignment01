import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";
const About = () => {
  const Img = styled("img")({
    width: "100%",
    height: "auto",
    objectFit: "fill",
    itemAlign: "right",
    justifyContent: "center",
    margin: "auto",
  });
  const ProfileImg = styled("img")({
    //borderRadius:'100%',
    margin: "1%",
    width: "30%",
    //border:'solid'
  });
  const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0),
  }));

  return (
    <Container maxWidth={"false"}>
      <Section id="about">
        <Typography variant="h4">ABOUT US</Typography>
        <Grid
          container
          rowSpacing={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1%",
          }}
        >
          <Grid item xs={12} md={6} display={"flex"}>
            <Img
              src="/aboutus.png"
              maxWidth={"600px"}
              sx={{ maxWidth: { xs: "300px", sm: "400px", md: "450px" } }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">HISTORY</Typography>
            <Typography variant="body1" textAlign={"center"}>
              Founded in 2020, GreenLeaf Gardens started as a small, passionate
              project by a group of plant lovers who wanted to share their love
              for nature with the community. What began as a weekend hobby soon
              blossomed into a thriving business, thanks to the support and
              enthusiasm of our wonderful customers. Our mission has always been
              simple: to provide high-quality plants and exceptional service,
              making it easy for everyone to enjoy the benefits of a greener
              lifestyle.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Link to={"services"}>
              <Button style={{ width: "93%" }}>Our Services</Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Link to={"team"}>
              <Button style={{ width: "93%" }}>Our Team</Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Link to={"availabilities"}>
              <Button style={{ width: "93%" }}>Availabilities</Button>
            </Link>
          </Grid>
        </Grid>
        <Box>
          <Outlet />
        </Box>
      </Section>
    </Container>
  );
};
export default About;
