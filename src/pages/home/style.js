import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
`;

export const PokemonList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 20px;
`;

export const PokemonCard = styled.li`
  background-color: #fff;
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
  font-size: 1.5rem;
  font-weight: bold;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const ContainerInputSearch = styled.div`
  width: 127.5vh;
  max-height: 45px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const InputSearch = styled.input`
  padding: 15px;
  border: 1px solid #525252;
  border-radius: 8px;
  font-size: 16px;
  width: 90vh;
  color: #403a34;

  &:focus {
    outline: 0;
  }
`;

export const ButtonSearch = styled.button`
  font-size: 1rem;
  font-weight: 500;
  height: 45px;
  padding: 10px;
  border-radius: 8px;
  border:  3px solid #02c20c;
  background-color: white;
  transition: 0.2s;
  color: #02c20c;

  &:hover {
    background-color: #02c20c;
    transition: 0.2s;
    color: white;
  }
`;

export const ContainerFilter = styled.div`
  display: flex;
  justify-content: center;
  width: 90vh;
  margin-bottom: 20px;
  gap: 10px;
`;

export const Dropdown = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #525252;
  font-size: 16px;
  color: #403a34;
  background-color: #ffffff;

  &:focus {
    outline: 0;
  }
`;

export const SortButton = styled.button`
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #525252;
  font-size: 16px;
  color: #ffffff;
  background-color: #009e08;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #02c20c;
  }
`;


export const MultiSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;