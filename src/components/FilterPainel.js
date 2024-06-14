import styled from 'styled-components';
import colors from "../style/global";


export const StyledFilterPanel = styled.div`
    position: fixed;
    top: 0;
    left: ${props => (props.isOpen ? '0' : '-350px')};
    width: 300px;
    height: 100vh;
    background-color: ${colors.card};
    color: ${colors.primary};
    transition: left 0.3s ease-in-out;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    padding: 20px;
    overflow-y: auto;

    svg {
        cursor: pointer;
    
        &:hover {
            color: ${colors.accent};
            transition: 0.3s;
        }
    }
`;

export const CloseButton = styled.div`
    display: flex;
    justify-content: flex-start;

`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;

export const FilterTitle = styled.h2`
    margin-bottom: 15px;
`;

export const FilterCheckboxGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    
`;

export const FilterCheckboxLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding: 8px;
    font-size: 14px;
    background-color: ${props => (props.checked ? colors.accent : colors.primary)};
    color: ${props => (!props.checked ? colors.accent : colors.primary)};
    border: 1px solid ${colors.accent};
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;

    input {
        display: none;
    }
`;

export const FilterInput = styled.input`
    border: 1px solid rgb(105, 105, 105);
    border-radius: 6px;
    background-color: rgb(39, 39, 39);
    color: ${colors.primary};
    height: 25px;
    padding: 5px;
`;

export const OrderSelect = styled.select`
    border: 1px solid rgb(105, 105, 105);
    border-radius: 6px;
    background-color: rgb(39, 39, 39);
    color: ${colors.primary};
    height: 35px;
    padding: 5px;
    margin-bottom: 50px;
`;