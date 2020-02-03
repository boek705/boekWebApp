import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import Login from "./containers/Login";
// import LocalStorage from "./utils/localStorage";

class AppRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={MainContainer} />
        {/* <Route path="/" render={() => <Redirect to="/login" />} /> */}
      </Switch>
    );
  }
}

export default AppRouter;
