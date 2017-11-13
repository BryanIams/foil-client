import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Flexbox from 'flexbox-react';
import RaisedButton from 'material-ui/RaisedButton';
import { Dropdown } from 'semantic-ui-react';
import * as decksActions from '../actions/decksActions';
import * as deckActions from '../actions/deckActions';
import DeckList from '../components/deckBuilder/DeckList';

class DeckBuilderPage extends Component {

  componentWillMount() {
    this.props.actions.getDecks();
  }

  handleChange = (e, { name, value }) => { this.props.actions.selectDeck(this.props.decks[0]); }

  renderDeckList() {
    if (this.props.deck.id) {
      return (
        <DeckList deck={this.props.deck} />
      );
    }
    return (
      <div />
    );
  }

  render() {
    return (
      <div>
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
              <Flexbox>
                <div>
                  <Dropdown placeholder="Deck" search selection options={this.props.decks.map(deck => ({ key: deck.id, value: deck.id, text: deck.title }))} onChange={this.handleChange} />
                </div>
              </Flexbox>
              <Flexbox flexGrow={1}>
                { this.renderDeckList() }
              </Flexbox>
            </Flexbox>
          </Flexbox>

          <Flexbox element="footer" height="60px">
            {JSON.stringify(this.props.deck, null, 2)}
          </Flexbox>
        </Flexbox>
      </div>
    );
  }
}

DeckBuilderPage.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.object).isRequired,
  deck: PropTypes.object,
  actions: PropTypes.shape({
    getDecks: PropTypes.func,
    selectDeck: PropTypes.func
  }).isRequired
};

function mapStateToProps(state) {
  return {
    decks: state.decks,
    deck: state.deck
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, decksActions, deckActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckBuilderPage);
