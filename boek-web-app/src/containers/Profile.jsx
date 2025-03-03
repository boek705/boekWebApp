import React from "react";
import LocalStorage from "../utils/localStorage";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null, userObject: null };
  }

  componentDidMount() {
    this.setState({ currentUser: LocalStorage.getGoogleUser() });
    //api get call to get all data of user with id this.state.currentUser.id
    //if user not found, create user entry in database and fetch the updated detials from database
    //else fetch details from db and render userObject
  }

  getCurrentUserData = () => {
    if (this.state.currentUser) {
      return (
        <React.Fragment>
          {/* <p>Name:{this.state.currentUser.name}</p>
          <p>Email:{this.state.currentUser.email}</p>
          <img src={this.state.currentUser.imageUrl} alt="" />
          <p>Issued books are:</p>
          <p>{this.state.currentUser.issued}</p>
          <p>Your contribution:</p>
          <p>{this.state.currentUser.contributions}</p> */}
          <Grid
            container
            direction="row"
            justify="center"
            style={{ height: "100%" }}
          >
            <Grid container direction="column" justify="center">
              <p>asas</p>
            </Grid>
            <Grid container direction="column" justify="center">
              <p>dddddddddddddddddddddd</p>
            </Grid>
          </Grid>
        </React.Fragment>
      );
    } else {
      return <p>Please sign in to view your profile</p>;
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.getCurrentUserData()}
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            if (this.state.currentUser) {
              LocalStorage.removeGoogleUser();
              this.setState({ currentUser: null });
            } else {
              window.location = "/login";
            }
          }}
        >
          {this.state.currentUser ? "Logout" : "Login"}
        </Button>
      </React.Fragment>
    );
  }
}

export default Profile;
