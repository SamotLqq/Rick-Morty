import styled from "styled-components";
import { connect, useDispatch } from "react-redux";
import { Detalles, DivCard, DivImgPj, ImgPj, DivTextoImg, DivSpeciesGender, SpanSpeciesGender } from "./Card";
import { Link } from "react-router-dom";
import { ASCENDENTE, DESCENDENTE } from "../redux/reducer";
import { filterCards, orderCards } from "../redux/actions";

const SelectPers = styled.select`
    background: gray;
    font-weight: 900;
    transition: 0.5s;
    height: 40px;
    border-radius: 5px;
    &:hover {
        background: black;
        color:gray;
        transition: 0.5s;
    }
`

const OptionPers = styled.option`
    font-weight: 900;
`

// Dentro de un div, crea dos elementos de HTML selector.

// Dentro del primero le pasaremos dos opciones: Ascendente y Descendente. Asegúrate de pasarles estos valores en sus atributos value. Por ejemplo:
// <option value="Ascendente">Ascendente</option>
// Dentro del segundo pásales las opciones: Male, Female, Genderless y unknown.
//  Asegúrate de pasarles estos valores en sus atributos value. Por ejemplo:

// Cada vez que se seleccione una opción de ordenamiento, despacha la action "orderCards".
//  Recuerda pasarle por parámetro el e.target.value del input. Utiliza el hook useDispatch.

// Cada vez que se seleccione una opción de filtrado, despacha la action "filterCards". Recuerda pasarle por parámetro el e.target.value del input.
//  Utiliza el hook useDispatch.


function Favorites(props) {
    let {myFavorites} = props;

    const renderFavoritsCards = myFavorites.map((e,i) => {
        return (
            <DivCard key={i}>
            <DivImgPj style={{marginTop: "40px"}}>
                <ImgPj src={e.image} alt="" />
                <DivTextoImg>{e.name}</DivTextoImg>
            </DivImgPj>
            <DivSpeciesGender>
                <SpanSpeciesGender>{e.species}</SpanSpeciesGender>
                <SpanSpeciesGender>{e.gender}</SpanSpeciesGender>
            </DivSpeciesGender>
            <Link style={{textDecoration: "none"}} to={`/detail/${e.detailId}`} >
                <Detalles>Detalles</Detalles>
            </Link>
            </DivCard>
    );})

    const dispatch = useDispatch();

    const cambioOrden = (e) => {
        dispatch(orderCards(e.target.value));
    }

    const cambioGenero = (e) => {
        dispatch(filterCards(e.target.value));
    }

    return (
        <div>
            <div style={{textAlign: "center", marginTop: "60px"}}>
                <SelectPers onChange={cambioOrden}>
                    <OptionPers value={ASCENDENTE}>{ASCENDENTE}</OptionPers>
                    <OptionPers value={DESCENDENTE}>{DESCENDENTE}</OptionPers>
                </SelectPers>
                <SelectPers style={{marginLeft: "20px"}} onChange={cambioGenero}>
                    {['Male', 'Female', 'unknown', 'Genderless'].map((gender) => {
                        return <OptionPers key={gender} value={gender}>{gender}</OptionPers>
                    })}
                </SelectPers>
            </div>
            {renderFavoritsCards}
        </div>
    )
}

export function mapStateToProps(state) {
    return {myFavorites: state.myFavorites};
}
export default connect(mapStateToProps, null)(Favorites);