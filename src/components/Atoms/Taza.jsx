import styled from "styled-components";
import React from "react";
import taza from "../img/taza.png"
import humo from "../img/humo.gif"

const TazaStyled = styled.img`
    height: 100px;
    position: absolute;
    margin-top: 40%;
    margin-left: 2%;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
`;

const HumoStyled = styled.img`
    position: absolute;
    height: 100px;
    margin-top: 30%;
`;

function Taza(props){
        return(
            <>
            <TazaStyled src={taza} taza={props.taza}></TazaStyled>
            <HumoStyled src={humo} humo={props.humo}></HumoStyled>
            </>
        );
}
export default Taza;