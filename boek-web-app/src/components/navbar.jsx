import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, NavLink } from "react-router-dom";

const customLinkStyle = {
  margin: "1%",
  color: "white",
  textDecoration: "none"
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            boek
          </Typography>
          <Button color="inherit">
            <Link style={customLinkStyle} to="/home">
              HOME
            </Link>
          </Button>
          <Button color="inherit">
            <Link style={customLinkStyle} to="/categories">
              CATEGORIES
            </Link>
          </Button>
          <Button color="inherit">
            <Link style={customLinkStyle} to="/cart">
              CART
            </Link>
          </Button>
          <Button color="inherit">
            <Link style={customLinkStyle} to="/profile">
              PROFILE
            </Link>
          </Button>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
