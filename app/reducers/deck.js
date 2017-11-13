import * as types from '../actions/actionTypes';

export default function deck(state = {}, action) {
  switch (action.type) {
    case types.SELECT_DECK:
      return action.deck;
    default:
      return state;
  }
}
