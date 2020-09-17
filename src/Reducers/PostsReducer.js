const initialPostState = {
  posts: [],
  loading: false,
  error: ''
};


const FETCH_POSTS = 'FETCH_POSTS';
const POSTS_LOAD_SUCCESS = 'POSTS_LOAD_SUCCESS';
const POSTS_LOAD_ERROR = 'POSTS_LOAD_ERROR';


const PostsReducer = (state = initialPostState, action) => {
  switch(action.type) {
    case FETCH_POSTS:
    return {
      ...state,
      loading: true
    }

    case POSTS_LOAD_SUCCESS:
    return {
      ...state,
      posts: action.payload,
      loading: false,
    }

    case POSTS_LOAD_ERROR:
    return {
      ...state,
      posts: [],
      error: action.payload,
      loading: false,
    }

    default:
    return state;
  }

}

export default PostsReducer;