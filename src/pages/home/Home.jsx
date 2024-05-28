import React, { useState, useEffect, useContext } from 'react';
import { 
  Container, 
  Title, 
  PokemonList, 
  InputSearch, 
  ContainerInputSearch, 
  ContainerFilter, 
  Dropdown, 
  SortButton 
} from './style';

import Card from '../../components/Card.jsx';
import { PokemonContext } from '../../context/PokemonProvider.jsx';

export default function Home() {
  const arrayContext = useContext(PokemonContext);
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  
  useEffect(() => {
    if (arrayContext && arrayContext.pokemons) {
      const mappedPokemons = arrayContext.pokemons.map(pokemon => ({
        id: pokemon.id,
        name: pokemon.pokemon,
        image: pokemon.image_url,
        type: pokemon.type,
        hitpoints: pokemon.hitpoints,
        abilities: pokemon.abilities 
      }));
      setPokemons(mappedPokemons);
      setFilteredPokemons(mappedPokemons); 
       
    }
  }, [arrayContext]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedAbility, setSelectedAbility] = useState('');
  const [hitPointsRange, setHitPointsRange] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [buttonOrder, setButtonOrder] = useState(true);

  const uniqueTypes = [...new Set(pokemons.map(pokemon => pokemon.type))];
  const uniqueAbilities = [...new Set(pokemons.flatMap(pokemon => pokemon.abilities))];

  const hitPointsRanges = [
    { label: '0-30', min: 0, max: 30 },
    { label: '31-60', min: 31, max: 60 },
    { label: '61-90', min: 61, max: 90 },
    { label: '91-200', min: 91, max: 200 }
  ];

  useEffect(() => {
    let filtered = pokemons.filter(pokemon =>
      (pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedType === '' || pokemon.type === selectedType) &&
      (selectedAbility === '' || pokemon.abilities.includes(selectedAbility)) &&
      (hitPointsRange === '' || (
        pokemon.hitpoints >= hitPointsRanges.find(range => range.label === hitPointsRange).min &&
        pokemon.hitpoints <= hitPointsRanges.find(range => range.label === hitPointsRange).max
      ))
    );

    if (sortOrder === 'asc') {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'desc') {
      filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredPokemons(filtered);
  }, [pokemons, searchTerm, selectedType, selectedAbility, hitPointsRange, sortOrder]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleAbilityChange = (e) => {
    setSelectedAbility(e.target.value);
  };

  const handleHitPointsRangeChange = (e) => {
    setHitPointsRange(e.target.value);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
    setButtonOrder(!buttonOrder);
  };

  return (
    <Container>
      <Title>Poké Explore</Title>
      
      <ContainerInputSearch>
        <InputSearch
          placeholder='Search Pokémon...'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </ContainerInputSearch>

      <ContainerFilter>
        <Dropdown value={selectedType} onChange={handleTypeChange}>
          <option value=''>All Types</option>
          {uniqueTypes.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </Dropdown>

        <Dropdown value={selectedAbility} onChange={handleAbilityChange}>
          <option value=''>All Abilities</option>
          {uniqueAbilities.map((ability, index) => (
            <option key={index} value={ability}>{ability}</option>
          ))}
        </Dropdown>

        <Dropdown value={hitPointsRange} onChange={handleHitPointsRangeChange}>
          <option value=''>All HP Ranges</option>
          {hitPointsRanges.map((range, index) => (
            <option key={index} value={range.label}>{range.label}</option>
          ))}
        </Dropdown>

        {buttonOrder
          ? <SortButton onClick={() => handleSortChange('asc')}>Sort Ascending</SortButton>
          : <SortButton onClick={() => handleSortChange('desc')}>Sort Descending</SortButton>}
      </ContainerFilter>

      <PokemonList>
        {filteredPokemons.map((pokemon) => (
          <Card key={pokemon.id} name={pokemon.name} image={pokemon.image} types={pokemon.type} hitpoints={pokemon.hitpoints}></Card>
        ))}
      </PokemonList>
    </Container>
  );
}
