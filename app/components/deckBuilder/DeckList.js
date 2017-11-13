import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class DeckList extends Component {

  render() {
    return (
      <div>
        One Ring: {this.props.deck.oneRing.description}
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

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(Object.assign({}, decksActions, deckActions), dispatch)
//   };
// }

export default connect(mapStateToProps)(DeckList);
