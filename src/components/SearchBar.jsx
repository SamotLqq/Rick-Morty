import { useState } from "react"
import styled from "styled-components"

const ButtonSearch = styled.button `
   cursor:pointer;
   margin: 10px;
   padding: 10px;
   background: green;
   color: white;
   border-radius: 10%;
`

const DivSearch = styled.div `
   text-align: right;
`

const InputSearch = styled.input `
   width: 200px;
   height: 40px;
   border-radius: 10%;
`

export default function SearchBar(props) {
   const [character, setCharacter] = useState('');

   const onChange = (e) => {
      setCharacter(e.target.value);
   }

   const cantidadPersonajes = 826;

   function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

   return (
      <DivSearch>
         <ButtonSearch onClick={() => props.onSearch(getRandomInt(cantidadPersonajes + 1))}>Agregar Random</ButtonSearch>
         <InputSearch type='search' onChange={onChange}/>
         <ButtonSearch onClick={() => props.onSearch(character)}>Agregar</ButtonSearch>
      </DivSearch>
   );
}
