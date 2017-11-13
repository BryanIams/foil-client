import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Flexbox from 'flexbox-react';
import RaisedButton from 'material-ui/RaisedButton';
import { Dropdown } from 'semantic-ui-react';

const DeckBuilder = ({ decks }) =>
    (<div>
      <Flexbox flexDirection="column" minHeight="100vh">
        <Flexbox element="header" height="60px">
          <div className="backButton" data-tid="backButton">
            <Link to="/">
              <RaisedButton label="Default" />
            </Link>
          </div>
        </Flexbox>

        <Flexbox flexGrow={1}>
          <Flexbox flexGrow={1} flexDirection="row">
            <Flexbox flexGrow={1}>
              <div>
                <Dropdown placeholder="Deck" onChange={(e, { name, value }) => this.setState({ selection: value })} search selection options={decks.map(deck => ({ key: deck.id, value: deck.id, text: deck.title }))} />
              </div>
            </Flexbox>
          </Flexbox>
        </Flexbox>

        <Flexbox element="footer" height="60px">
          Footer
        </Flexbox>
      </Flexbox>
    </div>);

DeckBuilder.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.shape({ description: PropTypes.string, id: PropTypes.string })).isRequired,
  deck: PropTypes.shape({ description: PropTypes.string, id: PropTypes.string })
};

export default DeckBuilder;
