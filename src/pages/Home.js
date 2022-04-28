import {
  Button,
  ButtonGroup,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getSingleUser, loadUsers } from "../redux/actions";
import EditModal from "./EditModal";
import FormModal from "./FormModal";

const StyledTableCell = withStyles((theme) => {
  return {
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.background.paper,
    },
    body: {
      fontSize: 14,
      lineHeight: 0.8,
    },
  };
})(TableCell);

const StyledTableRow = withStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.secondary.light,
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.background.paper,
      },
    },
  };
})(TableRow);

const useStyles = makeStyles({
  table: {
    border: "0.5px solid gray",
  },
});

const Home = () => {
  const classes = useStyles();
  let dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(loadUsers());
    // eslint-disable-next-line
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("are you sure you wanted to delete the user?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div>
      <FormModal open={open} setOpen={setOpen} />
      {openEdit && <EditModal openEdit={openEdit} setOpenEdit={setOpenEdit} />}

      <div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            setOpen(true);
          }}
        >
          Add new User
        </Button>
      </div>

      <TableContainer>
        <Divider />
        <Table className={classes.table} aria-label="costumized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Contact</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => {
              const { id, name, location, email, contact } = user;
              return (
                <StyledTableRow key={id}>
                  <StyledTableCell component="th" scope="row">
                    {name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{email}</StyledTableCell>
                  <StyledTableCell align="right">{contact}</StyledTableCell>
                  <StyledTableCell align="right">{location}</StyledTableCell>
                  <StyledTableCell align="center">
                    <ButtonGroup>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => {
                          setOpenEdit(true);
                          dispatch(getSingleUser(id));
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => {
                          handleDelete(id);
                        }}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
