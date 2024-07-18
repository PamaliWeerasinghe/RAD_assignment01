import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";
const Availabilities = () => {
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

        <Typography variant="h4">AVAILABILITIES</Typography>

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
            md={2}
            style={{
              //border:'solid',
              textAlign: "center",
              margin: "1%",
            }}
          >
            <Img
              src="/visitStore.png"
              maxWidth={"600px"}
              sx={{ maxWidth: { xs: "300px", sm: "400px", md: "450px" } }}
            />
            <Typography variant="h6" color={"green"}>
              Visit Stores
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            style={{
              //border:'solid',
              textAlign: "center",
              margin: "1%",
            }}
          >
            <Img
              src="/branches.png"
              maxWidth={"600px"}
              sx={{ maxWidth: { xs: "300px", sm: "400px", md: "450px" } }}
            />
            <Typography variant="h6" color={"green"}>
              Several Branches
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            style={{
              //border:'solid',
              textAlign: "center",
              margin: "1%",
            }}
          >
            <Img
              src="/donate.png"
              maxWidth={"600px"}
              sx={{ maxWidth: { xs: "300px", sm: "400px", md: "450px" } }}
            />
            <Typography variant="h6" color={"green"}>
              Donate Plants
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            style={{
              //border:'solid',
              textAlign: "center",
              margin: "1%",
            }}
          >
            <Img src="/purchase.png" />
            <Typography variant="h6" color={"green"}>
              Purchase Plants
            </Typography>
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
};
export default Availabilities;
