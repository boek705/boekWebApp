import React from "react";
import GoogleLogin from "react-google-login";
import LocalStorage from "../utils/localStorage";
// import { Redirect } from "react-router-dom";

class Login extends React.Component {
  render() {
    const responseGoogle = response => {
      console.log(response);
      LocalStorage.setGoogleUser(response.profileObj, () => {
        window.location = "/home";
      });
      console.log(LocalStorage.getGoogleUser());
      //   if (true) {
      //     console.log("successful response");
      //     return <Redirect to="/home" />;
      //   }
    };

    return (
      <React.Fragment>
        <p>Login with google</p>
        <GoogleLogin
          clientId="1083171593777-i3dgnicp05bnsq6kc9h1n9nsonp6bite.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </React.Fragment>
    );
  }
}

export default Login;
