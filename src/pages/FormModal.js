import {
  Button,
  Divider,
  makeStyles,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { addUser } from "../redux/actions";
// import { Alert } from "@material-ui/lab";

const useStyles = makeStyles({
  table: {
    border: "0.5px solid gray",
  },
  modalContent: {
    padding: "2rem",
  },
  paper: {
    height: 400,
    width: 500,
    marginTop: 100,
    margin: "auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
  },
});

const FormModal = ({ open, setOpen }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  // const [openSuccess, setOpenSuccess] = useState(false);
  // const [openError, setopenError] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, location, email, contact);
    if (!name || !location || !email || !contact) {
      return;
    } else {
      dispatch(addUser({ name, location, email, contact }));
      setName("");
      setLocation("");
      setEmail("");
      setContact("");
      setOpen(false);
    }
  };
  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setOpenSuccess(false);
  //   setopenError(false);
  // };
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Paper className={classes.paper}>
          <div className={classes.modalContent}>
            <Typography variant="h6" color="primary">
              New User Form
            </Typography>
            <Divider />
            <form
              noValidate
              autoComplete="false"
              className={classes.form}
              onSubmit={handleSubmit}
            >
              <TextField
                size="small"
                fullWidth
                type="text"
                label="name"
                variant="standard"
                color="primary"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                size="small"
                fullWidth
                type="text"
                label="location"
                variant="standard"
                color="primary"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <TextField
                size="small"
                fullWidth
                type="email"
                label="email"
                variant="standard"
                color="primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                size="small"
                fullWidth
                type="number"
                label="contact"
                variant="standard"
                color="primary"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <Button type="submit" variant="contained" color="primary">
                Add User
              </Button>
            </form>
          </div>
        </Paper>
      </Modal>
      {/* <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert severity="success" onClose={handleClose}>
          User is Saved
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error" onClose={handleClose}>
          Empty Value!
        </Alert>
      </Snackbar> */}
    </>
  );
};

export default FormModal;
