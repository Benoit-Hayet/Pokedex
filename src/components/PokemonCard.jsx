import React from 'react';

function PokemonCard(props) {
  const pokemon = props.pokemon[0];

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

export default PokemonCard;
