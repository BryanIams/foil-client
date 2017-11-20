import * as types from './actionTypes';

export function loadCardsSuccess(cards) {
  return { type: types.GET_CARDS, cards };
}

export function getCards() {
  return function get(dispatch) {
    return fetch('http://localhost:56989/api/cards')
      .then(response => response.json())
      .catch(error => {
        console.log(error);
      })
      .then(json => dispatch(loadCardsSuccess(json)))
      .catch(error => {
        console.log(error);
      });
  };
}
