'use client'

import React, { useState, useEffect } from 'react';
import { bangersRegular, allanBold } from '@/app/typography';
import TypeBadge from '@/components/TypeBadge';
import axios from 'axios';

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null)
  const [error, setError] = useState(null); // COMIN SUN
  const [loading, setLoading] = useState(true);

  const fetchPokemon = () => {
    axios.get(url)
      .then((response) => setPokemon(response.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  const typeClasses = () => (
    pokemon.types.map(({ type }) => type.name).join("-")
  )

  useEffect(fetchPokemon, []);

  if (loading) {
    return <div>LOADING COMMING SUN IN YUR NEIBOR JU</div>
  }

  return(
    <div className="card group">
      <div className={`card-bg-${typeClasses()} flex flex-col justify-center h-[100%] p-2 rounded-md`}>
        <div>
          <span className="absolute flex left-3 sm:left-5 top-5 py-1 px-2 gap-1">
            { pokemon.types.map(({ type }, index) => <TypeBadge key={index} type={type} />) }
          </span>
          <span className={`absolute right-6 top-5 text-xl sm:text-3xl ${allanBold.className} text-zinc-800 transition-transform group-hover:text-zinc-100 text-shadow`}>
            #{pokemon.id}
          </span>
        </div>
        <div className="relative flex justify-center p-2 transition-transform hover:scale-110">
          <img
            className="scale-125 sm:scale-100 max-h-[13rem]"
            src={pokemon.sprites.other["official-artwork"].front_default}
          />
        </div>
      </div>
      <div className="pokemon-info p-2">
        <span className={`pokemon-name absolute bottom-[5%] left-[1.1rem] px-1 pt-[0.6rem] pb-[0.6rem] sm:px-2 sm:pt-[0.6rem] sm:pb-[0.8rem] bg-black text-white text-xl sm:text-2xl text-center ${bangersRegular.className} tracking-widest clip-name`}>
          {pokemon.name.toUpperCase()}
        </span>
      </div>
    </div>
  )
}

export default PokemonCard
