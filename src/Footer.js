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
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      align="center"
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <Container>
        <Typography component={Link} to="#">
          Terms and conditions
        </Typography>
        /
        <Typography component={Link} to="#">
          Privacy Policy
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
