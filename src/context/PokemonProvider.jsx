import React, { createContext, useState, useEffect, useContext } from 'react';


export const PokemonContext = createContext();


export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=48')
            .then(response => response.json())
            .then(data => {
                const fetches = data.results.map(pokemon =>
                    fetch(pokemon.url)
                        .then(response => response.json())
                );
                Promise.all(fetches).then(results => setPokemons(results));
            })
            .catch(error => console.error('Error fetching Pokémon list:', error));
    }, []);

  return (
    <PokemonContext.Provider value={{ pokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};