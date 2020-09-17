const initialUserState = {
  users: [],
  loading: false,
  error: ''
};


const FETCH_USERS = 'FETCH_USERS';
const USERS_LOAD_SUCCESS = 'USERS_LOAD_SUCCESS';
const USERS_LOAD_FAILED = 'USERS_LOAD_FAILED';


const UserReducer = (state=initialUserState, action) => {
  switch(action.type) {
    case FETCH_USERS:
    return {
      ...state,
      loading: true
    }

    case USERS_LOAD_SUCCESS:
    return {
      ...state,
      users: action.payload,
      loading: false
    }

    case USERS_LOAD_FAILED:
    return {
      ...state,
      users: [],
      error: action.payload,
      loading: false
    }

    default:
    return state;
  }

}

export default UserReducer;