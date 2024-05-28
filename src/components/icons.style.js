import styled from 'styled-components';


const Icons = styled.div`
    border-radius: 100%;
    height: ${props => props.size || '100px'};
    width: ${props => props.size || '100px'};
    transition: 200ms all;

    img {
        
        height: 60%;
        width: 60%;
        margin: 20%;
    }

    &:hover{
        filter: saturate(200%);
        cursor: pointer;
    }

`

export const IconsBug = styled(Icons)`
    background: #92BC2C;
    box-shadow: 0 0 20px #92BC2C;
    
`

export const IconsDark = styled(Icons)`
    background: #595761;
    box-shadow: 0 0 20px #595761;
`

export const IconsDragon = styled(Icons)`
    background: #0C69C8;
    box-shadow: 0 0 20px #0C69C8;
`

export const IconsElectric = styled(Icons)`
    background: #F2D94E;
    box-shadow: 0 0 20px #F2D94E;
`

export const IconsFire = styled(Icons)`
    background: #FBA54C;
    box-shadow: 0 0 20px #FBA54C;
`

export const IconsFairy = styled(Icons)`
    background: #EE90E6;
    box-shadow: 0 0 20px #EE90E6;
`

export const IconsFighting = styled(Icons)`
    background: #D3425F;
    box-shadow: 0 0 20px #D3425F;
`

export const IconsFlying = styled(Icons)`
    background: #A1BBEC;
    box-shadow: 0 0 20px #A1BBEC;
`

export const IconsGhost = styled(Icons)`
    background: #5F6DBC;
    box-shadow: 0 0 20px #5F6DBC;
`

export const IconsGrass = styled(Icons)`
    background: #5FBD58;
    box-shadow: 0 0 20px #5FBD58;
`

export const IconsGround = styled(Icons)`
    background: #DA7C4D;
    box-shadow: 0 0 20px #DA7C4D;
`

export const IconsIce = styled(Icons)`
    background: #75D0C1;
    box-shadow: 0 0 20px #75D0C1;
`

export const IconsNormal = styled(Icons)`
    background: #A0A29F;
    box-shadow: 0 0 20px #A0A29F;
`

export const IconsPoison = styled(Icons)`
    background: #B763CF;
    box-shadow: 0 0 20px #B763CF;
`

export const IconsPsychic = styled(Icons)`
    background: #FA8581;
    box-shadow: 0 0 20px #FA8581;
`

export const IconsRock = styled(Icons)`
    background: #C9BB8A;
    box-shadow: 0 0 20px #C9BB8A;
`

export const IconsSteel = styled(Icons)`
    background: #5695A3;
    box-shadow: 0 0 20px #5695A3;
`

export const IconsWater = styled(Icons)`
    background: #539DDF;
    box-shadow: 0 0 20px #539DDF;
`
