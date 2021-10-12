import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.toolbar} />
      Home page
    </Container>
  );
};

export default Home;
