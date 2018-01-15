import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './card/Card';

class DeckList extends Component {

  render() {
    return (
      <div>
        <Card card={this.props.deck.oneRing} />
      </div>
    );
  }
}

DeckList.propTypes = {
  deck: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    freePeoplesCards: PropTypes.array,
    oneRing: PropTypes.shape({ description: PropTypes.string }),
    shadowCards: PropTypes.array,
    sites: PropTypes.array }).isRequired
};

function mapStateToProps(state) {
  return {
    deck: state.deck
  };
}

export default connect(mapStateToProps)(DeckList);
