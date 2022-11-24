import styled from "styled-components"
import {Link} from "react-router-dom"
import { addFav, delFav } from "../redux/actions"
import { connect } from "react-redux"
import { useEffect, useState } from "react"

export const DivCard = styled.div `
   margin: 6%;
   width: 20%;
   display: inline-block;
   border: solid;
   text-align: center;
   background: purple;
`

export const ButtonEliminarCard = styled.button `
   cursor:pointer;
   margin: 10px;
   background: red;
   color: white;
`
export const DivSpeciesGender = styled.div `
   font-size: 20px;
   font-weight: 800;
   margin: 10px;
`
export const SpanSpeciesGender = styled.span `
   padding:20px;
`

export const DivImgPj = styled.div `
   position: relative;
   display: inline-block;
   text-align: center;
   width: 99%;
`

export const ImgPj = styled.img `
   width: 100%;
   border-radius:5px;
`

export const DivTextoImg = styled.div `
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
export const Detalles = styled.button `
   background:none;
   border-width: 5px;
   margin-bottom: 15px;
   font-size: 25px;
   font-weight: 700;
   color: black;
   text-decoration: none;
   cursor:pointer;
   border-radius: 50px;
   &:hover {
    transition: 0.5s;
    color: purple;
    background: black;
    border-radius: 50px;
  }
`

function Card(props) {
   const [isFav, setIsFav] = useState(false);
   const {addFav, delFav, detailId} = props;

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         delFav(detailId);
      }
      else {
         setIsFav(true);
         addFav(props);
      }
   }

   const eliminar = () => {
      props.onClose();
      setIsFav(false);
      delFav(detailId);
   }

   useEffect(() => {
      for (let i = 0; i < props.myFavorites.length; i++) {
         if (props.myFavorites[i].detailId === props.detailId) {
            setIsFav(true);
         }
      }
   }, [props.myFavorites]);

   return (
      <DivCard>
         <div style={{display: "flex", justifyContent: "space-between"}}>
         {
            isFav ? (
               <ButtonEliminarCard style={{fontSize: "20px", border: "none", background: "none"}} onClick={handleFavorite}>❤️</ButtonEliminarCard>
            ) : (
               <ButtonEliminarCard style={{fontSize: "20px", border: "none", background: "none"}} onClick={handleFavorite}>🤍</ButtonEliminarCard>
            )
         }
         <ButtonEliminarCard onClick={eliminar}>X</ButtonEliminarCard>
         </div>
         <DivImgPj>
            <ImgPj src={props.image} alt="" />
            <DivTextoImg>{props.name}</DivTextoImg>
         </DivImgPj>
         <DivSpeciesGender>
            <SpanSpeciesGender>{props.species}</SpanSpeciesGender>
            <SpanSpeciesGender>{props.gender}</SpanSpeciesGender>
         </DivSpeciesGender>
         <Link style={{textDecoration: "none"}} to={`/detail/${props.detailId}`} >
            <Detalles>Detalles</Detalles>
         </Link>
      </DivCard>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      addFav: (pj) => dispatch(addFav(pj)),
      delFav: (id) => dispatch(delFav(id))
   }
}

export function mapStateToProps(state) {
   return {myFavorites: state.myFavorites};
 }

export default connect(mapStateToProps, mapDispatchToProps)(Card);