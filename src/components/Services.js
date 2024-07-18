import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";
const Services = () => {
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
          <Grid item xs={12} md={6} rowSpacing={4}>
            <Typography variant="h4" style={{fontWeight:'bolder',marginBottom:'8%'}}>OUR SERVICES</Typography>
            <Typography variant="body1">
              we offer a variety of services designed to help you cultivate and
              maintain a thriving green space. Whether you're a beginner looking
              for guidance or a seasoned gardener seeking specialized support,
              we have something for everyone.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} display={"flex"}>
            <Img
              src="/service.png"
              alt="aboutimg"
              maxWidth={"600px"}
              sx={{ maxWidth: { xs: "300px", sm: "400px", md: "450px" } }}
            />
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
};
export default Services;
