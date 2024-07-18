import * as React from "react";
import { styled, keyframes } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";

const TeamMembers = () => {
  // Define keyframes for animations
  const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

  const slideIn = keyframes`
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `;

  const Img = styled("img")({
    width: "100%",
    height: "auto",
    objectFit: "fill",
    itemAlign: "right",
    justifyContent: "center",
    margin: "auto",
    animation: `${fadeIn} 2s ease-in-out`,
  });

  const ProfileImg = styled("img")({
    margin: "1%",
    width: "30%",
    animation: `${slideIn} 1s ease-out`,
  });

  const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0),
    animation: `${fadeIn} 1.5s ease-in-out`,
  }));

  return (
    <Container maxWidth={"false"}>
      <Section id="about">
        <Typography variant="h4" style={{ fontWeight: "bolder" }}>
          MEET OUR TEAM
        </Typography>

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
            <Typography variant="h6">Customer Service</Typography>
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
};

export default TeamMembers;
