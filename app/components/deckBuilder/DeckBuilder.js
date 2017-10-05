import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Flexbox from 'flexbox-react';

const DeckBuilder = ({ decks }) =>
    (<div>
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
            <Flexbox flexGrow={1}>
              {decks.map(deck =>
                <div>{deck.description}</div>
              )}
            </Flexbox>
          </Flexbox>
        </Flexbox>

        <Flexbox element="footer" height="60px">
          Footer
        </Flexbox>
      </Flexbox>
    </div>);

// DeckBuilder.propTypes = {
//   decks: PropTypes.arrayOf(PropTypes.shape({ description: PropTypes.string })).isRequired
// };

export default DeckBuilder;
