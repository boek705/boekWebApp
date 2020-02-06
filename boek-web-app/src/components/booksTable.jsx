import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import { getBookDetails } from "../api/getBookDetails";
import BookDescription from "./bookDescription";

class BooksTable extends React.Component {
  state = {
    modal: {
      modalState: false,
      bookDescription: null
    },
    data: [
      { isbn: "a", name: "a", author: "a", category: "a" },
      { isbn: "a", name: "a", author: "a", category: "a" },
      { isbn: "a", name: "a", author: "a", category: "a" },
      { isbn: "a", name: "a", author: "a", category: "a" },
      { isbn: "a", name: "a", author: "a", category: "a" }
    ]
  };

  handleModalClose = () => {
    let newModal = this.state.modal;
    newModal.modalState = false;
    this.setState({ modal: newModal });
  };

  render() {
    const columns = [
      {
        Header: "ISBN",
        accessor: "isbn",
        style: { textAlign: "center" }
      },
      {
        Header: "Name",
        accessor: "name",
        style: { textAlign: "center" }
      },
      {
        Header: "Author",
        accessor: "author"
      },
      {
        Header: "Category",
        accessor: "category"
      },
      {
        Header: "Action",
        Cell: prop => {
          // console.log(prop);
          return (
            <React.Fragment>
              <Tooltip title="Read more">
                <IconButton
                  color="primary"
                  onClick={() => {
                    console.log(prop.original.isbn);
                    getBookDetails(prop.original.isbn, response => {
                      console.log(response);
                      let newModal = this.state.modal;
                      newModal.modalState = true;
                      newModal.bookDescription = response;
                      this.setState({ modal: newModal });
                    });
                  }}
                >
                  <MenuBookOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Button variant="contained" size="small" color="primary">
                Issue
              </Button>
            </React.Fragment>
          );
        }
      }
    ];

    return (
      <React.Fragment>
        <ReactTable
          columns={columns}
          data={this.props.listOfBooks}
          filterable={true}
          defaultPageSize={10}
          noDataText={"No Books Available"}
          showPaginationBottom={true}
          showPaginationTop={false}
          style={{ height: "440px", width: "92%", color: "" }}
        ></ReactTable>
        <BookDescription
          modal={this.state.modal}
          handleModalClose={() => {
            this.handleModalClose();
          }}
        />
      </React.Fragment>
    );
  }
}

export default BooksTable;
