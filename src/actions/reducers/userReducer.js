import { FETCH_USER_LOADING, FETCH_USER } from '../userActions';

const initialState = {
  loading: true,
  user: null
};


export default function userReducer(state = initialState, action){
  switch(action.type){
    case FETCH_USER_LOADING:
      return { ...state, loading: true };
    case FETCH_USER:
      return { ...state, user: action.payload, loading: false };
  }
}
