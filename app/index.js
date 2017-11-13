import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';


const store = configureStore();

render(
  <AppContainer>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Root store={store} history={history} />
    </MuiThemeProvider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <NextRoot store={store} history={history} />
        </MuiThemeProvider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
