import { 
  CardContainer
  } from './card.js';
import TypeCard from './TypeCard.jsx';




export default function Card({pokemon}){


  return (
    <CardContainer>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
            <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      
            <div className="hover-info">
                <p><strong>Abilities:</strong> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
                <p><strong>Description:</strong> {pokemon.species.name.charAt(0).toUpperCase() + pokemon.species.name.slice(1)} is a {pokemon.types.map(type => type.type.name).join(', ')} type Pokémon.</p>

                <p><strong>Number:</strong> #{pokemon.id}</p>
                <p><strong>Height:</strong> {pokemon.height / 10} m</p>
                <p><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
                <p><strong>Types:</strong> {pokemon.types.map(type => type.type.name).join(', ')}</p>
            </div>
        </CardContainer>

);
}