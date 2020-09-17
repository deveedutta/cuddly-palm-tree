// simple-forum/src/Pages/User.js

import React from 'react';
import axios from 'axios';
import Axios from '../Mock/Axios';
import Post from './Post';

class User extends React.Component  {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const { match: { params: { id } } } = this.props;
    // // replace with axios (lowercase letters) for actual API calls
    // // using a mock service to avoid frequent network calls
    // Axios.get(`https:\/\/jsonplaceholder.typicode.com/posts?userId=${id}`)
    // .then(({ data: user }) => {
    //   console.log('user', user);

    //   this.setState({ user });
    // });
  }

  render() {
    const { match: { params: { id } } } = this.props;
    var fullname, username, email, website, company;
    return (
      <div className="User">
        <h1>User Page</h1>
        <h2>ID: {id}</h2>
        <ul>
          <li>
            <span>User Name:</span>
            <span>{username}</span>
          </li>
          <li>
            <span>Full Name:</span>
            <span>{fullname}</span>
          </li>
          <li>
            <span>Email:</span>
            <span>{email}</span>
          </li>
          <li>
            <span>Website:</span>
            <span>{website}</span>
          </li>
          <li>
            <span>Company:</span>
            <span>{company}</span>
          </li>
        </ul>
      </div>
    );
  }
  
}

export default User;
