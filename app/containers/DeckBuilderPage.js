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
import * as cardsActions from '../actions/cardsActions';
import DeckList from '../components/deckBuilder/DeckList';
import CardsList from '../components/deckBuilder/CardsList';

class DeckBuilderPage extends Component {

  componentWillMount() {
    this.props.actions.getDecks();
    this.props.actions.getCards();
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
              <Flexbox flexGrow={1}>
                <CardsList cards={this.props.cards} />
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
  deck: PropTypes.shape({ description: PropTypes.string, id: PropTypes.string }),
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.shape({
    getDecks: PropTypes.func,
    selectDeck: PropTypes.func,
    getCards: PropTypes.func
  }).isRequired
};

DeckBuilderPage.defaultProps = {
  deck: {}
};

function mapStateToProps(state) {
  return {
    decks: state.decks,
    deck: state.deck,
    cards: state.cards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, decksActions, deckActions, cardsActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckBuilderPage);
