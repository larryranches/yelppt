import { getYelpResultsApi } from '../api/yelpApi';

// action types
export const ACTION_TYPES = {
  FETCH_YELP_DATA: 'FETCH_YELP_DATA',
  FETCH_YELP_DATA_SUCCESS: 'FETCH_YELP_SUCCESS',
  FETCH_YELP_DATA_FAILURE: 'FETCH_YELP_DATA_FAILURE',
};

// action creators
export function fetchYelpData(searchLocation) {
  return async dispatch => {
    try {
      dispatch({ type: ACTION_TYPES.FETCH_YELP_DATA });

      const results = await getYelpResultsApi(searchLocation);

      if (results.error) {
        dispatch({
          type: ACTION_TYPES.FETCH_YELP_DATA_FAILURE,
          payload: results.error,
        });
      } else {
        dispatch({
          type: ACTION_TYPES.FETCH_YELP_DATA_SUCCESS,
          payload: results,
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  };
}
