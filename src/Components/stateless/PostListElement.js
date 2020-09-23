import React from 'react';

const PostListElement = ({ post }) => {
  if(post) {
    return (
      <li key={post.id}>
        <h4>{post.title}</h4>
        <small>UID: {post.userId}</small>
        <p>{post.body}</p>
        <small>Item ID: {post.id}</small>
      </li>
    )
  } else {
    return '';
  }
}

export default PostListElement;
