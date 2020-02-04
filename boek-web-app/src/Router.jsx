import React from "react";
import { Route, Switch } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import Login from "./containers/Login";

class AppRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={MainContainer} />
      </Switch>
    );
  }
}

export default AppRouter;
