import React from "react";
import SelectSearchBar from "../formComponents/SelectSearchBar";
import Grid from "@material-ui/core/Grid";
import { getAllBooks } from "../api/getAllBooks";
import BooksTable from "../components/booksTable";

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
      this.setState({ listOfBooks: response });
    });
  }

  render() {
    return (
      <Grid
        width="full"
        justify="center"
        alignItems="center"
        container
        direction="column"
      >
        <div style={{ width: "35%", margin: "3%" }}>
          <SelectSearchBar placeholder="What would you like to read today?" />
        </div>
        {/* <Table /> */}
        <BooksTable listOfBooks={this.state.listOfBooks} />
      </Grid>
    );
  }
}

export default HomePage;
