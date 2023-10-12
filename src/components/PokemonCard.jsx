import React from 'react';
import PropTypes from 'prop-types';

function PokemonCard(props) {
  const pokemon = props.pokemon;

  if (!pokemon) {
    return <div>No Info</div>;
  }

  return (
    <div className="pokemon-card">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.imgSrc} alt={pokemon.name} />
      <p>Type: {pokemon.type}</p>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
}

export default PokemonCard;

