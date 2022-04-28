import {
  Button,
  Divider,
  makeStyles,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { connect, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { editUser } from "../redux/actions";

const useStyles = makeStyles({
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

const EditModal = ({ openEdit, setOpenEdit, stateUser }) => {
  // const stateUser = useSelector((state) => state.users.user);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    if (stateUser) {
      setName(stateUser.name);
      setLocation(stateUser.location);
      setEmail(stateUser.email);
      setContact(stateUser.contact);
    } else {
      return;
    }
  }, [stateUser]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !location || !email || !contact) {
      return;
    } else {
      const id = stateUser.id;
      dispatch(editUser({ id, name, location, email, contact }));
      setName("");
      setLocation("");
      setEmail("");
      setContact("");
      setOpenEdit(false);
    }
  };
  return (
    <>
      <Modal open={openEdit} onClose={() => setOpenEdit(false)}>
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
                value={name || ""}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                size="small"
                fullWidth
                type="text"
                label="location"
                variant="standard"
                color="primary"
                value={location || ""}
                onChange={(e) => setLocation(e.target.value)}
              />
              <TextField
                size="small"
                fullWidth
                type="email"
                label="email"
                variant="standard"
                color="primary"
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                size="small"
                fullWidth
                type="number"
                label="contact"
                variant="standard"
                color="primary"
                value={contact || ""}
                onChange={(e) => setContact(e.target.value)}
              />
              <Button type="submit" variant="contained" color="primary">
                Edit User
              </Button>
            </form>
          </div>
        </Paper>
      </Modal>
    </>
  );
};
const mapStateToProps = (state) => {
  return { stateUser: state.users.user };
};
export default connect(mapStateToProps)(EditModal);
