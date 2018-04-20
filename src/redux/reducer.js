import { ACTION_TYPES } from './actions';

// initial state
const INITIAL_STATE = {
  results: null,
  error: null,
  isLoading: false,
};

// reducer
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_YELP_DATA:
      return { ...state, isLoading: true };
    case ACTION_TYPES.FETCH_YELP_DATA_SUCCESS:
      return { ...state, results: action.payload, isLoading: false };
    case ACTION_TYPES.FETCH_YELP_DATA_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}
