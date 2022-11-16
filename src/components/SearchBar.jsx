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
   text-align: center;
`

const InputSearch = styled.input `
   width: 200px;
   height: 40px;
   border-radius: 10%;
`

export default function SearchBar(props) {
   return (
      <DivSearch>
         <InputSearch type='search'/>
         <ButtonSearch onClick={props.onSearch}>Agregar</ButtonSearch>
      </DivSearch>
   );
}
