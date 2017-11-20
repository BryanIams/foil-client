import * as types from '../actions/actionTypes';

export default function cards(state = [], action) {
  switch (action.type) {
    case types.GET_CARDS:
      return action.cards;
    default:
      return state;
  }
}
