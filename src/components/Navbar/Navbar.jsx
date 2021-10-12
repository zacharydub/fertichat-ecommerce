import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Button,
  Link,
  MenuItem,
  Menu,
  Typography,
  Drawer,
} from "@material-ui/core";
import { ShoppingCart, Videocam, AccountCircle } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";
import useStyles from "./styles";

const PrimarySearchAppBar = ({ totalItems }) => {
  //const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 700
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);
  //  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  //
  //  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  //
  //  const mobileMenuId = "primary-search-account-menu-mobile";
  //
  //  const renderMobileMenu = (
  //    <Menu
  //      anchorEl={mobileMoreAnchorEl}
  //      anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //      id={mobileMenuId}
  //      keepMounted
  //      transformOrigin={{ vertical: "top", horizontal: "right" }}
  //      open={isMobileMenuOpen}
  //      onClose={handleMobileMenuClose}
  //    >
  //      <MenuItem>
  //        <IconButton
  //          component={Link}
  //          to="/cart"
  //          aria-label="Show cart items"
  //          color="inherit"
  //        >
  //          <Badge badgeContent={totalItems} color="secondary">
  //            <ShoppingCart />
  //          </Badge>
  //        </IconButton>
  //        <p>Cart</p>
  //      </MenuItem>
  //    </Menu>
  //  );

  const displayDesktop = () => {
    return (
      <>
        <div className={classes.navContainer}>
          <Button
            component={NavLink}
            to="/coaching"
            className={classes.typography}
          >
            Coaching
          </Button>
          <Button
            component={NavLink}
            to="/testing"
            className={classes.typography}
          >
            Testing
          </Button>
          <Button
            component={NavLink}
            to="/lifestyle"
            className={classes.typography}
          >
            Lifestyle
          </Button>
        </div>
        <Button variant="outlined" color="primary">
          <Videocam />
          Book FertiChat
        </Button>
      </>
    );
  };

  const displayMobile = () => {
    const headersData = [
      {
        label: "Coaching",
        href: "/coaching",
      },
      {
        label: "Testing",
        href: "/testing",
      },
      {
        label: "Lifestyle",
        href: "/lifestyle",
      },
    ];
    const getDrawerChoices = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Link
            //{...{
            component={RouterLink}
            to={href}
            color="inherit"
            style={{ textDecoration: "none" }}
            key={label}
            onClick={handleDrawerClose}
            //}}
          >
            <MenuItem>{label}</MenuItem>
          </Link>
        );
      });
    };

    const handleDrawerOpen = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    };
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>{getDrawerChoices()}</div>
        </Drawer>
        <Button variant="outlined" color="primary">
          <Videocam />
          Book
        </Button>
      </Toolbar>
    );
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={RouterLink}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="fertichat"
              height="25px"
              className={classes.image}
            />{" "}
            FertiChat
          </Typography>
          {/*<div className={classes.grow} />*/}
          {/*{location.pathname === "/" && (*/}

          {mobileView ? displayMobile() : displayDesktop()}

          <div className={classes.button}>
            <IconButton
              component={RouterLink}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>

          {/*)}*/}
        </Toolbar>
      </AppBar>
      {/*{renderMobileMenu}*/}
    </>
  );
};

export default PrimarySearchAppBar;
