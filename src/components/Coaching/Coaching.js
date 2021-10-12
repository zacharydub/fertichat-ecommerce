import React from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  Grid,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import useStyles from "./styles";
import Calendly from "./Calendly";

const Coaching = () => {
  const classes = useStyles();

  const handleAddCoaching = () => {
    console.log("book session");
  };

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant="h3" align="center">
        FertiChat Coaching
      </Typography>
      <Card>
        <CardHeader title="Book a session today" align="center"></CardHeader>
        <CardContent>
          <Typography variant="subtitle1">
            Our experienced, compassionate fertility coaches are here to help
            you pave your own personal path to parenthood.
          </Typography>
        </CardContent>
      </Card>
      <section>
        <Typography align="center" gutterBottom>
          Caring experts dedicated to answering your fertility questions.
          <br />
          Safe at home and at a time that's right for you
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={handleAddCoaching}
        >
          Add to basket - $79
        </Button>
      </section>
      <div>
        <Calendly />
      </div>
    </Container>
  );
};

export default Coaching;
