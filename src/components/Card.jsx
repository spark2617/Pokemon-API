import { 
    PokemonCard, 
    PokemonImage, 
    PokemonInfo, 
    PokemonName, 
    Hitpoints,
    TypePokemon,

  } from './card.js';
import TypeCard from './TypeCard.jsx';



export default function Card({name, image, types,hitpoints}){




    return(
        <>
        <PokemonCard >
            <PokemonInfo>
                <Hitpoints>{hitpoints}</Hitpoints>
                <TypePokemon><TypeCard types={types}/></TypePokemon>
            </PokemonInfo>
            <PokemonImage src={image} alt={name} />
            <PokemonName>{name}</PokemonName>
          </PokemonCard>
        </>
    )
}