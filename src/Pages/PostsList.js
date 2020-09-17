// simple-forum/src/Pages/PostsList.js

import React from 'react';
import Post from './Post';

function PostsList(props) {
  return (
    <div className="PostsList">
      {
        props.authorized == "true"
        ? <h1>Authorized View of All Posts List</h1>
        : <h1>Posts List</h1>
      }
      
      {props.children}

    </div>
  );
}

export default PostsList;
