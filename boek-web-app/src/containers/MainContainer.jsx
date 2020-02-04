import React from "react";
import ButtonAppBar from "../components/navbar";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Profile from "./Profile";
import Cart from "./Cart";
import Categories from "./Categories";
import Grid from "@material-ui/core/Grid";

class MainContainer extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Grid>
          <ButtonAppBar />
        </Grid>
        <Grid>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/categories" component={Categories} />
          <Route path="/cart" component={Cart} />
          <Route path="/profile" component={Profile} />
        </Grid>
      </BrowserRouter>
    );
  }
}

export default MainContainer;
