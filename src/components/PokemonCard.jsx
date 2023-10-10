import React from 'react';

function PokemonCard() {
  const pokemon = pokemonList[1]

  return (
    pokemon.imgSrc ? (<figure>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"/>
      <figcaption>{pokemon.name}</figcaption>
    </figure>) : (<figure><p>???</p>
    <figcaption>{pokemon.name}</figcaption>
  </figure>)
  );
}

export default PokemonCard;


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
    imgSrc: "",
  },
];

 
