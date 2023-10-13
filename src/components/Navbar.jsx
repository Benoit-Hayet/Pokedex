import React from "react";
import PropTypes from "prop-types";
import { useState } from 'react';

function Navbar({setpokemonIndex, pokemonIndex}) {
  //La fonction se nomme Navbar et comprend deux props : SepokemonIndex et pokemon index.
  const precedent = () => {
    setpokemonIndex(pokemonIndex - 1);
  };

  const suivant = () => {
    setpokemonIndex(pokemonIndex + 1);
  };

  return (
    <div>
      <button onClick={precedent}>Précédent</button> :{" "}
      <button onClick={suivant}>Suivant</button>
    </div>
  );
}

export default Navbar;
