import React from "react";
import GoogleLogin from "react-google-login";

class Login extends React.Component {
  render() {
    const responseGoogle = response => {
      console.log(response);
    };

    return (
      <React.Fragment>
        <p>kishalay</p>
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
