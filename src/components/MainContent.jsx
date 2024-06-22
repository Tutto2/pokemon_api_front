'use client'

import React, { useState, useEffect, useCallback } from 'react';
import PokemonCard from '@/components/PokemonCard';
import axios from 'axios';

const MainContent = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=100")
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = () => {
    if (!url) return

    axios.get(url)
      .then(({data: {results, next}}) => {
        setPokemons((prevPokemons) => [...prevPokemons, ...results])
        setUrl(next)
      })
  }

  useEffect(fetchPokemons, [url]);

  return (
    <div
      className="flex justify-center flex-wrap flex-1 ml-1 p-4 gap-4 max-w[88rem]"
      id="pokemon-list"
    >
      { pokemons.map(({ url }, index) => <PokemonCard key={index} url={url}/>) }
    </div>
  )
}

export default MainContent
