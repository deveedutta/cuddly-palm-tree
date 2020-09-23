// simple-forum/src/Pages/PostsList.js

import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import axios from 'axios';

// Store
import store from "../Store/";

// Actions
import { UserActions, PostsActions } from '../Actions';

// Components
import StatelessApp from '../Components/stateless/StatelessApp';
import UserThumbnail from '../Components/stateless/UserThumbnail';
import UserAddress from '../Components/stateless/UserAddress';
import UserAddressGeo from '../Components/stateless/UserAddressGeo';
import UserCompany from '../Components/stateless/UserCompany';
import UserPhoneNEmail from '../Components/stateless/UserPhoneNEmail';
import PostListElement from '../Components/stateless/PostListElement';


import './Home.css';

class Home extends React.Component {
  constructor(props, state) {
    super(props);
  }

  render() {
    const { match: { params: { id } } } = this.props;

    const elems1 = this.props.users.map(user => {
      return (
        <li key={user.id}>
          <UserThumbnail user={user} />
          <UserPhoneNEmail user={user} />
          <UserAddress user={user} />
          <UserAddressGeo user={user} />
          <UserCompany user={user} />
        </li>
      );
    });


    const elems2 = this.props.posts.map(post => {
      return (
        <PostListElement post={post} />
      );
    });



    return (
      <div className="Home">
        <main>
          <h1>Home</h1>
          <button onClick={this.props.fetchUsers}>Load Users</button>
          <button onClick={this.props.fetchPosts}>Load Posts</button>
          
          <section>
            <article>
              <h2>Users</h2>
              {
                this.props.usersLoading
                ? <h3>Users Loading...</h3>
                : ''
              }
              <ol className="List UsersList">{  elems1 }</ol>
            </article>
            <article>
              <h2>Posts</h2>
              
              {
                this.props.postsLoading
                ? <h3>Posts Loading...</h3>
                : ''
              }
              <ol className="List PostsList">{  elems2 }</ol>
            </article>
          </section>
          <StatelessApp />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  users: PropTypes.array,  
  // posts: PropTypes.array
  // users: PropTypes.arrayOf(PropTypes.shape({
  //   "userId": PropTypes.number.isRequired,
  //   "id": PropTypes.number.isRequired,
  //   "title": PropTypes.string.isRequired,
  //   "body": PropTypes.string.isRequired
  // }).isRequired).isRequired,
  
  posts: PropTypes.arrayOf(PropTypes.shape({
    "postId": PropTypes.number,
    "id": PropTypes.number,
    "name": PropTypes.string,
    "email": PropTypes.email,
    "body": PropTypes.string,
  }))
};

const mapStateToProps = state => {
  return {
    users: state.users.users,
    usersLoading: state.users.loading,
    usersError: state.users.error,
    posts: state.posts.posts,
    postsLoading: state.posts.loading,
    postsError: state.posts.error,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(UserActions.loadUsers()),
    fetchPosts: () => dispatch(PostsActions.loadPosts())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);
