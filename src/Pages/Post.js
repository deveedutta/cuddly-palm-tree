// simple-forum/src/Pages/PostsList.js

import React from 'react';
import axios from 'axios';
import Axios from '../Mock/Axios';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  componentDidMount() {
    // const { match: { params: { id } } } = this.props;
    // Axios.get(`https:\/\/jsonplaceholder.typicode.com/post/${id}`)
    // .then(data => {
    //   console.log('post_1', data);
    //   this.setState(data);
    //   this.data = data;
    // });
  }

  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <div className="Post">
        { 
          this.props.authorized == "true"
          ? <h1>Authorized Page for an Individual Post</h1>
          : <h1>An Individual Post</h1>
        }
        ID: { id }
        <br />
        <br />
        Data: {this.state.body}
       
        <br />

      </div>
    );
  }
}

export default Post;
