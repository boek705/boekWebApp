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

  getSearchSelectOptions = () => {
    //used to pass the options props to the select search bar
    let options = [];
    this.state.listOfBooks.forEach(item => {
      let obj = {};
      obj.label = item.name;
      obj.value = item.isbn;
      options.push(obj);
    });
    return options;
  };

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
          <SelectSearchBar
            placeholder="What would you like to read today?"
            options={
              this.getSearchSelectOptions()
              // { label: "a", value: "a" },
              // { label: "b", value: "a" },
              // { label: "d", value: "a" },
              // { label: "h", value: "a" },
              // { label: "j", value: "a" },
              // { label: "k", value: "a" }
            }
          />
        </div>
        {/* <Table /> */}
        <BooksTable listOfBooks={this.state.listOfBooks} />
      </Grid>
    );
  }
}

export default HomePage;
