import * as types from './actionTypes';

export function SelectDeck(deck) {
  return { type: types.SELECT_DECK, deck };
}

export function selectDeck(deck) {
  return function select(dispatch) {
    return dispatch(SelectDeck(deck));
  };
}
