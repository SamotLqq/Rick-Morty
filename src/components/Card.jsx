import styled from "styled-components"

const DivCard = styled.div `
   margin: 6%;
   width: 20%;
   display: inline-block;
   border: solid;
   text-align: center;
   background: white;
`

const DivButtonEliminarCard = styled.div `
   text-align: right;
` 

const ButtonEliminarCard = styled.button `
   cursor:pointer;
   margin: 10px;
   background: red;
   color: white;
`
const DivSpeciesGender = styled.div `
   font-size: 20px;
   font-weight: 800;
   margin: 10px;
`
const SpanSpeciesGender = styled.span `
   padding:20px;
`

const DivImgPj = styled.div `
   position: relative;
   display: inline-block;
   text-align: center;
   width: 99%;
`

const ImgPj = styled.img `
   width: 100%;
   border-radius:5px;
`

const DivTextoImg = styled.div `
   position: absolute;
   top: 85%;
   left: 5%;
   transform: translate(0%, 0%);
   font-size: 20px;
   font-weight: 800;
   background: black;
   opacity: 0.75;
   color:white;
   padding: 5px;
   border-radius: 5px;
`


export default function Card(props) {
   return (
      <DivCard>
         <DivButtonEliminarCard><ButtonEliminarCard onClick={props.onClose}>X</ButtonEliminarCard></DivButtonEliminarCard>
         <DivImgPj>
            <ImgPj src={props.image} alt="" />
            <DivTextoImg>{props.name}</DivTextoImg>
         </DivImgPj>
         <DivSpeciesGender>
            <SpanSpeciesGender>{props.species}</SpanSpeciesGender>
            <SpanSpeciesGender>{props.gender}</SpanSpeciesGender>
         </DivSpeciesGender>
      </DivCard>
   );
}