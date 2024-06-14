import styled from 'styled-components';
import colors from '../../style/global';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: ${colors.background};
    color: ${colors.primary};
`;

export const Header = styled.header`
    text-align: center;
    margin: 20px 0;

    h1 {
        margin: 0;
        color: ${colors.accent};
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
`;

export const FilterPanel = styled.div`
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
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;

export const FilterButton = styled.button`
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: ${colors.accent};
    color: ${colors.background};
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1000;
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

    height: 15px;
    width: 50px;

    padding: 8px;

    font-size: 14px;

    background-color: ${props=> props.checked ? colors.accent : colors.primary};
    color: white;

    border: 1px solid ${colors.accent};
    border-radius: 6px;

    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;


    input{
        display:none;
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

export const ApplyButton = styled.button`
    background-color: ${colors.accent};
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
`;

export const ResetButton = styled.button`
    background-color: ${colors.background};
    color: ${colors.accent};
    border: 1px solid ${colors.accent};
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
`;

export const Footer = styled.footer`
    background-color: ${colors.card};
    color: ${colors.primary};
    text-align: center;
    padding: 20px;
    margin-top: auto;
    width: 100%;
    bottom: 0;
`;
