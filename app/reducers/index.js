import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import decks from './decks';

const rootReducer = combineReducers({
  counter,
  router,
  decks
});

export default rootReducer;
