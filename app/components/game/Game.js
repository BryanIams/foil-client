import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Flexbox from 'flexbox-react';
import SiteLayout from './SiteLayout';

class Game extends Component {
  render() {
    return (
      <div>
        <Flexbox flexDirection="column" minHeight="100vh">
          <Flexbox element="header" height="60px">
            <div className="backButton" data-tid="backButton">
              <Link to="/">
                <i className="fa fa-arrow-left fa-3x" />
              </Link>
            </div>
          </Flexbox>

          <Flexbox flexGrow={1}>
            <Flexbox flexGrow={1} flexDirection="row">
              <Flexbox flexGrow={1}>Main Board</Flexbox>
              <Flexbox width="300px"><SiteLayout /></Flexbox>
            </Flexbox>
          </Flexbox>

          <Flexbox element="footer" height="60px">
            Footer
          </Flexbox>
        </Flexbox>
      </div>
    );
  }
}

export default Game;
