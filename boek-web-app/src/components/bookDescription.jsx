import React from "react";
import { Dialog } from "@material-ui/core";

class BookDescription extends React.Component {
  render() {
    const handleClose = () => {
      this.props.handleModalClose();
    };

    return (
      <Dialog
        fullWidth={true}
        open={this.props.modal.modalState}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <p>{this.props.modal.BookDescription}</p>
      </Dialog>
    );
  }
}

export default BookDescription;
