import React, { createContext, useState, useEffect, useContext } from 'react';


export const PokemonContext = createContext();


export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://dummyapi.online/api/pokemon/');
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        const data = await response.json();
        setPokemons(data);
        setIsLoading(false)
      } catch (error) {
        console.error(error.message);
      } 
    };

    fetchPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemons, isLoading }}>
      {isLoading ? <div>Carregando...</div> : children}
    </PokemonContext.Provider>
  );
};