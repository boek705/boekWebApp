import React from "react";
import ButtonAppBar from "../components/navbar";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Profile from "./Profile";
import Cart from "./Cart";
import Categories from "./Categories";

class MainContainer extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ButtonAppBar />
        </div>
        <div>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/categories" component={Categories} />
          <Route path="/cart" component={Cart} />
          <Route path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    );
  }
}

export default MainContainer;
