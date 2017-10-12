import * as types from '../actions/actionTypes';

export default function decks(state = [], action) {
  switch (action.type) {
    case types.CREATE_DECK_SUCCESS:
      return action.decks;
    default:
      return state;
  }
}
