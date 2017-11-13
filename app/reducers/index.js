import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import decks from './decks';
import deck from './deck';

const rootReducer = combineReducers({
  router,
  decks,
  deck
});

export default rootReducer;
