//import styled from "styled-components";
import { connect } from "react-redux";
import { Detalles, DivCard, DivImgPj, ImgPj, DivTextoImg, DivSpeciesGender, SpanSpeciesGender } from "./Card";
import { Link } from "react-router-dom";

function Favorites(props) {
    const {myFavorites} = props;

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
    return renderFavoritsCards
}

export function mapStateToProps(state) {
    return {myFavorites: state.myFavorites};
}
export default connect(mapStateToProps, null)(Favorites);