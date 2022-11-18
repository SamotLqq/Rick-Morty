import Card from './Card'; 
import styled from 'styled-components';

const SpanCards = styled.span `
   margin: 0 auto;
`

export default function Cards(props) {
   const { characters } = props;
   const retorno = characters.map((pj,i) => {
      return (
         <SpanCards key={i}>
             <Card 
               name = {pj.name} 
               species = {pj.species} 
               gender = {pj.gender} 
               image = {pj.image} 
               onClose={() => props.onClose(pj.name)}
               detailId = {pj.id}
            /> 
         </SpanCards>
      )
   })
   return <div>{retorno}</div>;
}
