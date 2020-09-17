"use strict";

import axios from 'axios';
import Axios from '../Mock/Axios';


const FETCH_USERS = 'FETCH_USERS';
const USERS_LOAD_SUCCESS = 'USERS_LOAD_SUCCESS';
const USERS_LOAD_FAILED = 'USERS_LOAD_FAILED';


const loadUsers = () => {
  return (dispatch) => {
    dispatch({type: FETCH_USERS});

    

    // axios.get(`https:\/\/jsonplaceholder.typicode.com/posts?userId=${id}`)
    // .then((response) => {
    //   dispatch({ type: USERS_LOAD_SUCCESS, payload: response.data});
    // })

    // const id = 1;
    // Axios.get(`https:\/\/jsonplaceholder.typicode.com/posts?userId=${id}`)
    Axios.get(`https:\/\/jsonplaceholder.typicode.com/users`)
    .then((response) => {
      // dispatch({ type: USERS_LOAD_SUCCESS, payload: response});
      dispatch(usersLoadSuccess(response));
    })
    .catch((err) => {
      // dispatch({type: USERS_LOAD_FAILED, payload: err});
      dispatch(usersLoadFailed(err));
    });
  }
}

const usersLoadSuccess = users => {
  return {
    type: USERS_LOAD_SUCCESS,
    info: 'Loading users succeeded',
    payload: users
  }
}

const usersLoadFailed = error => {
  return {
    type: USERS_LOAD_FAILED,
    info: 'Loading users failed',
    payload: error
  }
}


const UserActions = {
  loadUsers,
  usersLoadSuccess,
  usersLoadFailed
}


export default UserActions;