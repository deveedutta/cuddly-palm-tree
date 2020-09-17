import React from 'react';

const RoutesList = (props) => (
  <ul className="nav">
    <li><a tabIndex="0" href="/">Home</a></li>
    <li><a tabIndex="0" href="/posts/">All Posts</a></li>
    <li><a tabIndex="0" href="/post/1">1st Post</a></li>
    <li><a tabIndex="0" href="/post/2">2nd Post</a></li>
    <li><a tabIndex="0" href="/user/u1">User1</a></li>
    <li><a tabIndex="0" href="/user/u2">User2</a></li>

    <li><span>|</span></li>
    <li><a tabIndex="0" href="/authorized/posts/">Authorized View</a></li>
  </ul>
);

export default RoutesList;