import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { FilterTitle, FilterCheckboxGroup, FilterCheckboxLabel, CloseButton, StyledFilterPanel, ContainerInput, OrderSelect,FilterInput } from './FilterPainel.js';


const FilterPanel = ({ filters, handleCheckboxChange, isOpen, toggleFilterPanel, handleInputChange, handleOrderChange }) => {
    const types = ['Normal', 'Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy'];

    return (
        <StyledFilterPanel isOpen={isOpen}>
            <ContainerInput>
                <CloseButton onClick={toggleFilterPanel}>
                    <FaTimes size={24} />
                </CloseButton>
                <FilterTitle>Filter by Name</FilterTitle>
                <FilterInput
                    type="text"
                    value={filters.name}
                    onChange={(e) => handleInputChange(e, 'name')}
                />
                <FilterTitle>Filter by Ability</FilterTitle>
                <FilterInput
                    type="text"
                    value={filters.ability}
                    onChange={(e) => handleInputChange(e, 'ability')}
                />
                <FilterTitle>Filter by Type</FilterTitle>
                <FilterCheckboxGroup>
                    {types.map(type => (
                        <FilterCheckboxLabel key={type.toLowerCase()} checked={filters.types.includes(type.toLowerCase())} htmlFor={type.toLowerCase()}>
                            {type}
                            <input
                                type="checkbox"
                                id={type.toLowerCase()}
                                checked={filters.types.includes(type.toLowerCase())}
                                onChange={() => handleCheckboxChange(type.toLowerCase())}
                            />
                        </FilterCheckboxLabel>
                    ))}
                </FilterCheckboxGroup>
                <FilterTitle>Order</FilterTitle>
                <OrderSelect value={filters.order} onChange={(e) => handleOrderChange(e.target.value)}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </OrderSelect>
            </ContainerInput>
        </StyledFilterPanel>
    );
};



export default FilterPanel;
