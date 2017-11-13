import * as types from './actionTypes';

export function loadDecksSuccess(decks) {
  return { type: types.CREATE_DECK_SUCCESS, decks };
}

export function getDecks() {
  return function get(dispatch) {
    return fetch('http://localhost:56989/api/Decks')
      .then(response => response.json())
      .catch(error => {
        console.log(error);
      })
      .then(json => dispatch(loadDecksSuccess(json)))
      .catch(error => {
        console.log(error);
      });
  };
}
