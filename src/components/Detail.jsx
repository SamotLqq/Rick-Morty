//import styled from "styled-components";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import styled from "styled-components";
import styles from "./Letra.module.css";
import { useNavigate } from "react-router-dom";


const Contenedor = styled.div`
    display: flex;
    justify-content: space-around;
    color:white;
    margin: 50px;
    align-items: center;
`
const Image = styled.img`
    width: 300px;
    heigth: 300px;
    border-radius: 5px;
`

const Regresar = styled.button`
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  margin: 20px;
  &:hover {
    color: black;
    background: #008f39;
    border-radius: 20px;
  }
`

export default function Detail(props) {
    const navigate = useNavigate();
    const backHome = () => navigate("/home");
    const backFavorites = () => navigate("/favorites");

    const {detailId} = useParams();
    const [character, setCharacter] = useState("");
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);

    //console.log(character);
    //const [name, status, specie, gender, origin, image] = character;
    const name = character.name;
    const status = character.status;
    const specie = character.species;
    const gender = character.gender;
    const origin = character.origin;
    const image = character.image;

    return (
        <Contenedor style={{background: "none", border: "none"}}>
            <div className={styles.portal}>
                <h1 className={styles.title}>Nombre: {name}</h1>
                <h4 className={styles.subtitle}>Estado: {status}</h4>
                <h4 className={styles.subtitle}>Especie: {specie}</h4>
                <h4 className={styles.subtitle}>Genero: {gender}</h4>
                <h4 className={styles.subtitle}>Origen: {origin === undefined ? undefined : origin.name}</h4>
                <Regresar onClick={backHome} className={styles.subtitle}>Ir a Home</Regresar>
                <Regresar onClick={backFavorites} className={styles.subtitle}>Ir a Favorites</Regresar>
            </div>
            <Image src={image} alt={name} />
        </Contenedor>
    )
}