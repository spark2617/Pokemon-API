import { Container } from "./TypeCard.style";
import { Bug, Dark, Dragon, Electric, Fairy, Fighting, Fire, Flying, Ghost, Grass, Ground, Ice, Normal, Poison, Psychic, Rock, Steel, Water } from "./Icons"

export default function TypeCard({types}){
  return (

    <>
      <Container>

        {types.includes('Water') && <Water size={"30px"} />}
        {types.includes('Fire') && <Fire size={"30px"} />}
        {types.includes('Bug') && <Bug size={"30px"} />}
        {types.includes('Dragon') && <Dragon size={"30px"} />}
        {types.includes('Psychic') && <Psychic size={"30px"} />}
        {types.includes('Poison') && <Poison size={"30px"} />}
        {types.includes('Electric') && <Electric size={"30px"} />}
        {types.includes('Dark') && <Dark size={"30px"} />}
        {types.includes('Fairy') && <Fairy size={"30px"} />}
        {types.includes('Fighting') && <Fighting size={"30px"} />}
        {types.includes('Flying') && <Flying size={"30px"} />}
        {types.includes('Ghost') && <Ghost size={"30px"} />}
        {types.includes('Grass') && <Grass size={"30px"} />}
        {types.includes('Ground') && <Ground size={"30px"} />}
        {types.includes('Ice') && <Ice size={"30px"} />}
        {types.includes('Normal') && <Normal size={"30px"} />}
        {types.includes('Rock') && <Rock size={"30px"} />}
        {types.includes('Steel') && <Steel size={"30px"} />}

      </Container>

    </>


  );
};


