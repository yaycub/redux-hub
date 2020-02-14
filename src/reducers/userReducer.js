import { FETCH_USER_LOADING, FETCH_USER, SET_SEARCH } from '../actions/userActions';

const initialState = {
  loading: true,
  user: {
    name: '',
    followers: '',
    following: '',
    url: ''
  },
  search: 'Github UserName'
};


export default function userReducer(state = initialState, action){
  switch(action.type){
    case FETCH_USER_LOADING:
      return { ...state, loading: true };
    case FETCH_USER:
      return { ...state, user: action.payload, loading: false };
    case SET_SEARCH:
      return { ...state, search: action.payload };
    default: 
      return state;
  }
}
