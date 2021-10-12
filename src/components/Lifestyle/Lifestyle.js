import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";

const Lifestyle = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.toolbar} />
      <div>Lifestyle page</div>
    </Container>
  );
};

export default Lifestyle;
