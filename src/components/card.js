import styled, { keyframes } from 'styled-components';
import colors from '../style/global.js';

const upDetails= keyframes`

    0%{
        transform: translateY(100%);
    }

    100%{
        transform: translateY(0%);
        
    }

`

export const CardContainer = styled.div`
    background: ${colors.card};
    border-radius: 10px;
    margin: 15px;
    width: 250px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

&:hover {
    transform: scale(1.05);
}

img {
    width: 100%;
    border-radius: 10px 10px 0 0;
}

h3 {
    margin: 10px;
    text-align: center;
}

.info {
    padding: 10px;
    text-align: left;
}

.info p {
    margin: 10px 0;
}
.hover-info {
        display: none;
        padding: 10px;
        margin: 0;
        background: ${colors.glassDark};
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
        color: ${colors.primary};
        border-radius: 10px;
        animation: ${upDetails} 0.5s ease-in-out forwards;

    }

    &:hover .hover-info {
        display: block;
        
    }
`;

