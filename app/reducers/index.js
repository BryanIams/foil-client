import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import decks from './decks';

const rootReducer = combineReducers({
  router,
  decks
});

export default rootReducer;
