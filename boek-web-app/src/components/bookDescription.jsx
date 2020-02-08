import React from "react";
import { Dialog } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Img from "react-image";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../static.js";
import Paper from "@material-ui/core/Paper";

class BookDescription extends React.Component {
  render() {
    const handleClose = () => {
      this.props.handleModalClose();
    };
    const getSrcImageUrl = () => {
      if (this.props.modal.bookDescription != null)
        return this.props.modal.bookDescription.image_url;
    };
    const getBookDescription = () => {
      if (this.props.modal.bookDescription != null)
        return this.props.modal.bookDescription.description;
    };
    const getBookPublication = () => {
      if (this.props.modal.bookDescription != null)
        return this.props.modal.bookDescription.publication;
    };
    return (
      <Dialog
        // fullWidth={true}
        open={this.props.modal.modalState}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ padding: "5%" }}
        >
          <Grid container justify="center">
            <Paper style={{ padding: "2%" }}>
              <Img
                src={[getSrcImageUrl(), global.noImageFoundUrl]}
                loader={<CircularProgress />}
              />
            </Paper>
          </Grid>
          <Grid container direction="column" justify="flex-end">
            <Paper style={{ padding: "2%", margin: "2%" }}>
              <p>{getBookDescription()}</p>
              <p>Publications: {getBookPublication()}</p>
            </Paper>
          </Grid>
        </Grid>
      </Dialog>
    );
  }
}

export default BookDescription;
