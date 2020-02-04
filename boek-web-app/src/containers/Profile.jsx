import React from "react";
import LocalStorage from "../utils/localStorage";
import Button from "@material-ui/core/Button";

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
          <p>Name:{this.state.currentUser.name}</p>
          <p>Email:{this.state.currentUser.email}</p>
          <img src={this.state.currentUser.imageUrl} alt="" />
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
