import styled from 'styled-components';

export const PokemonCard = styled.li`

    background: rgba(14, 160, 38, 0.36);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.6px);
    -webkit-backdrop-filter: blur(6.6px);

    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 15px;
`;

export const PokemonName = styled.span`
  font-size: 1.250rem;
  font-weight: 400;
  text-align: center;
`;

export const PokemonId = styled.span`
  font-size: 1rem;
  color: #777;
  margin-top: 5px;
`;

export const PokemonType = styled.span`
  font-size: 1rem;
  color: #555;
  margin-top: 10px;
`;

export const PokemonInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;

  width:100%;

  
`;

export const Hitpoints = styled.span`

  color: #f50f0f;

`

export const TypePokemon = styled.span`

    color: #423f3f;

`