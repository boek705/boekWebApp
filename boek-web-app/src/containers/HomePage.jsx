import React from "react";
import SelectSearchBar from "../components/selectSearchBar";
import Grid from "@material-ui/core/Grid";
import { getAllBooks } from "../api/getAllBooks";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfBooks: []
    };
  }

  componentDidMount() {
    //api call to get all book names from db and set listOfBooks
    getAllBooks(response => {
      console.log(response);
    });
  }

  render() {
    return (
      <Grid justify="center" alignItems="center" container direction="column">
        <div style={{ width: "35%", margin: "3%" }}>
          <SelectSearchBar />
        </div>
      </Grid>
    );
  }
}

export default HomePage;
