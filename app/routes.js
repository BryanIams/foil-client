import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import GamePage from './containers/game/GamePage';
import DeckBuilderPage from './containers/DeckBuilderPage';

export default () => (
  <App>
    <Switch>
      <Route path="/deck-builder" component={DeckBuilderPage} />
      <Route path="/game" component={GamePage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
