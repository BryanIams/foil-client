import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DeckBuilder from '../components/deckBuilder/DeckBuilder';
import * as deckActions from '../actions/deckActions';

class DeckBuilderPage extends Component {

  componentWillMount() {
    this.props.actions.getDecks();
  }

  render() {
    return (
      <DeckBuilder decks={this.props.decks} />
    );
  }
}

DeckBuilderPage.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.shape({
    getDecks: PropTypes.func
  }).isRequired
};

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(deckActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckBuilderPage);
