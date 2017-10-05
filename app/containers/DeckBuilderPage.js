import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DeckBuilder from '../components/deckBuilder/DeckBuilder';
import * as deckActions from '../actions/deckActions';

class DeckBuilderPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.props.actions.getDecks()
    .then(decks => this.setState({ decks }));
  }
  render() {
    return (
      <DeckBuilder decks={this.props.decks} />
    );
  }
}

DeckBuilderPage.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.shape({}).isRequired
};

function mapStateToProps() {
  const decks = [];
  return {
    decks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(deckActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckBuilderPage);
