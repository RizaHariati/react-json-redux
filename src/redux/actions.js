import axios from "axios";
import * as types from "./actionType";

const getUsers = (users) => {
  return {
    type: types.GET_USERS,
    payload: users,
  };
};

const userDeleted = () => {
  return {
    type: types.DELETE_USER,
  };
};

const userAdded = (user) => {
  return {
    type: types.ADD_USER,
    payload: user,
  };
};

const getSingle = (user) => {
  return {
    type: types.GET_SINGLE_USER,
    payload: user,
  };
};

const userEdited = (user) => {
  return {
    type: types.EDIT_USER,
    payload: user,
  };
};

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        dispatch(getUsers(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((err) => console.log(err));
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((res) => {
        dispatch(userAdded(user));
        dispatch(loadUsers());
      })
      .catch((err) => console.log(err));
  };
};

export const getSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        dispatch(getSingle(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const editUser = (user) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${user.id}`, user)
      .then((res) => {
        dispatch(userEdited(user));
        dispatch(loadUsers());
      })
      .catch((err) => console.log(err));
  };
};
