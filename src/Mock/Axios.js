import posts from '../PlaceHolder/https _jsonplaceholder.typicode.com_posts.json';
import users from '../PlaceHolder/https _jsonplaceholder.typicode.com_users.json';
import comments from '../PlaceHolder/https _jsonplaceholder.typicode.com_comments.json';
import posts_1 from '../PlaceHolder/https _jsonplaceholder.typicode.com_posts_1.json';
import postsByUserId1 from '../PlaceHolder/https _jsonplaceholder.typicode.com_posts?userId=1.json';



const Axios = {
  get: async (url) => {
    "use strict";
    console.log(`Responding to: ${url}`);

    if (url.indexOf('posts?userId=') > -1) {
      return postsByUserId1;
    }

    if (url.indexOf('/post/') > -1) {
      return posts_1;
    }


    if (url.indexOf('/posts') > -1) {
      return posts;
    }

    if (url.indexOf('/users') > -1) {
      return users;
    }

    if (url.indexOf('/comments') > -1) {
      return users;
    }

    return ["NONE"];
    
  }
};


export default Axios;
