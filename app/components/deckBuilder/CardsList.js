import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './card/Card';

class CardsList extends Component {

  renderCardList() {
    console.log(this.props.cards);

    if (this.props.cards && this.props.cards.length > 0) {
      const cards = [];

      for (let i = 0; i < this.props.cards.length; i++) {
        cards.push(<div><Card card={this.props.cards[i]} /></div>);
      }

      return <div>{ cards }</div>;
    }
    return (
      <div />
    );
  }

  render() {
    return (
      <div>
        { this.renderCardList() }
      </div>
    );
  }
}

CardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string
  })).isRequired
};

function mapStateToProps(state) {
  return {
    cards: state.cards
  };
}

export default connect(mapStateToProps)(CardsList);
