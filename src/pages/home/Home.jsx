import React, { useContext, useState } from 'react';
import {
    HomeContainer,
    Header,
    CardContainer,
    FilterButton,
    Footer
} from './style';

import Card from '../../components/Card.jsx';
import FilterPanel from '../../components/FilterPainel.jsx';
import { PokemonContext } from '../../context/PokemonProvider.jsx';

export default function Home() {
    const { pokemons } = useContext(PokemonContext);
    const [isOpen, setIsOpen] = useState(false);
    const [filters, setFilters] = useState({
        types: [],
        name: '',
        ability: '',
        order: 'asc'
    });

    const toggleFilterPanel = () => {
        setIsOpen(!isOpen);
    };

    const applyFilters = (pokemon) => {
        const { types, name, ability, order } = filters;

        if (types.length > 0 && !types.some(type => pokemon.types.some(pType => pType.type.name === type))) {
            return false;
        }

        if (name && !pokemon.name.toLowerCase().includes(name.toLowerCase())) {
            return false;
        }

        if (ability && !pokemon.abilities.some(abil => abil.ability.name.toLowerCase().includes(ability.toLowerCase()))) {
            return false;
        }

        return true;
    };

    const filteredPokemons = pokemons.filter(pokemon => applyFilters(pokemon));
    const sortedPokemons = [...filteredPokemons].sort((a, b) => {
        if (filters.order === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });

    const handleCheckboxChange = (type) => {
        setFilters(prevState => {
            const types = prevState.types.includes(type)
                ? prevState.types.filter(t => t !== type)
                : [...prevState.types, type];
            return { ...prevState, types };
        });
    };

    const handleInputChange = (e, field) => {
        const value = e.target.value;
        setFilters(prevState => ({ ...prevState, [field]: value }));
    };

    const handleOrderChange = (order) => {
        setFilters(prevState => ({ ...prevState, order }));
    };

    return (
        <HomeContainer>
            <Header>
                <h1>Poké Explore</h1>
            </Header>
            <FilterButton onClick={toggleFilterPanel}>
                {isOpen ? 'Close Filters' : 'Open Filters'}
            </FilterButton>
            <FilterPanel
                filters={filters}
                handleCheckboxChange={handleCheckboxChange}
                handleInputChange={handleInputChange}
                handleOrderChange={handleOrderChange}
                isOpen={isOpen}
                toggleFilterPanel={toggleFilterPanel}
            />
            <CardContainer>
                {sortedPokemons.map(pokemon => (
                    <Card key={pokemon.id} pokemon={pokemon} />
                ))}
            </CardContainer>
            <Footer>
                <p>&copy; 2024 Pokémon Fan Site. Todos os direitos reservados.</p>
                <p>Este é um projeto acadêmico e não é afiliado à The Pokémon Company.</p>
            </Footer>
        </HomeContainer>
    );
}
