import Card from './Card'; 
import styled from 'styled-components';

const SpanCards = styled.span `
   margin: 0 auto;
`

export default function Cards(props) {
   const { characters } = props;
   const retorno = characters.map((pj) => {
      return (
         <SpanCards>
             <Card 
               name = {pj.name} 
               species = {pj.species} 
               gender = {pj.gender} 
               image = {pj.image} 
               onClose={() => window.alert('Emulamos que se cierra la card')}
            /> 
         </SpanCards>
      )
   })
   return <div>{retorno}</div>;
}
