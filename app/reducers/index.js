import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import decks from './decks';
import deck from './deck';
import cards from './cards';

const rootReducer = combineReducers({
  router,
  decks,
  deck,
  cards
});

export default rootReducer;
