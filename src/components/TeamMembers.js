import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";
const TeamMembers = () => {
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
        <Typography variant="h4" style={{fontWeight:'bolder'}}>MEET OUR TEAM</Typography>

        {/* </Grid> */}
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            md={3}
            style={{
              // border:'solid',
              textAlign: "center",
              margin: "1%",
            }}
          >
            <ProfileImg src="/team1.webp" />
            <Typography variant="h6" color={"green"}>
              Hailey Vincez
            </Typography>
            <Typography variant="h6">Founder & CEO</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            style={{ textAlign: "center", margin: "1%" }}
          >
            <ProfileImg src="/team2.png" />
            <Typography variant="h6" color={"green"}>
              Melissa Francis
            </Typography>
            <Typography variant="h6">Sales Manager</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            style={{ textAlign: "center", margin: "1%" }}
          >
            <ProfileImg src="/team3.png" />
            <Typography variant="h6" color={"green"}>
              Georginia Fernandaz
            </Typography>
            <Typography variant="h6">Custoner Service</Typography>
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
};
export default TeamMembers;
