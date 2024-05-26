import styled from "styled-components";
import React from "react";
import taza from "../img/taza.png"

const TazaStyled = styled.img`
    height: 100px;
    position: absolute;
    margin-top: 40%;
    margin-left: 2%;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
`;

function Taza(props){
        return(
            <TazaStyled src={taza} taza={props.taza}></TazaStyled>
        );
}
export default Taza;