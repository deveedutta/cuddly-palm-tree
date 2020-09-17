"use strict";


import axios from 'axios';
import Axios from '../Mock/Axios';

const FETCH_POSTS = 'FETCH_POSTS';
const POSTS_LOAD_SUCCESS = 'POSTS_LOAD_SUCCESS';
const POSTS_LOAD_ERROR = 'POSTS_LOAD_ERROR';


const loadPosts = () => {
  return (dispatch) => {
    dispatch({type: FETCH_POSTS});

    // axios.get(`https:\/\/jsonplaceholder.typicode.com/post/1`)
    Axios.get(`https:\/\/jsonplaceholder.typicode.com/posts`)
    .then((response) => {
      dispatch({type: POSTS_LOAD_SUCCESS, payload: response});
    })
    .catch((err) => {
      dispatch({type: POSTS_LOAD_ERROR, payload: err});
    });   
  }
}

const postsLoadSuccess = posts => {
  return {
    type: POSTS_LOAD_SUCCESS,
    info: 'Loading posts succeeded',
    payload: posts
  }
}

const postsLoadFailed = error => {
  return {
    type: POSTS_LOAD_ERROR,
    info: 'Loading posts failed',
    payload: error
  }
}

const PostsActions = {
  loadPosts,
  postsLoadSuccess,
  postsLoadFailed
};

export default PostsActions;