import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function tripReducer(state = initialState.trips, action) {
  switch (action.type) {
    case types.LOAD_TRIP_SUCCESS:
      return action.trips;

    // case types.CREATE_TRIP_SUCCESS:
    //   return [
    //     ...state,
    //     Object.assign({}, action.trips)
    //   ];

    // case types.UPDATE_TRIP_SUCCESS:
    //   return [
    //     ...state.filter(trip => trip.id !== action.trip.id),
    //     Object.assign({}, action.trip)
    //   ];

    default:
      return state;
    }
}