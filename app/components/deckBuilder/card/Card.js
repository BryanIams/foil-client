import React from 'react';
import PropTypes from 'prop-types';
import CardModal from './CardModal';

function Card(props) {
  return (
    <div>
      <img width="50" src={`http://localhost:60697/api/images/${props.card.number}.jpg`} alt={props.card.title} />
      {props.card.title}
      <CardModal card={props.card} />
    </div>);
}

Card.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    number: PropTypes.number
  }).isRequired
};

export default Card;
