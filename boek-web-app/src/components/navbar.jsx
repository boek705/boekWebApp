import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import CategoryIcon from "@material-ui/icons/Category";

import Tooltip from "@material-ui/core/Tooltip";

const customLinkStyle = {
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
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            boek
          </Typography>
          {/* <Button color="inherit"> */}
          <Link style={customLinkStyle} to="/home">
            <Tooltip title="Home">
              <IconButton color="inherit">
                <HomeIcon />
              </IconButton>
            </Tooltip>
          </Link>
          <Link style={customLinkStyle} to="/categories">
            <Tooltip title="Categories">
              <IconButton color="inherit">
                <CategoryIcon />
              </IconButton>
            </Tooltip>
          </Link>
          <Link style={customLinkStyle} to="/cart">
            <Tooltip title="Cart">
              <IconButton color="inherit">
                <AddShoppingCartIcon />
              </IconButton>
            </Tooltip>
          </Link>
          <Link style={customLinkStyle} to="/profile">
            <Tooltip title="Profile">
              <IconButton color="inherit">
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
